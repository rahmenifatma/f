const questions = [
  {
    question: "whats the capital of tunisia",
    answers: [
      { text: "tunis", correct: true },
      { text: "gabes", correct: false },
      { text: "touzer", correct: false },
      { text: "sousse", correct: false },
    ],
  },

  {
    question: "whish is the smallest countient int the world",
    answers: [
      { text: "austrlia", correct: true },
      { text: "gabes", correct: false },
      { text: "touzer", correct: false },
      { text: "sousse", correct: false },
    ],
  },

  {
    question: "whish is the smallest countient int the world",
    answers: [
      { text: "spain", correct: true },
      { text: "psj", correct: false },
      { text: "real madrid", correct: false },
      { text: "taraji ", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
var currentQuestionIndex = 0;
var score = 0;
function startQuizz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questioNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questioNo + " ." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML =
    "you scoored " + score + " out of " + questions.length;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
}
function handleNextButoon() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handleNextButoon();
  } else {
    startQuizz();
  }
});
startQuizz();
