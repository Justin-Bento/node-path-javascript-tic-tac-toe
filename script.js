// Store the gameboard as an array inside Gameboard object.
const gameDisplay = document.querySelector(".gameboard");

function ticTacToeBoard() {
  let lineOne = "|" + " x " + "|" + "───" + "|" + "───" + "|" + "\n";
  let lineTwo = "|" + "───" + "|" + " x " + "|" + "───" + "|" + "\n";
  let lineThree = "|" + "───" + "|" + "───" + "|" + " x " + "|" + "\n";
  return lineOne + lineTwo + lineThree;
}
console.log(ticTacToeBoard());
