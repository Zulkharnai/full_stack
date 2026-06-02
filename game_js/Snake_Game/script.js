let snakePath = "../assets/snake.png";
let snakeGame = document.getElementById("snake-game");
let pauseButton = document.getElementById("pause");
let playButton = document.getElementById("play");

let play = true;
let eatGame = new Audio("../assets/eat-game.mp3");
let gameOverAudio = new Audio("../assets/game-over.mp3");

eatGame.loop = false;
gameOverAudio.loop = false;
// -------------------- SNAKE ---------------------------- //
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 1;
let dy = 0;

// --------------------- DRAW GAME ------------------------ //

function drawGame() {
  snakeGame.innerHTML = "";

  // draw snake //
  snake.forEach((part, index) => {
    let snakePart = document.createElement("div");

    snakePart.classList.add("snake-part");

    snakePart.style.gridColumnStart = part.x;
    snakePart.style.gridRowStart = part.y;

    snakeGame.appendChild(snakePart);
  });

  // draw food //

  let foodElement = document.createElement("div");

  foodElement.classList.add("food");

  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;

  snakeGame.appendChild(foodElement);
}

// ---------------- Collision ----------------------- //

function checkCollision() {
  let head = snake[0];

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver();
    }
  }
}

// ---------------- Move Snake ------------------------ //

function moveSnake() {
  let head = { x: snake[0].x + dx, y: snake[0].y + dy };

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    eatGame.play();
    food = {
      x: Math.floor(Math.random() * 25) + 1,
      y: Math.floor(Math.random() * 25 + 1),
    };
  } else {
    snake.pop();
  }

  // Wall Collision //
  if (head.x < 1 || head.x > 25 || head.y < 1 || head.y > 25) {
    gameOver();
  }

  checkCollision();

  drawGame();
}

/* ---------------- CONTROLS ---------------- */

document.addEventListener("keydown", (event) => {
  // if (event.key === "ArrowUp") {
  //   dx = 0;
  //   dy = -1;
  // }

  // if (event.key === "ArrowDown") {
  //   dx = 0;
  //   dy = 1;
  // }

  if (event.key === "ArrowLeft") {
    dx = -1;
    dy = 0;
  }

  if (event.key === "ArrowRight") {
    dx = 1;
    dy = 0;
  }

  if (event.key === " ") {
    if (play) {
      play = false;

      pauseButton.style.display = "";
      playButton.style.display = "none";

      pauseGame();
    } else {
      play = true;

      pauseButton.style.display = "none";
      playButton.style.display = "";

      startGame();
    }
  }
});

// ---------------- Game Over ----------------------------- //

function gameOver() {
  clearInterval(gameInterval);
  gameOverAudio.play();
  play = false;

  const dialog = document.getElementById("dialog");

  if (dialog) {
    dialog.showModal();
  }

  snake = [{ x: 10, y: 10 }];

  dx = 1;
  dy = 0;
}

/* ---------------- START GAME ---------------- */

let gameInterval = null;

if (play) {
  pauseButton.style.display = "none";

  startGame();
}

function startGame() {
  if (!gameInterval) {
    gameInterval = setInterval(moveSnake, 200);
  }
}

function pauseGame() {
  clearInterval(gameInterval);
  gameInterval = null;
}

drawGame();

/* --------------- controller --------------- */

playButton.addEventListener("click", () => {
  pauseButton.style.display = "";
  playButton.style.display = "none";

  play = false;
  pauseGame();
});

pauseButton.addEventListener("click", () => {
  playButton.style.display = "";
  pauseButton.style.display = "none";

  play = true;
  startGame();
});

let closeDialogBtn = document.getElementById("dialog-close");
let dialog = document.getElementById("dialog");

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  gameInterval = setInterval(moveSnake, 200);
  startGame();
});

// let snakeElement = document.getElementById("snake");
// let snakeImg = document.createElement("img");
// snakeImg.src = snakePath;
// snakeElement.appendChild(snakeImg);

// let snakePart = document.createElement("div");
// snakePart.classList.add("snake-part");
// snakeGame.appendChild(snakePart);
