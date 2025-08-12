export async function POST(req: Request) {
  try {
    const struct = await req.json();
    const parserUrl = process.env.PARSER_URL || 'http://localhost:8000';
    const resp = await fetch(`${parserUrl}/docx/export`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(struct) });
    if (!resp.ok) {
      const txt = await resp.text();
      return Response.json({ error: 'docx_error', detail: txt }, { status: 502 });
    }
    const arrayBuf = await resp.arrayBuffer();
    return new Response(Buffer.from(arrayBuf), { status: 200, headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' } });
  } catch (e: any) {
    return Response.json({ error: 'docx_failed', message: e?.message || 'unknown' }, { status: 500 });
  }
}