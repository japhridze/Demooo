const BACKEND_URL = "https://demoweb-backend-japhridze-erapahhhqajfbha.centralus-01.azurewebsites.net";

document.addEventListener("DOMContentLoaded", async () => {
  const messageBox = document.createElement("div");
  messageBox.style.textAlign = "center";
  messageBox.style.marginTop = "20px";
  document.body.appendChild(messageBox);

  try {
    // call the root /
    const response = await fetch(`${BACKEND_URL}/`);
    const data = await response.json();
    // your backend returns {status: "...", message: "..."}
    messageBox.textContent = data.message;
  } catch (error) {
    messageBox.textContent = "⚠️ Backend not reachable.";
    console.error(error);
  }
});

async function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");
  // for now we don't have an endpoint that takes a name
  // so just re-use the root
  try {
    const response = await fetch(`${BACKEND_URL}/`);
    const data = await response.json();
    result.textContent = data.message + ` (you typed: ${name})`;
  } catch (error) {
    result.textContent = "⚠️ Backend not reachable.";
    console.error(error);
  }
}
