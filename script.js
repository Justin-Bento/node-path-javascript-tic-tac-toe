const gameDisplay = document.querySelector(".gameboard");
const gameboard = ["1", "1", "2", "3", "4", "5", "6", "7", "8"];
const startGame = document.querySelector(".start-game");

const ticTacToe = {
  setupBoard: function () {
    gameboard.forEach((game, i) => {
      const container = document.createElement("div");
      container.textContent = game;
      container.style.color = "transparent";
      this.playerInput.X(container);
      this.playerInput.O(container);
      gameDisplay.appendChild(container);
    });
    startGame.addEventListener("click", this.chooseStartingPlayer);
  },
  chooseStartingPlayer: function () {
    currentPlayer = Math.random() > 0.5 ? "X" : "O";
    console.log(`Player ${currentPlayer} starts the game!`);
  },
  setupGame: function () {},
  playerInput: {
    X: function (container) {
      container.addEventListener("click", () => {
        container.textContent = "X";
        container.classList.remove("hide");
        container.style.color = "black";
      });
    },
    O: function (container) {
      container.addEventListener("click", () => {
        container.textContent = "O";
        container.style.capitalize = "uppercase";
        container.classList.remove("hide");
        container.style.color = "black";
      });
    },
    // y: function (container) {},
  },
};

ticTacToe.setupBoard();
