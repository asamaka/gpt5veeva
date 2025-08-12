import { ResumeStruct } from '@veeva/core';

export function renderClassic(struct: ResumeStruct): string {
  const h = (s: string) => s ? s : '';
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${h(struct.basics.name)} – Resume</title>
<style>
  @page { size: A4; margin: 18mm; }
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; font-size: 11pt; color: #111; }
  h2 { font-size: 14pt; margin: 18px 0 8px; }
  h3 { font-size: 12pt; margin: 12px 0 6px; }
  .section { break-inside: avoid; margin-bottom: 12px; }
  .job { break-inside: avoid; margin-bottom: 6px; }
  ul { margin: 4px 0 8px 18px; }
</style>
</head>
<body>
  <header>
    <h1 style="font-size:20pt;margin:0;">${h(struct.basics.name)}</h1>
    <div>${h(struct.basics.title || '')}</div>
    <div>${h(struct.basics.email)}${struct.basics.phone ? ' • ' + struct.basics.phone : ''}</div>
  </header>
  <section class="section">
    <h2>Skills</h2>
    <div>${struct.skills.map(s => s.name).join(', ')}</div>
  </section>
  <section class="section">
    <h2>Experience</h2>
    ${struct.experience.map(exp => `
      <div class="job">
        <h3>${h(exp.title)} – ${h(exp.company)}</h3>
        <div>${h(exp.start)}${exp.end ? ' – ' + exp.end : ''} ${exp.location ? ' • ' + exp.location : ''}</div>
        <ul>${exp.bullets.map(b => `<li>${h(b.text)}</li>`).join('')}</ul>
      </div>
    `).join('')}
  </section>
  <section class="section">
    <h2>Projects</h2>
    ${struct.projects.map(p => `
      <div>
        <h3>${h(p.name)}</h3>
        ${p.summary ? `<div>${h(p.summary)}</div>` : ''}
        <ul>${p.bullets.map(b => `<li>${h(b.text)}</li>`).join('')}</ul>
      </div>
    `).join('')}
  </section>
  <section class="section">
    <h2>Education</h2>
    ${struct.education.map(e => `<div>${h(e.school)}${e.degree ? ' – ' + e.degree : ''}</div>`).join('')}
  </section>
  <section class="section">
    <h2>Certifications</h2>
    ${struct.certs.map(c => `<div>${h(c.name)}${c.issuer ? ' – ' + c.issuer : ''}</div>`).join('')}
  </section>
</body>
</html>`;
}