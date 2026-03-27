const messages = [
  "You’re stronger than you think.",
  "Small steps still move you forward.",
  "Your potential is limitless.",
  "Today is a fresh start.",
  "You are capable of amazing things.",
  "Progress beats perfection.",
  "Believe in your quiet power."
];

const colors = [
  "#FF6B6B", "#4ECDC4", "#556270",
  "#C7F464", "#C44D58", "#4A90E2",
  "#7B4397", "#DC2430"
];

document.getElementById("sparkBtn").addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("message").textContent = msg;
  document.body.style.background = color;
});