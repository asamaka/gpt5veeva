import { z } from 'zod';
export const LinkSchema = z.object({
    label: z.string(),
    url: z.string()
});
export const BasicsSchema = z.object({
    name: z.string(),
    title: z.string().optional().default(''),
    email: z.string(),
    phone: z.string().optional(),
    location: z.string().optional(),
    links: z.array(LinkSchema)
});
export const SkillSchema = z.object({
    name: z.string(),
    level: z.string().optional(),
    keywords: z.string()
});
export const BulletSchema = z.object({
    id: z.string(),
    text: z.string(),
    evidence_ids: z.string()
});
export const ExperienceItemSchema = z.object({
    company: z.string(),
    title: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
    bullets: z.array(BulletSchema)
});
export const ProjectItemSchema = z.object({
    name: z.string(),
    summary: z.string().optional(),
    bullets: z.array(BulletSchema)
});
export const EducationItemSchema = z.object({
    school: z.string(),
    degree: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional()
});
export const CertItemSchema = z.object({
    name: z.string(),
    issuer: z.string().optional(),
    date: z.string().optional()
});
export const MetaSchema = z.object({
    template: z.enum(["classic", "modern", "minimal"]).default("classic"),
    voice: z.enum(["formal", "neutral", "energetic"]).default("neutral")
});
export const ResumeStructSchema = z.object({
    basics: BasicsSchema,
    skills: z.array(SkillSchema),
    experience: z.array(ExperienceItemSchema),
    projects: z.array(ProjectItemSchema),
    education: z.array(EducationItemSchema),
    certs: z.array(CertItemSchema),
    meta: MetaSchema
});
export const QuestionOptionSchema = z.object({ id: z.string(), label: z.string() });
export const QuestionObjectSchema = z.object({
    id: z.string(),
    priority: z.enum(["high", "medium", "low"]),
    field_path: z.string(),
    question: z.string(),
    type: z.enum(["number", "single", "multi", "text", "date", "autocomplete"]),
    units: z.enum(["%", "$", "count"]).nullable().optional(),
    required: z.boolean(),
    options: z.array(QuestionOptionSchema).optional(),
    suggested_default: z.string().optional(),
    display_hint: z.enum(["chips", "slider", "select", "free"]).optional(),
    rationale: z.string(),
    depends_on: z.array(z.string()).optional(),
    confidence_before: z.number().min(0).max(1),
    target_confidence: z.number().min(0).max(1)
});
export const DiffObjectSchema = z.object({
    field_path: z.string(),
    before: z.any(),
    after: z.any(),
    source: z.enum(["cv-span", "qa"]),
    source_id: z.string()
});
