import puppeteer from 'puppeteer';
import { renderClassic } from '@veeva/templates';

export async function POST(req: Request) {
  try {
    const struct = await req.json();
    const html = renderClassic(struct);
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '18mm', right: '18mm', bottom: '18mm', left: '18mm' } });
    await browser.close();
    return new Response(new Uint8Array(pdf), { status: 200, headers: { 'content-type': 'application/pdf' } });
  } catch (e: any) {
    return Response.json({ error: 'pdf_failed', message: e?.message || 'unknown' }, { status: 500 });
  }
}