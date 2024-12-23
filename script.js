const gameDisplay = document.querySelector(".gameboard");
const gameboard = ["1", "1", "2", "3", "4", "5", "6", "7", "8"];

const ticTacToe = {
  displayBoard: function () {
    gameboard.forEach((game, i) => {
      const container = document.createElement("div");
      container.textContent = game;
      container.setAttribute("class", "hide");
      container.style.color = "rgba(0, 0, 0, 0)"; // Hide initially
      container.addEventListener("click", () => {
        container.textContent = "X";
        container.classList.add("showText");
        container.style.color = "rgba(0, 0, 0, 1)"; // Show text
      });
      gameDisplay.appendChild(container);
    });
  },
};

ticTacToe.displayBoard();
