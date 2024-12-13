document.addEventListener("DOMContentLoaded", async () => {
    const messageBox = document.createElement("div");
    messageBox.style.textAlign = "center";
    messageBox.style.marginTop = "20px";
    document.body.appendChild(messageBox);

    try {
        const response = await fetch("http://127.0.0.1:8000/hello");
        const data = await response.json();
        messageBox.textContent = data.message;
    } catch (error) {
        messageBox.textContent = "⚠️ Backend not reachable.";
        console.error(error);
    }
}

);
async function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");
  try {
    const response = await fetch(`http://127.0.0.1:8000/hello?name=${name}`);
    const data = await response.json();
    result.textContent = data.message;
  } catch {
    result.textContent = "⚠️ Backend not reachable.";
  }
}

