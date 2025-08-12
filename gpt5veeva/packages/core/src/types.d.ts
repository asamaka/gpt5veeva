import { z } from 'zod';
import { ResumeStructSchema, QuestionObjectSchema, DiffObjectSchema } from './schemas';
export type ResumeStruct = z.infer<typeof ResumeStructSchema>;
export type QuestionObject = z.infer<typeof QuestionObjectSchema>;
export type DiffObject = z.infer<typeof DiffObjectSchema>;
