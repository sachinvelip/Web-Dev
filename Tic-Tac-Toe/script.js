const boxes = document.querySelectorAll(".boxes");
const winner = document.querySelector(".winner");
const restart = document.querySelector(".restart");

let count = 0;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function startGame() {
  Array.from(boxes).forEach((box) => {
    box.addEventListener("click", writeXorO);
  });
  restart.addEventListener("click", restartGame);
}

function writeXorO(e) {
  if (count % 2 === 0) {
    e.target.innerHTML = `X`;
    e.target.style.pointerEvents = "none";
    // e.target.removeEventListener('click',writeXorO);
    // e.target.style.cursor='no-drop';
  } else {
    e.target.innerHTML = `O`;
    e.target.style.pointerEvents = "none";
    // e.target.removeEventListener('click',writeXorO);
    // e.target.style.cursor='no-drop';
  }
  count++;
  // if(count>4){
  checkWinner();
  // }
}

function checkWinner() {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) { //if any pattern matches all the position with same value
        winner.innerHTML = `${pos1} is the Winner!!`;
        endGame();
      }
    
      //if the three positions are not equala and all boxex are filled then make draw
      if (pos1 !== pos2 && pos2 !== pos3 && count===9) {
        winner.innerHTML = `DRAW`;
        endGame();
      }

    }  

  }
}

function endGame() {
  boxes.forEach((box) => {
    box.removeEventListener("click", writeXorO);
  });
  restart.style.display = "block";
}

function restartGame() {
  count=0;
  winner.innerHTML = "";
  restart.style.display = "none";
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.pointerEvents = "auto";
  });
  startGame();
}

startGame();
