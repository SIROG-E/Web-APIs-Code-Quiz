// console.log("Coding Quiz Challenge");

// Declared  Variables
var startQuizBtn = document.querySelector("#startQuiz");
var answer1RadioBtn = document.querySelector("#answer1RadioBtn");
var answer2RadioBtn = document.querySelector("#answer2RadioBtn");
var answer3RadioBtn = document.querySelector("#answer3RadioBtn");
var answer4RadioBtn = document.querySelector("#answer4RadioBtn");
var submitScoreBtn = document.querySelector("#submitScore");
var goBackBtn = document.querySelector("#goBack");
var clearScoresBtn = document.querySelector("#clearScores");

// Quiz Question object - var with array 
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log"
  },
];

// Start working Code
var questionOnDisplay = 0;

function RefreshQuestionInfo(index) {
  questionOnDisplay = index;
  var qPrompt = quizQuestions[index];

  //update question id
  document.querySelector("#qid").innerHTML = index + 1;

  //update prompt
  document.querySelector("#questionPrompt").innerHTML = qPrompt.question;

  //update answer choices
  document.querySelector("#answer1Lbl").innerHTML = qPrompt.choices[0];
  document.querySelector("#answer2Lbl").innerHTML = qPrompt.choices[1];
  document.querySelector("#answer3Lbl").innerHTML = qPrompt.choices[2];
  document.querySelector("#answer4Lbl").innerHTML = qPrompt.choices[3];
}

function EvaluateAnswer(answerChosenId, answerIndex) {
	alert (answerChosenId);
    alert (answerIndex);

  var question = quizQuestions[answerIndex];
  var quizAnswer = question.correctAnswer;  
  var userAnswer = document.querySelector(`#${answerChosenId}`).innerHTML;
    alert(`quiz: ${quizAnswer}, user: ${userAnswer}`);  
}


function ToggleHideShow(elementId) {
  var elem = document.getElementById(`${elementId}`);
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function ClickEvent(value, elementId, args) {
  alert(`Clicked Something: ${elementId}`);

  switch (value) {
    case "start":
      // code block   
      ToggleHideShow('startModal');
      RefreshQuestionInfo(0);
      break;
    case "answer":
      EvaluateAnswer(elementId, questionOnDisplay);
      RefreshQuestionInfo(questionOnDisplay + 1);
      // code block
      break;
    case "submitScore":
      // code block
      break;
    case "goBack":
      // code block
      break;
    case "clearScores":
      // code block
      break;
    default:
      // code block
      break;
  }
}

function here() {

}

// Add event listener to generate button
startQuizBtn.addEventListener("click", function() {
  ClickEvent("start", "startQuiz", null);
});

answer1RadioBtn.addEventListener("click", function() {
  ClickEvent("answer", "answer1RadioBtn", null);
});

answer2RadioBtn.addEventListener("click", function() {
  ClickEvent("answer", "answer2RadioBtn", null);
});

answer3RadioBtn.addEventListener("click", function() {
  ClickEvent("answer", "answer3RadioBtn", null);
});

answer4RadioBtn.addEventListener("click", function() {
  ClickEvent("answer", "answer4RadioBtn", null);
});

submitScoreBtn.addEventListener("click", function() {
  ClickEvent("submitScore", "submitScore", null);
});


goBackBtn.addEventListener("click", function() {
  ClickEvent("goBack", "goBack", null);