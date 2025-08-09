import { describe, it, expect } from 'vitest';
import { renderClassic } from '../src/classic';

const sample = {
  basics: { name: 'Alex Doe', email: 'alex@example.com', links: [], title: 'Engineer' },
  skills: [{ name: 'TypeScript', keywords: '' }],
  experience: [{ company: 'Acme', title: 'SE', start: '2021', bullets: [{ id: 'b1', text: 'Did X', evidence_ids: 'cv:page1:line10' }] }],
  projects: [],
  education: [],
  certs: [],
  meta: { template: 'classic', voice: 'neutral' }
} as any;

describe('classic template', () => {
  it('renders headings', () => {
    const html = renderClassic(sample);
    expect(html).toContain('<h2>Experience</h2>');
    expect(html).toContain('Alex Doe');
  });
});