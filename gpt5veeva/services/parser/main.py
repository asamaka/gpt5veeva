from fastapi import FastAPI, UploadFile
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel
from io import BytesIO

app = FastAPI()

class ResumeStruct(BaseModel):
    basics: dict
    skills: list
    experience: list
    projects: list
    education: list
    certs: list
    meta: dict

@app.get("/health")
async def health():
    return {"ok": True}

@app.post("/ingest")
async def ingest(file: UploadFile):
    # TODO: implement real PDF/DOCX text extraction
    struct = {
        "basics": {"name": "", "email": "", "links": []},
        "skills": [],
        "experience": [],
        "projects": [],
        "education": [],
        "certs": [],
        "meta": {"template": "classic", "voice": "neutral"},
    }
    spans = {}
    return JSONResponse({"struct": struct, "spans": spans})

@app.post("/docx/export")
async def docx_export(resume: ResumeStruct):
    # TODO: generate DOCX using python-docx
    bio = BytesIO()
    bio.write(b"DOCX_PLACEHOLDER")
    bio.seek(0)
    return StreamingResponse(bio, media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document")