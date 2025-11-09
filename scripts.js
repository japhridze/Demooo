// scripts.js

// ✅ make sure this is EXACTLY your working backend URL
const BACKEND_URL =
  "https://demoweb-backend-japhridze-erapahhqhqajfbha.centralus-01.azurewebsites.net";



document.addEventListener("DOMContentLoaded", async () => {
  const messageBox = document.createElement("div");
  messageBox.style.textAlign = "center";
  messageBox.style.marginTop = "20px";
  document.body.appendChild(messageBox);

  try {
    console.log("Calling backend root:", `${BACKEND_URL}/`);
    const response = await fetch(`${BACKEND_URL}/`);
    const data = await response.json();
    messageBox.textContent = data.message || "Backend responded.";
  } catch (error) {
    console.error("Startup backend check failed:", error);
    messageBox.textContent = "⚠️ Backend not reachable.";
  }
});

async function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  try {
    const url = `${BACKEND_URL}/hello?name=${encodeURIComponent(name)}`;
    console.log("Calling hello endpoint:", url);
    const response = await fetch(url);
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    console.error("Say hello failed:", error);
    result.textContent = "⚠️ Backend not reachable.";
  }
}
