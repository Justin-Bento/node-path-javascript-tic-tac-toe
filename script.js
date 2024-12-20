const gameDisplay = document.querySelector(".gameboard");

const ticTacToe = {
  gameboard: ["1", "1", "2", "3", "4", "5", "6", "7", "8"],
  displayBoard: function () {
    this.gameboard.forEach((game, i) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = game;
      paragraph.setAttribute("class", "hide");
      paragraph.addEventListener("click", () => {
        paragraph.textContent = "X";
        paragraph.classList.add("showText");
      });
      gameDisplay.appendChild(paragraph);
    });
  },
};

ticTacToe.displayBoard();
