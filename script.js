const gameDisplay = document.querySelector(".gameboard");
const gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const startGame = document.querySelector(".start-game");

const ticTacToe = {
  boxes: gameboard.map((x) => {
    const box = document.createElement("div");
    box.textContent = x;
    gameDisplay.appendChild(box); // Append each box to gameDisplay
    return box; // Return the box element for future reference
  }),
};
