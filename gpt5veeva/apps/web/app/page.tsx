"use client";
import { useState } from 'react';

export default function HomePage() {
  const [status, setStatus] = useState<string>("");
  const [struct, setStruct] = useState<any>(null);

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus("Parsing...");
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/parse', { method: 'POST', body: form });
    const json = await res.json();
    setStruct(json);
    setStatus("Parsed");
  }

  return (
    <main style={{ maxWidth: 880, margin: '24px auto', padding: 16 }}>
      <h1>VEEVA MVP</h1>
      <p>Upload a CV (PDF/DOCX) to parse into RESUME_STRUCT.</p>
      <input type="file" accept=".pdf,.docx" onChange={onFileChange} />
      <div style={{ marginTop: 16 }}>{status}</div>
      {struct && (
        <pre style={{ background: '#f5f5f5', padding: 12, borderRadius: 8, overflow: 'auto' }}>
{JSON.stringify(struct, null, 2)}
        </pre>
      )}
    </main>
  );
}