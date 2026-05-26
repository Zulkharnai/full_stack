let gameVideoPath = "../assets/videoplayback.mp4";
let snakePath = "../assets/snake.png";
let snakeGame = document.getElementById("snake-game");
let gameVideo = document.getElementById("game-video");

// ---------------------- VIDEO ------------------------- //

let video = document.createElement("video");

video.src = gameVideoPath;
video.controls = false;
video.autoplay = true;
video.muted = true;
video.loop = true;

gameVideo.appendChild(video);

// -------------------- SNAKE ---------------------------- //
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 1;
let dy = 0;

// --------------------- DRAW GAME ------------------------ //

function drawGame() {
  snakeGame.innerHTML = "";

  // draw snake //
  snake.forEach((part) => {
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

// ---------------- Move Snake ------------------------ //

function moveSnake() {
  let head = { x: snake[0].x + dx, y: snake[0].y + dy };

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * 25) + 1,
      y: Math.floor(Math.random() * 25 + 1),
    };
  } else {
    snake.pop();
  }

  // Wall Collision //
  if (head.x < 1 || head.x > 25 || head.y < 1 || head.y > 25) {
    alert("Game Over");

    snake = [{ x: 10, y: 10 }];

    dx = 1;
    dy = 0;
  }

  drawGame();
}

/* ---------------- CONTROLS ---------------- */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    dx = 0;
    dy = -1;
  }

  if (event.key === "ArrowDown") {
    dx = 0;
    dy = 1;
  }

  if (event.key === "ArrowLeft") {
    dx = -1;
    dy = 0;
  }

  if (event.key === "ArrowRight") {
    dx = 1;
    dy = 0;
  }
});

/* ---------------- START GAME ---------------- */

drawGame();

setInterval(moveSnake, 200);

// let snakeElement = document.getElementById("snake");
// let snakeImg = document.createElement("img");
// snakeImg.src = snakePath;
// snakeElement.appendChild(snakeImg);

// let snakePart = document.createElement("div");
// snakePart.classList.add("snake-part");
// snakeGame.appendChild(snakePart);
