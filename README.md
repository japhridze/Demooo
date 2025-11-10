# 🌐 Japaridze Properties – Full-Stack Azure Deployment Demo

This project demonstrates a **full-stack web application** built and deployed entirely on **Microsoft Azure**, Python-based backend frameworks like FastAPI using:

- **Frontend:** HTML, CSS, JavaScript (Static Web App)
- **Backend:** FastAPI (Python 3.11, Azure App Service)
- **CI/CD:** GitHub Actions (automatic deployment on each commit)

The goal was to connect a responsive frontend with a live FastAPI backend hosted on Azure and enable full interaction between them (e.g. send input from the frontend, get a real response from the backend API).

---

## 🚀 Live Demo

| Component | Link |
|------------|------|
| 🌍 **Frontend (Static Web App)** | [https://witty-pebble-006f67f10.3.azurestaticapps.net](https://witty-pebble-006f67f10.3.azurestaticapps.net) |
| ⚙️ **Backend (FastAPI App Service)** | [https://demoweb-backend-japhridze-erapahhhqajfbha.centralus-01.azurewebsites.net](https://demoweb-backend-japhridze-erapahhhqajfbha.centralus-01.azurewebsites.net) |

---

## 🧩 Project Structure

Demooo/
├── backend/

│ └── app/

│ └ main.py # FastAPI app with two endpoints: / and /hello
│
├── index.html # Main frontend page

├── scripts.js # JavaScript – connects to FastAPI backend

├── styles.css # Frontend styling

└── imgs/ # Site images
---

## ⚡ Features

✅ Frontend hosted on **Azure Static Web Apps**  
✅ Backend deployed via **Azure App Service**  
✅ Fully working **API connection** (`/hello?name=User`)  
✅ Proper **CORS configuration** to allow frontend ↔ backend communication  
✅ **Automatic GitHub Actions deployment** for both frontend and backend  
✅ **Live response demonstration** (“Hello, Name! Backend is working ✅”)  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | FastAPI (Python 3.11) |
| Hosting | Azure App Service & Azure Static Web Apps |
| Deployment | GitHub Actions |
| Tools | VS Code, Azure Portal, Git, Chrome DevTools |

---

## ⚙️ How It Works

1. **User enters a name** in the frontend input field.
2. JavaScript sends a `GET` request to FastAPI endpoint `/hello?name=YourName`.
3. Backend returns a JSON response like:
   ```json
   { "message": "Hello, YourName! Backend is working ✅" }
<img width="1920" height="1042" alt="image" src="https://github.com/user-attachments/assets/cba95b91-33ee-4932-970e-282d6d192953" />
<img width="1920" height="1032" alt="tested" src="https://github.com/user-attachments/assets/4e1395b5-6624-4ec0-95cc-2e5e34c8ef3b" />


<img width="1918" height="1027" alt="image" src="https://github.com/user-attachments/assets/c8ab564e-d412-47fe-8b2d-a575e8c1e84e" />
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/ba4222f0-75d8-472a-8b60-3dbee99e4644" />


https://witty-pebble-006f67f10.3.azurestaticapps.net/
