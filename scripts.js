// scripts.js

// IMPORTANT: use the EXACT backend URL from Azure (Default domain)
// copy it from: Azure Portal → demoweb-backend-japhridze → Overview → Default domain
const BACKEND_URL = "https://demoweb-backend-japhridze-erapahhhqajfbha.centralus-01.azurewebsites.net";

document.addEventListener("DOMContentLoaded", async () => {
  const messageBox = document.createElement("div");
  messageBox.style.textAlign = "center";
  messageBox.style.marginTop = "20px";
  document.body.appendChild(messageBox);

  try {
    const response = await fetch(`${BACKEND_URL}/`);
    const data = await response.json();
    messageBox.textContent = data.message;
  } catch (error) {
    console.error("Startup backend check failed:", error);
    messageBox.textContent = "⚠️ Backend not reachable.";
  }
});

async function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch(
      `${BACKEND_URL}/hello?name=${encodeURIComponent(name)}`
    );
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    console.error("Say hello failed:", error);
    result.textContent = "⚠️ Backend not reachable.";
  }
}
