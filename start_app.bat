@echo off
cd backend
call .venv\Scripts\activate
start cmd /k "uvicorn app.main:app --reload"
cd ..
start http://127.0.0.1:5500/index.html
