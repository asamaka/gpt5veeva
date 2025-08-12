import type { ResumeStruct, QuestionObject, DiffObject } from '@veeva/core';

export interface GapAnalysisResult {
  completeness_score: number;
  gaps: { field_path: string; why: string; priority: 'high'|'medium'|'low' }[];
  uncertainties: string[];
}

export interface LLMProvider {
  generateGapAnalysis(struct: ResumeStruct, roleHint?: string): Promise<GapAnalysisResult>;
  generateQuestions(struct: ResumeStruct, gaps: GapAnalysisResult['gaps'], uncertainties: string[], max?: number): Promise<QuestionObject[]>;
  applyAnswersAndRewrite(struct: ResumeStruct, answers: { id: string; value: any }[], voice: ResumeStruct['meta']['voice']): Promise<{ struct: ResumeStruct; diff: DiffObject[] }>;
}

export class MockLLM implements LLMProvider {
  async generateGapAnalysis(struct: ResumeStruct): Promise<GapAnalysisResult> {
    const gaps: GapAnalysisResult['gaps'] = [];
    if (!struct.basics.title) {
      gaps.push({ field_path: 'basics.title', why: 'Missing professional title', priority: 'high' });
    }
    const lacksMetrics = struct.experience.some((exp: ResumeStruct['experience'][number]) => exp.bullets.some((b: ResumeStruct['experience'][number]['bullets'][number]) => !/\d/.test(b.text)));
    if (lacksMetrics) {
      gaps.push({ field_path: 'experience[*].bullets[*]', why: 'Missing metrics in bullets', priority: 'high' });
    }
    const score = Math.max(0.4, 1 - gaps.length * 0.1);
    return { completeness_score: Number(score.toFixed(2)), gaps, uncertainties: [] };
  }

  async generateQuestions(_struct: ResumeStruct, gaps: GapAnalysisResult['gaps']): Promise<QuestionObject[]> {
    const qs: QuestionObject[] = [] as any;
    if (gaps.find(g => g.field_path === 'basics.title')) {
      qs.push({ id: 'q-title', priority: 'high', field_path: 'basics.title', question: 'What is your professional title?', type: 'autocomplete', required: true, rationale: 'Missing title', confidence_before: 0.3, target_confidence: 0.9 });
    }
    if (gaps.find(g => g.field_path.includes('bullets'))) {
      qs.push({ id: 'q-metric', priority: 'high', field_path: 'experience[0].bullets[0]', question: 'What was the % improvement or impact for this bullet?', type: 'number', units: '%', required: false, display_hint: 'slider', rationale: 'Add metric', confidence_before: 0.2, target_confidence: 0.8 });
    }
    return qs.slice(0, 5);
  }

  async applyAnswersAndRewrite(struct: ResumeStruct, answers: { id: string; value: any }[]): Promise<{ struct: ResumeStruct; diff: DiffObject[] }> {
    const diffs: DiffObject[] = [] as any;
    const out: ResumeStruct = JSON.parse(JSON.stringify(struct));
    for (const a of answers) {
      if (a.id === 'q-title') {
        diffs.push({ field_path: 'basics.title', before: out.basics.title ?? '', after: String(a.value), source: 'qa', source_id: 'qa:q-title' });
        out.basics.title = String(a.value);
      }
      if (a.id === 'q-metric' && out.experience[0]?.bullets[0]) {
        const before = out.experience[0].bullets[0].text;
        const after = `Improved key metric by ${a.value}% across target scope.`;
        out.experience[0].bullets[0].text = after;
        out.experience[0].bullets[0].evidence_ids = 'qa:q-metric';
        diffs.push({ field_path: 'experience[0].bullets[0].text', before, after, source: 'qa', source_id: 'qa:q-metric' });
      }
    }
    return { struct: out, diff: diffs };
  }
}