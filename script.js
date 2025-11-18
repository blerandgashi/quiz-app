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

const currentquestionIndex = 0;
const score = 0;