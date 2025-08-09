export async function POST() {
  // TODO: forward to parser service; for now return stub struct
  const struct = {
    basics: { name: "", title: "", email: "" , links: [] },
    skills: [],
    experience: [],
    projects: [],
    education: [],
    certs: [],
    meta: { template: "classic", voice: "neutral" }
  };
  return new Response(JSON.stringify(struct), { status: 200, headers: { 'content-type': 'application/json' } });
}