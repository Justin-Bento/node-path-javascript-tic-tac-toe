const gameBoardElement = document.querySelector(".gameboard");
const initialBoardState = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const ticTacToeGame = {
  isHumanTurn: true,
  isComputerTurn: false,
  gameActive: false,
  cells: initialBoardState.map((cellValue) => {
    // Create a div for each cell, append it to the gameboard, and return the created cell element.
    const cellElement = document.createElement("div");
    cellElement.dataset.value = cellValue;
    cellElement.textContent = cellValue;
    cellElement.style.color = "rgba(0,0,0,0)";
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
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ],
  player: function (cell) {
    cell.textContent = "X";
    cell.dataset.value = "X";
    this.isHumanTurn = false;
    this.isComputerTurn = true;
    // Check for win or draw before computer moves
    if (!this.checkWin("X")) {
      setTimeout(() => this.computer(), 500); // Delay computer move for better UX
    }
  },
  computer: function () {
    const availableCells = this.cells.filter(
      (cell) => cell.textContent !== "X" && cell.textContent !== "O"
    );
    if (availableCells.length > 0) {
      // Make random move
      const randomCell =
        availableCells[Math.floor(Math.random() * availableCells.length)];
      randomCell.textContent = "O";
      randomCell.dataset.value = "O";
      this.isComputerTurn = false;
      this.isHumanTurn = true;

      this.checkWin("O");
    }
  },
};

ticTacToeGame.initializeGame();
