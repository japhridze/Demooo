# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# IMPORTANT: put here your real Static Web App URL
# you can keep "*" too, but let’s be explicit
origins = [
    "https://witty-pebble-0066f710.3.azurestaticapps.net",  # your frontend
    "https://witty-pebble-0066f710.azurestaticapps.net",    # sometimes without the .3
    "http://localhost:8000",
    "http://localhost:5500",
    "*",  # last resort
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"status": "ok", "message": "FastAPI on Azure is running 🚀"}


@app.get("/hello")
def say_hello(name: str = "friend"):
    return {"message": f"Hello, {name}! Backend is working ✅"}
