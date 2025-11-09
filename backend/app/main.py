from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🔓 super-permissive CORS just to make the browser stop complaining
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # allow requests from anywhere (your static site included)
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"status": "ok", "message": "FastAPI on Azure is running 🚀"}


@app.get("/hello")
def say_hello(name: str = "friend"):
    return {"message": f"Hello, {name}! Backend is working ✅"}
