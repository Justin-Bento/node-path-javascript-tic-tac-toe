// Store the gameboard as an array inside Gameboard object.
const gameDisplay = document.querySelector(".gameboard");

function ticTacToeBoard() {
  let row1 = "|" + " " + "|" + " " + "|" + " " + "|";
  let row2 = "|" + " " + "|" + " " + "|" + " " + "|";
  let row3 = "|" + " " + "|" + " " + "|" + " " + "|";
  return `${row1}\n${row2}\n${row3}`;
}
console.log(ticTacToeBoard());
