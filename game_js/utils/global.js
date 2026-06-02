let dashboardAudio = new Audio("../assets/game_dashboard.mp3");
let gameVideoPath = "../assets/videoplayback.mp4";
let speaker = document.getElementById("speaker");
let mute = document.getElementById("mute");
let back = document.getElementById("back");
let pauseButton = document.getElementById("pause");
let playButton = document.getElementById("play");
pauseButton.style.display = "none";
let speakerPlay = true;

speaker.style.display = "none";
mute.style.display = "";

dashboardAudio.loop = true;
dashboardAudio.volume = 0.5;
dashboardAudio.preload = "auto";
dashboardAudio.load();

function startAudio() {
  dashboardAudio.play();
}

document.addEventListener("click", startAudio, { once: true });
document.addEventListener("keydown", startAudio, { once: true });

// Game Video Background

let gameVideo = document.getElementById("game-video");

let video = document.createElement("video");

video.src = gameVideoPath;
video.controls = false;
video.autoplay = true;
video.muted = true; // needed for autoplay in browsers

gameVideo.appendChild(video);

if (speakerPlay) {
  speaker.style.display = "";
  mute.style.display = "none";
}

if (!speakerPlay) {
  speaker.style.display = "none";
  mute.style.display = "";
}

speaker.addEventListener("click", (e) => {
  speakerPlay = false;
  mute.style.display = "";
  speaker.style.display = "none";
  dashboardAudio.pause();
});

mute.addEventListener("click", (e) => {
  speakerPlay = true;
  speaker.style.display = "";
  mute.style.display = "none";
  dashboardAudio.play();
});

back.addEventListener("click", (e) => {
  window.history.back();
});
