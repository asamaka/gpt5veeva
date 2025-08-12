import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file') as unknown as File | null;
    if (!file) {
      return Response.json({ error: 'file missing' }, { status: 400 });
    }
    const parserUrl = process.env.PARSER_URL || 'http://localhost:8000';
    const out = new FormData();
    out.append('file', file as any);
    const resp = await fetch(`${parserUrl}/ingest`, { method: 'POST', body: out });
    if (!resp.ok) {
      const txt = await resp.text();
      return Response.json({ error: 'parser_error', detail: txt }, { status: 502 });
    }
    const json = await resp.json();
    return Response.json(json.struct);
  } catch (e: any) {
    return Response.json({ error: 'parse_failed', message: e?.message || 'unknown' }, { status: 500 });
  }
}