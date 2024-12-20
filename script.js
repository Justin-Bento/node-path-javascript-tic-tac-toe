// Store the gameboard as an array inside Gameboard object.
const gameDisplay = document.querySelector(".gameboard");

function ticTacToeBoard() {
  let lineOne = "|───|───|───|\n";
  let lineTwo = "|───|───|───|\n";
  let lineThree = "|───|───|───|\n";
  return lineOne + lineTwo + lineThree;
}
console.log(ticTacToeBoard());
