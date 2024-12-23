const gameDisplay = document.querySelector(".gameboard");

const ticTacToe = {
  gameboard: ["1", "1", "2", "3", "4", "5", "6", "7", "8"],
  displayBoard: function () {
    this.gameboard.forEach((game, i) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = game;
      paragraph.setAttribute("class", "hide");
      paragraph.style.color = "rgba(0, 0, 0, 0)"; // Hide initially
      paragraph.addEventListener("click", () => {
        paragraph.textContent = "X";
        paragraph.classList.add("showText");
        paragraph.style.color = "rgba(0, 0, 0, 1)"; // Show text
      });
      gameDisplay.appendChild(paragraph);
    });
  },
};

ticTacToe.displayBoard();
