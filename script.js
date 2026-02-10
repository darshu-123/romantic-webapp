// MEMORY PHOTOS
const images = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
  "./images/pic6.jpg"
];

// QUESTIONS
const questions = [
  "Do you remember our first moment together? 💕",
  "Do I make you smile every day? 😊",
  "Will you hold my hand forever? 🤝❤️",
  "Am I your safe place? 🥹",
  "Do you know how much I love you? 💖",
  "Will you be mine always? 💍"
];

let index = 0;

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

startBtn.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
  showImage();
});

function showImage() {
  if (index >= images.length) {
    showScreen("finalScreen");
    return;
  }

  resetNoButton();

  const img = document.getElementById("memoryImage");
  img.src = images[index] + "?t=" + new Date().getTime();
  showScreen("imageScreen");

  setTimeout(showQuestion, 5000);
}

function showQuestion() {
  document.getElementById("questionText").innerText = questions[index];
  showScreen("questionScreen");
}

function nextStep() {
  index++;
  showImage();
}

yesBtn.onclick = nextStep;
noBtn.onclick = nextStep;

noBtn.addEventListener("mouseover", () => {
  const container = document.getElementById("questionScreen");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

function resetNoButton() {
  noBtn.style.position = "relative";
  noBtn.style.left = "0px";
  noBtn.style.top = "0px";
}
