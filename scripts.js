// scripts.js
// change ONLY this line if Azure gives you a new backend URL
const BACKEND_URL = "https://demoweb-backend-japhridze-erapahhhqajfbha.centralus-01.azurewebsites.net";

document.addEventListener("DOMContentLoaded", async () => {
  // a small message area to show if backend is alive
  const messageBox = document.createElement("div");
  messageBox.style.textAlign = "center";
  messageBox.style.marginTop = "20px";
  document.body.appendChild(messageBox);

  try {
    // call backend root: /
    const response = await fetch(`${BACKEND_URL}/`);
    if (!response.ok) throw new Error("Bad status from backend");
    const data = await response.json();
    // backend returns: {status: "...", message: "..."}
    messageBox.textContent = data.message;
  } catch (error) {
    messageBox.textContent = "⚠️ Backend not reachable.";
    console.error("Startup backend check failed:", error);
  }
});

// called by the button in HTML
async function sayHello() {
  const nameInput = document.getElementById("nameInput");
  const result = document.getElementById("result");

  const name = (nameInput?.value || "friend").trim();

  try {
    const response = await fetch(
      `${BACKEND_URL}/hello?name=${encodeURIComponent(name)}`
    );
    if (!response.ok) throw new Error("Bad status from backend");
    const data = await response.json();
    // backend returns: {message: "..."}
    result.textContent = data.message;
  } catch (error) {
    result.textContent = "⚠️ Backend not reachable.";
    console.error("sayHello() failed:", error);
  }
}
