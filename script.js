// Store the gameboard as an array inside Gameboard object.
const gameDisplay = document.querySelector(".gameboard");

function ticTacToeBoard() {
  let gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  gameboard.forEach((game, i) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = game;
    gameDisplay.appendChild(paragraph);
  });
}
ticTacToeBoard();
