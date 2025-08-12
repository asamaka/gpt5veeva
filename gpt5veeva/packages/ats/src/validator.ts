export type ATSResult = {
  ok: boolean;
  level: 'green' | 'yellow' | 'red';
  notes: string[];
};

export function validateHTML(html: string): ATSResult {
  const notes: string[] = [];
  if (/<img\s/i.test(html)) notes.push('Images detected');
  if (/<table\b/i.test(html)) notes.push('Tables detected');
  const hasHeadings = /<h2>Skills<\/h2>/.test(html) && /<h2>Experience<\/h2>/.test(html) && /<h2>Education<\/h2>/.test(html);
  if (!hasHeadings) notes.push('Standard section headings missing');
  const hasContact = /@/.test(html);
  if (!hasContact) notes.push('No email detected');
  const level: ATSResult['level'] = notes.length === 0 ? 'green' : notes.length <= 2 ? 'yellow' : 'red';
  return { ok: level !== 'red', level, notes };
}