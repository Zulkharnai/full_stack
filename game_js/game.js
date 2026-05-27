// Game Dashboard JavaScript (Audio and Game List)
let gamesList = [
  "Snake Game",
  "Tic Tac Toe Game",
  "Memory Game",
  "Pong Game",
  "Minesweeper Game",
  "Simon Game",
  "Dice Game",
  "Drum Kit Game",
];
let dashboardAudio = new Audio("./assets/game_dashboard.mp3");
let gameItemAudio = new Audio("./assets/option.wav");
let gameVideoPath = "./assets/videoplayback.mp4";

dashboardAudio.loop = true;
dashboardAudio.volume = 0.5;
dashboardAudio.preload = "auto";
dashboardAudio.load();
dashboardAudio.play();

function startAudio() {
  dashboardAudio
    .play()
    .then(() => {
      console.log("Audio playing");
    })
    .catch((err) => {
      console.log("Blocked by browser:", err);
    });
}

document.addEventListener("click", startAudio, { once: true });
document.addEventListener("keydown", startAudio, { once: true });

//  List of Games and their corresponding HTML files

let gameContainer = document.getElementById("game-container");

let ul = document.createElement("ul");
gamesList.forEach((game) => {
  let li = document.createElement("li");
  li.setAttribute("class", "game-item");
  li.innerText = game;
  li.addEventListener("click", () => {
    window.location.href = `${game.trim().split(" ").join("_")}/index.html`;
  });
  ul.appendChild(li);
});
gameContainer.appendChild(ul);

// game item hover effect
let gameItems = document.querySelectorAll(".game-item");
gameItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    gameItemAudio.currentTime = 0; // Reset audio to start
    gameItemAudio.play();
  });
  item.addEventListener("mouseout", () => {
    gameItemAudio.pause();
    gameItemAudio.currentTime = 0; // Reset audio to start
  });
});

// Game Video Background

let gameVideo = document.getElementById("game-video");

let video = document.createElement("video");

video.src = gameVideoPath;
video.controls = false;
video.autoplay = true;
video.muted = true; // needed for autoplay in browsers

gameVideo.appendChild(video);
