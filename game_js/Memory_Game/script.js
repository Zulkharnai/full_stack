const gameImages = document.querySelectorAll(".game-img");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");
const resetButton = document.getElementById("restart");
const dialog = document.getElementById("dialog");
let closeDialogBtn = document.getElementById("dialog-close");

let store = [];
let clickCount = 0;
let score = 0;
scoreDisplay.textContent = `Score: ${score}`;

function continueGame() {
  let random = Math.floor(Math.random() * gameImages.length);
  store.push(random);
  updateScore();
  store.forEach((num, index) => {
    setTimeout(() => {
      gameImages[num].style.animation = "none";

      setTimeout(() => {
        gameImages[num].style.animation = "intro 0.5s ease-in-out";
      }, 10);
    }, index * 700);
  });
}

// Start animation after 2 seconds
setTimeout(() => {
  continueGame();
}, 2000);

console.log(store);

// Click events
gameImages.forEach((img) => {
  img.addEventListener("click", () => {
    img.style.animation = "intro 0.5s ease-in-out";
    if (store[clickCount] == img.dataset.id) {
      clickCount++;

      if (clickCount === store.length) {
        clickCount = 0;

        setTimeout(() => {
          continueGame();
        }, 500);
      }
    } else {
      if (dialog) {
        dialog.showModal();
      }
      finalScoreDisplay.textContent = score;
      resetGame();
    }

    console.log(img);
    console.log(clickCount);
  });
});

function resetGame() {
  store = [];
  score = 0;
  clickCount = 0;
  let random = Math.floor(Math.random() * gameImages.length);
  store.push(random);
  continueGame();
}

resetButton.addEventListener("click", resetGame);

function updateScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  gameInterval = setInterval(moveSnake, 200);
  startGame();
});
