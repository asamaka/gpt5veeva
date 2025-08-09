import { describe, it, expect } from 'vitest';
import { ResumeStructSchema, QuestionObjectSchema, DiffObjectSchema } from '../src/schemas';
describe('schemas', () => {
    it('validates minimal resume struct', () => {
        const parsed = ResumeStructSchema.parse({
            basics: { name: 'A', email: 'a@example.com', links: [] },
            skills: [], experience: [], projects: [], education: [], certs: [],
            meta: { template: 'classic', voice: 'neutral' }
        });
        expect(parsed.basics.name).toBe('A');
    });
    it('validates question object', () => {
        const q = QuestionObjectSchema.parse({
            id: 'q1', priority: 'high', field_path: 'experience[0].bullets[0]', question: 'How much?', type: 'number', required: true, rationale: 'metric', confidence_before: 0.3, target_confidence: 0.8
        });
        expect(q.priority).toBe('high');
    });
    it('validates diff object', () => {
        const d = DiffObjectSchema.parse({ field_path: 'basics.title', before: '', after: 'SE', source: 'qa', source_id: 'qa:abc' });
        expect(d.source).toBe('qa');
    });
});
