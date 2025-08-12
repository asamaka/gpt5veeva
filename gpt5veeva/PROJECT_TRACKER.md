### VEEVA MVP – Project Tracker (Single Source of Truth)

- **Scope**: AI-powered CV rewrite assistant: upload → parse → gap analysis → ask minimal questions → apply + rewrite → live preview → export ATS-clean PDF/DOCX.
- **Owner**: Cursor Agent
- **Repo**: `gpt5veeva`

### Milestones
- **M1**: Parsing + JSON Resume + Template v1 + Export
- **M2**: Gap Analysis + Question Generation + Apply Answers + Live Preview
- **M3**: Chat Editing Loop + Multi-Template + PDF Stability + DOCX Export
- **M4**: Hardening: ATS validator, accessibility, telemetry, rate-limit, auth
- **M5**: Beta Readiness: docs, seed data, onboarding

### Current Status
- Bootstrapped monorepo, CI skeleton, core schemas stubbed, parser service stub, web app shell.

### Acceptance Criteria (M1)
- Upload PDF/DOCX → returns `RESUME_STRUCT` best-effort.
- Render Classic template preview.
- Export PDF and DOCX endpoints return bytes.
- Basic ATS validator runs post-export.

### UBIT Coverage Summary
- Unit (U): core schemas + formatters (target ≥90% lines) – WIP
- Integration (I): API → parser, PDF/DOCX render – WIP
- Behavioral (B): upload → parse → preview – WIP
- Template (T): HTML snapshot stability – WIP

### QA Checklist (rolling)
- [ ] Typecheck clean
- [ ] Lint clean
- [ ] Unit tests ≥90% coverage for /packages/core and /packages/ats
- [ ] Integration tests: 20 critical scenarios green
- [ ] E2E: upload→parse→Q&A→preview→export green
- [ ] Template snapshots acknowledged

### Demos
- See `/demos/upload-parse-export.md`