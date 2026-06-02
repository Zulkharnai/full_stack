const gameImages = document.querySelectorAll(".game-img");
const scoreDisplay = document.getElementById("score");
let store = [];
let clickCount = 0;
let score = 0;

function continueGame() {
  let random = Math.floor(Math.random() * gameImages.length);
  store.push(random);

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
    console.log(img.dataset.id);

    console.log(store[clickCount]);
    if (store[clickCount] == img.dataset.id) {
      clickCount++;

      if (clickCount === store.length) {
        clickCount = 0;

        setTimeout(() => {
          continueGame();
        }, 500);
      }
    } else {
      score.textContent = `Score: ${score}`;
      alert("Wrong! Try again.");
      clickCount = 0;
      store = [];
      let random = Math.floor(Math.random() * gameImages.length);
      store.push(random);
      continueGame();
    }

    console.log(img);
    console.log(clickCount);
  });
});
