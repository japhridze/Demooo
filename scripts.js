// 👇 must be EXACTLY the working backend URL
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
    messageBox.textContent = "⚠️ Backend not reachable.";
    console.error(error);
  }
});

async function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch(`${BACKEND_URL}/hello?name=${encodeURIComponent(name)}`);
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent = "⚠️ Backend not reachable.";
    console.error(error);
  }
}
