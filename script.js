const gameBoardElement = document.querySelector(".gameboard");
const initialBoardState = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const ticTacToeGame = {
  cells: initialBoardState.map((cellValue) => {
    // Create a div for each cell, append it to the gameboard, and return the created cell element.
    const cellElement = document.createElement("div");
    cellElement.dataset.value = cellValue;
    cellElement.textContent = cellValue;
    gameBoardElement.appendChild(cellElement);
    return cellElement;
  }),
  initializeGame: function () {
    const startButton = document.querySelector(".start-game");
    startButton.addEventListener("click", () => {
      const gameMessage = document.createElement("p");
      const gameLogicContainer = document.querySelector(".game-logic");
      gameLogicContainer.appendChild(gameMessage);
      gameMessage.textContent = "Start Game";
    });
  },
};

ticTacToeGame.initializeGame();
