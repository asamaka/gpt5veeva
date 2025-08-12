import { z } from 'zod';
export declare const LinkSchema: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    url: string;
}, {
    label: string;
    url: string;
}>;
export declare const BasicsSchema: z.ZodObject<{
    name: z.ZodString;
    title: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    links: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
    }, {
        label: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    title: string;
    email: string;
    links: {
        label: string;
        url: string;
    }[];
    phone?: string | undefined;
    location?: string | undefined;
}, {
    name: string;
    email: string;
    links: {
        label: string;
        url: string;
    }[];
    title?: string | undefined;
    phone?: string | undefined;
    location?: string | undefined;
}>;
export declare const SkillSchema: z.ZodObject<{
    name: z.ZodString;
    level: z.ZodOptional<z.ZodString>;
    keywords: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    keywords: string;
    level?: string | undefined;
}, {
    name: string;
    keywords: string;
    level?: string | undefined;
}>;
export declare const BulletSchema: z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
    evidence_ids: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    text: string;
    evidence_ids: string;
}, {
    id: string;
    text: string;
    evidence_ids: string;
}>;
export declare const ExperienceItemSchema: z.ZodObject<{
    company: z.ZodString;
    title: z.ZodString;
    start: z.ZodString;
    end: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    bullets: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        evidence_ids: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        evidence_ids: string;
    }, {
        id: string;
        text: string;
        evidence_ids: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    company: string;
    start: string;
    bullets: {
        id: string;
        text: string;
        evidence_ids: string;
    }[];
    location?: string | undefined;
    end?: string | undefined;
}, {
    title: string;
    company: string;
    start: string;
    bullets: {
        id: string;
        text: string;
        evidence_ids: string;
    }[];
    location?: string | undefined;
    end?: string | undefined;
}>;
export declare const ProjectItemSchema: z.ZodObject<{
    name: z.ZodString;
    summary: z.ZodOptional<z.ZodString>;
    bullets: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        evidence_ids: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        evidence_ids: string;
    }, {
        id: string;
        text: string;
        evidence_ids: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    bullets: {
        id: string;
        text: string;
        evidence_ids: string;
    }[];
    summary?: string | undefined;
}, {
    name: string;
    bullets: {
        id: string;
        text: string;
        evidence_ids: string;
    }[];
    summary?: string | undefined;
}>;
export declare const EducationItemSchema: z.ZodObject<{
    school: z.ZodString;
    degree: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodString>;
    end: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    school: string;
    start?: string | undefined;
    end?: string | undefined;
    degree?: string | undefined;
}, {
    school: string;
    start?: string | undefined;
    end?: string | undefined;
    degree?: string | undefined;
}>;
export declare const CertItemSchema: z.ZodObject<{
    name: z.ZodString;
    issuer: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    date?: string | undefined;
    issuer?: string | undefined;
}, {
    name: string;
    date?: string | undefined;
    issuer?: string | undefined;
}>;
export declare const MetaSchema: z.ZodObject<{
    template: z.ZodDefault<z.ZodEnum<["classic", "modern", "minimal"]>>;
    voice: z.ZodDefault<z.ZodEnum<["formal", "neutral", "energetic"]>>;
}, "strip", z.ZodTypeAny, {
    template: "classic" | "modern" | "minimal";
    voice: "formal" | "neutral" | "energetic";
}, {
    template?: "classic" | "modern" | "minimal" | undefined;
    voice?: "formal" | "neutral" | "energetic" | undefined;
}>;
export declare const ResumeStructSchema: z.ZodObject<{
    basics: z.ZodObject<{
        name: z.ZodString;
        title: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        email: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        links: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label: string;
            url: string;
        }, {
            label: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        title: string;
        email: string;
        links: {
            label: string;
            url: string;
        }[];
        phone?: string | undefined;
        location?: string | undefined;
    }, {
        name: string;
        email: string;
        links: {
            label: string;
            url: string;
        }[];
        title?: string | undefined;
        phone?: string | undefined;
        location?: string | undefined;
    }>;
    skills: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        level: z.ZodOptional<z.ZodString>;
        keywords: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        keywords: string;
        level?: string | undefined;
    }, {
        name: string;
        keywords: string;
        level?: string | undefined;
    }>, "many">;
    experience: z.ZodArray<z.ZodObject<{
        company: z.ZodString;
        title: z.ZodString;
        start: z.ZodString;
        end: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        bullets: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            text: z.ZodString;
            evidence_ids: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            text: string;
            evidence_ids: string;
        }, {
            id: string;
            text: string;
            evidence_ids: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        company: string;
        start: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        location?: string | undefined;
        end?: string | undefined;
    }, {
        title: string;
        company: string;
        start: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        location?: string | undefined;
        end?: string | undefined;
    }>, "many">;
    projects: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
        bullets: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            text: z.ZodString;
            evidence_ids: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            text: string;
            evidence_ids: string;
        }, {
            id: string;
            text: string;
            evidence_ids: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        summary?: string | undefined;
    }, {
        name: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        summary?: string | undefined;
    }>, "many">;
    education: z.ZodArray<z.ZodObject<{
        school: z.ZodString;
        degree: z.ZodOptional<z.ZodString>;
        start: z.ZodOptional<z.ZodString>;
        end: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        school: string;
        start?: string | undefined;
        end?: string | undefined;
        degree?: string | undefined;
    }, {
        school: string;
        start?: string | undefined;
        end?: string | undefined;
        degree?: string | undefined;
    }>, "many">;
    certs: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        issuer: z.ZodOptional<z.ZodString>;
        date: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        date?: string | undefined;
        issuer?: string | undefined;
    }, {
        name: string;
        date?: string | undefined;
        issuer?: string | undefined;
    }>, "many">;
    meta: z.ZodObject<{
        template: z.ZodDefault<z.ZodEnum<["classic", "modern", "minimal"]>>;
        voice: z.ZodDefault<z.ZodEnum<["formal", "neutral", "energetic"]>>;
    }, "strip", z.ZodTypeAny, {
        template: "classic" | "modern" | "minimal";
        voice: "formal" | "neutral" | "energetic";
    }, {
        template?: "classic" | "modern" | "minimal" | undefined;
        voice?: "formal" | "neutral" | "energetic" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    basics: {
        name: string;
        title: string;
        email: string;
        links: {
            label: string;
            url: string;
        }[];
        phone?: string | undefined;
        location?: string | undefined;
    };
    skills: {
        name: string;
        keywords: string;
        level?: string | undefined;
    }[];
    experience: {
        title: string;
        company: string;
        start: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        location?: string | undefined;
        end?: string | undefined;
    }[];
    projects: {
        name: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        summary?: string | undefined;
    }[];
    education: {
        school: string;
        start?: string | undefined;
        end?: string | undefined;
        degree?: string | undefined;
    }[];
    certs: {
        name: string;
        date?: string | undefined;
        issuer?: string | undefined;
    }[];
    meta: {
        template: "classic" | "modern" | "minimal";
        voice: "formal" | "neutral" | "energetic";
    };
}, {
    basics: {
        name: string;
        email: string;
        links: {
            label: string;
            url: string;
        }[];
        title?: string | undefined;
        phone?: string | undefined;
        location?: string | undefined;
    };
    skills: {
        name: string;
        keywords: string;
        level?: string | undefined;
    }[];
    experience: {
        title: string;
        company: string;
        start: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        location?: string | undefined;
        end?: string | undefined;
    }[];
    projects: {
        name: string;
        bullets: {
            id: string;
            text: string;
            evidence_ids: string;
        }[];
        summary?: string | undefined;
    }[];
    education: {
        school: string;
        start?: string | undefined;
        end?: string | undefined;
        degree?: string | undefined;
    }[];
    certs: {
        name: string;
        date?: string | undefined;
        issuer?: string | undefined;
    }[];
    meta: {
        template?: "classic" | "modern" | "minimal" | undefined;
        voice?: "formal" | "neutral" | "energetic" | undefined;
    };
}>;
export declare const QuestionOptionSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
}, {
    label: string;
    id: string;
}>;
export declare const QuestionObjectSchema: z.ZodObject<{
    id: z.ZodString;
    priority: z.ZodEnum<["high", "medium", "low"]>;
    field_path: z.ZodString;
    question: z.ZodString;
    type: z.ZodEnum<["number", "single", "multi", "text", "date", "autocomplete"]>;
    units: z.ZodOptional<z.ZodNullable<z.ZodEnum<["%", "$", "count"]>>>;
    required: z.ZodBoolean;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
    }, {
        label: string;
        id: string;
    }>, "many">>;
    suggested_default: z.ZodOptional<z.ZodString>;
    display_hint: z.ZodOptional<z.ZodEnum<["chips", "slider", "select", "free"]>>;
    rationale: z.ZodString;
    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    confidence_before: z.ZodNumber;
    target_confidence: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "number" | "date" | "text" | "single" | "multi" | "autocomplete";
    id: string;
    priority: "high" | "medium" | "low";
    field_path: string;
    question: string;
    required: boolean;
    rationale: string;
    confidence_before: number;
    target_confidence: number;
    options?: {
        label: string;
        id: string;
    }[] | undefined;
    units?: "%" | "$" | "count" | null | undefined;
    suggested_default?: string | undefined;
    display_hint?: "chips" | "slider" | "select" | "free" | undefined;
    depends_on?: string[] | undefined;
}, {
    type: "number" | "date" | "text" | "single" | "multi" | "autocomplete";
    id: string;
    priority: "high" | "medium" | "low";
    field_path: string;
    question: string;
    required: boolean;
    rationale: string;
    confidence_before: number;
    target_confidence: number;
    options?: {
        label: string;
        id: string;
    }[] | undefined;
    units?: "%" | "$" | "count" | null | undefined;
    suggested_default?: string | undefined;
    display_hint?: "chips" | "slider" | "select" | "free" | undefined;
    depends_on?: string[] | undefined;
}>;
export declare const DiffObjectSchema: z.ZodObject<{
    field_path: z.ZodString;
    before: z.ZodAny;
    after: z.ZodAny;
    source: z.ZodEnum<["cv-span", "qa"]>;
    source_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    field_path: string;
    source: "cv-span" | "qa";
    source_id: string;
    before?: any;
    after?: any;
}, {
    field_path: string;
    source: "cv-span" | "qa";
    source_id: string;
    before?: any;
    after?: any;
}>;
