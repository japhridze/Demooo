# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# your frontend runs here (you showed it in the screenshot)
ALLOWED_ORIGINS = [
    "https://witty-pebble-0066f710.3.azurestaticapps.net",
    "https://witty-pebble-0066f710.azurestaticapps.net",  # some SWA urls come without the .3
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,      # keep this False so CORS is happy
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"status": "ok", "message": "FastAPI on Azure is running 🚀"}


@app.get("/hello")
def say_hello(name: str = "friend"):
    return {"message": f"Hello, {name}! Backend is working ✅"}
