const gameDisplay = document.querySelector(".gameboard");
const gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const ticTacToe = {
  boxes: gameboard.map((x) => {
    // This section Append each div to gameDisplay and returns the game board box element.
    const box = document.createElement("div");
    box.textContent = x;
    gameDisplay.appendChild(box);
    return box;
  }),
  startGame: function () {
    const startGame = document.querySelector(".start-game");
    startGame.addEventListener("click", () => {
      const gameNotice = document.createElement("p");
      const appendGameNotice = document.querySelector(".game-logic");
      appendGameNotice.appendChild(gameNotice);
      let gameNoticeText = (gameNotice.textContent = "Start Game");
      return gameNoticeText;
    });
  },
};

ticTacToe.startGame();
