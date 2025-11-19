const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: 1
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      "Microsoft",
      "Netscape",
      "Oracle",
      "IBM"
    ],
    correct: 1
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      "<js>",
      "<javascript>",
      "<script>",
      "<scripting>"
    ],
    correct: 2
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      "msg('Hello World')",
      "alert('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')"
    ],
    correct: 1
  }
];

let currentquestionIndex = 0;
let score = 0;
console.log(currentquestionIndex);

let startScreenEl = document.querySelector("#start-screen");
let quizScreenEl = document.querySelector("#quiz-screen");
let questionText = document.querySelector("#question-text");

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function(){
  startScreenEl.classList.add("hidden");
  quizScreenEl.classList.remove("hidden");
  getQuestions()
})

function getQuestions(){
  let questionContainer = questions[currentquestionIndex]
  questionText.textContent = questionContainer.question;

  let questionNumber = document.querySelector("#question-number");
  questionNumber.textContent = `Question ${currentquestionIndex + 1} of ${questions.length}`

  let answersContainer = document.querySelector("#answers");
  const answersArray = questionContainer.answers;

  answersContainer.innerHTML = ""

  answersArray.forEach((answers, index) => {
    const btns = document.createElement("button");
    btns.textContent = answers;
    btns.classList.add("answer-btn")

    btns.addEventListener("click", function(){
      checkAnswer(index)    
    })
    answersContainer.appendChild(btns);
  })
}

function checkAnswer(correctAnswerIndex){
  const allBtns = document.querySelectorAll(".answer-btn");
  const nextBtn = document.querySelector("#next-btn");

  allBtns.forEach(currentBtn =>{
    currentBtn.disabled = true;
  })
  if (questions[currentquestionIndex].correct === correctAnswerIndex) {
    allBtns[correctAnswerIndex].classList.add("correct");
    score++;
    console.log(score);
    
    document.querySelector("#score").textContent = `${score} of ${questions.length}`;
  }else{
    allBtns[correctAnswerIndex].classList.add("wrong");
    allBtns[questions[currentquestionIndex].correct].classList.add("correct");
  }
  nextBtn.classList.remove("hidden");
}

const nextBtn = document.querySelector("#next-btn")
nextBtn.addEventListener("click", function(){
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    getQuestions();
    nextBtn.classList.add("hidden")
  }else{
    showResult()
  }
})

function showResult(){
  document.querySelector("#quiz-screen").classList.add("hidden");
  document.querySelector("#next-btn").classList.add("hidden");

  document.querySelector("#results-screen").classList.remove("hidden");

  const finalScore = document.querySelector("#score").textContent = score;
  document.querySelector(".final-score").textContent = `Your score: ${finalScore} / ${questions.length}`

  const resultMessage = document.querySelector("#result-message");

  if (score === questions.length) {
    resultMessage.textContent = "Excellent knowledge!"
  }else if (score >= 3) {
    resultMessage.textContent = "Good job there!" 
  }else{
    resultMessage.textContent = "You go step by step!"
  }
}

const restartBtn = document.querySelector("#restart-btn");

restartBtn.addEventListener("click", function(){
  document.querySelector("#results-screen").classList.add("hidden");
  document.querySelector("#start-screen").classList.remove("hidden");

  score = 0;
  document.querySelector(".final-score").textContent = score;
  currentquestionIndex = 0;
})