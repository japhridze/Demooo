from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/hello")
def hello(name: str = "Tornike"):
    return {"message": f"Hello, {name}! Backend is working and ✅  we contact you soon, thank you for you attentions"}
