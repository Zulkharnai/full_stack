const cells = document.querySelectorAll(".game-cell");
const dialog = document.getElementById("dialog");
let closeDialogBtn = document.getElementById("dialog-close");
let restartButton = document.getElementById("restart");
let currentPlayer = "X";
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameActive && cell.textContent === "") {
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      checkWin();
      checkDraw();
    }
  });
});

function checkDraw() {
  const isDraw = [...cells].every((cell) => cell.textContent !== "");
  if (isDraw) {
    gameActive = false;
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      showDialog(`Player ${cells[a].textContent} wins!`);
      return;
    }
  }
}

function showDialog(message) {
  const dialogMessage = document.getElementById("result");
  dialogMessage.textContent = message;
  dialog.showModal();
}

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  resetGame();
});

function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
}

restartButton.addEventListener("click", () => {
  resetGame();
});
