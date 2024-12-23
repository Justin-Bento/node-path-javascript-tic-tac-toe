const gameDisplay = document.querySelector(".gameboard");
const gameboard = ["1", "1", "2", "3", "4", "5", "6", "7", "8"];

const ticTacToe = {
  displayBoard: function () {
    gameboard.forEach((game, i) => {
      const container = document.createElement("div");
      container.textContent = game;
      container.style.color = "transparent";
      this.playerInput.X(container);
      gameDisplay.appendChild(container);
    });
  },
  playerInput: {
    X: function (container) {
      container.addEventListener("click", () => {
        container.textContent = "X";
        container.classList.remove("hide");
        container.style.color = "black";
      });
    },
    // y: function (container) {},
  },
};

ticTacToe.displayBoard();
