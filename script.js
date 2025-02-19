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
  initializeGame: function () {
    const startButton = document.querySelector(".start-game");
    const gameLogicContainer = document.querySelector(".game-logic");
    const gameMessage = document.createElement("p");
    gameLogicContainer.appendChild(gameMessage);

    // Add click handlers to all cells
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => this.handleCellClick(cell));
    });

    startButton.addEventListener("click", () => {
      this.resetGame();
      gameMessage.textContent = "Game Started - Your Turn!";
      this.gameActive = true;
    });
  },
  handleCellClick: function (cell) {
    if (
      !this.gameActive ||
      !this.isHumanTurn ||
      cell.textContent === "X" ||
      cell.textContent === "O"
    ) {
      return;
    }
    this.player(cell);
  },

  player: function (cell) {
    cell.style.color = "#000";
    cell.textContent = "X";
    cell.dataset.value = "X";
    this.isHumanTurn = false;
    this.isComputerTurn = true;

    if (!this.checkWin("X")) {
      if (!this.checkDraw()) {
        setTimeout(() => this.computer(), 500);
      }
    }
  },

  computer: function () {
    const availableCells = this.cells.filter(
      (cell) => cell.textContent !== "X" && cell.textContent !== "O"
    );

    if (availableCells.length > 0) {
      const randomCell =
        availableCells[Math.floor(Math.random() * availableCells.length)];
      randomCell.style.color = "#000";
      randomCell.textContent = "O";
      randomCell.dataset.value = "O";
      this.isComputerTurn = false;
      this.isHumanTurn = true;

      this.checkWin("O");
      if (!this.checkDraw()) {
        const gameMessage = document.querySelector(".game-logic p");
        gameMessage.textContent = "Your turn!";
      }
    }
  },
  checkWin: function (player) {
    const gameMessage = document.querySelector(".game-logic p");

    for (let combination of this.winningCombinations) {
      if (
        combination.every((index) => this.cells[index].dataset.value === player)
      ) {
        this.gameActive = false;
        gameMessage.textContent =
          player === "X" ? "You win!" : "Computer wins!";
        return true;
      }
    }
    return false;
  },
  checkDraw: function () {
    const gameMessage = document.querySelector(".game-logic p");
    if (
      this.cells.every(
        (cell) => cell.textContent === "X" || cell.textContent === "O"
      )
    ) {
      this.gameActive = false;
      gameMessage.textContent = "It's a draw!";
      return true;
    }
    return false;
  },
  resetGame: function () {
    this.cells.forEach((cell) => {
      const index = this.cells.indexOf(cell);
      cell.textContent = index.toString();
      cell.dataset.value = index.toString();
      cell.style.color = "rgba(0,0,0,0)";
    });
    this.isHumanTurn = true;
    this.isComputerTurn = false;
    this.gameActive = true;
  },
};

ticTacToeGame.initializeGame();
