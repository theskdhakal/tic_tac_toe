let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const O_Text = "O";
const X_Text = "X";
let currentPlayer = X_Text;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxclicked));
};

function boxclicked(e) {
  const id = e.target.id;

  if (!space[id]) {
    spaces[id] == currentPlayer;
  }
}

startGame();
