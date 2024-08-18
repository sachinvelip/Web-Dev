import { questions } from "./data.js";

const option = document.querySelector(".questOption");
const nextBtn = document.querySelector("#next-btn");
const quest = document.querySelector("#question");
const count = document.querySelector("#count");
const buttons = document.querySelectorAll(".btn");
const timer = document.querySelector("#timer");
const scorecard = document.querySelector("#score");
const restartBtn = document.querySelector("#restart-btn");


let score = 0;
let cnt = 1;
let currentQuestion = {};

function startQuiz() {
  nextQuestions();
  nextBtn.addEventListener("click",nextQuestions);
  restartBtn.addEventListener('click',restartQuiz)
}

function stopQuiz(){
  quest.innerHTML = "Quiz Completed!";
  option.style.display = "none";
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'block';
  count.innerHTML = `Final Score: ${score}/5`;
}

function restartQuiz(){
  score = 0;
  cnt = 1;
  scorecard.innerHTML = `Score ${score}/5`;
  option.style.display = "flex";
  startQuiz();
  
}

function randomQuestions() {
  return Math.floor(Math.random() * questions.length - 1);
}

function nextQuestions() {
  if(cnt>5){
    stopQuiz();
    return;
  }
  resetState();
  currentQuestion = questions[randomQuestions()];
  count.innerHTML = `Question ${cnt++}/5`;
  quest.innerHTML = `${currentQuestion.question}`;
  option.children[0].innerHTML = `A. ${currentQuestion.A}`;
  option.children[1].innerHTML = `B. ${currentQuestion.B}`;
  option.children[2].innerHTML = `C. ${currentQuestion.C}`;
  option.children[3].innerHTML = `D. ${currentQuestion.D}`;
  enableButtons();
}

function resetState() {
  nextBtn.style.display = "none";
  restartBtn.style.display = 'none';
  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
}

function enableButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const ans = currentQuestion.answer;
  const correct = selectedButton.innerText.charAt(0) === currentQuestion.answer;
  if (correct) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  switch (ans) {
    case "A":
      option.children[0].classList.add("correct");
      break;
    case "B":
      option.children[1].classList.add("correct");
      break;
    case "C":
      option.children[2].classList.add("correct");
      break;
    case "D":
      option.children[3].classList.add("correct");
      break;
    default:
      console.log("Question answer cannot find");
  }

  scorecard.innerHTML = `Score ${score}/5`;
  buttons.forEach((button) => (button.disabled = true));
  nextBtn.style.display = "block";
}

startQuiz();
