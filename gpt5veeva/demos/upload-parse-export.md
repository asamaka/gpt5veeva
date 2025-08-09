### Demo: Upload → Parse → Export (M1)

1. Start parser service:
   - `cd services/parser && python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt && uvicorn main:app --reload --port 8000`
2. Start web app:
   - `pnpm --filter web dev`
3. Visit `http://localhost:3000` and upload a sample PDF/DOCX.
4. Observe parsed `RESUME_STRUCT` JSON in UI.
5. Trigger export endpoints (coming soon) and verify ATS validator output.