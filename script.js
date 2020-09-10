var startQuizBtn = document.querySelector("#startQuiz");
var answer1RadioBtn = document.querySelector("#answer1RadioBtn");
var answer2RadioBtn = document.querySelector("#answer2RadioBtn");
var answer3RadioBtn = document.querySelector("#answer3RadioBtn");
var answer4RadioBtn = document.querySelector("#answer4RadioBtn");
var submitScoreBtn = document.querySelector("#submitScore");
var goBackBtn = document.querySelector("#goBack");
var clearScoresBtn = document.querySelector("#clearScores");

var quizes = [];

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

var questionsAnsweredCount = 0;
var questionIndexOnDisplay = 0;
var correctCount = 0;

function ResetForm() {
  questionIndexOnDisplay = 0;
  correctCount = 0;  
  document.querySelector("#timer").innerHTML = "";
  
  

}

function RefreshQuestionInfo(index) {

  questionIndexOnDisplay = index;

  var qPrompt = quizQuestions[index];

  //update question id
  document.querySelector("#qid").innerHTML = questionIndexOnDisplay + 1;

  //update prompt
  document.querySelector("#questionPrompt").innerHTML = qPrompt.question;

  //update answer choices
  document.querySelector("#answer1Lbl").innerHTML = qPrompt.choices[0];
  document.querySelector("#answer2Lbl").innerHTML = qPrompt.choices[1];
  document.querySelector("#answer3Lbl").innerHTML = qPrompt.choices[2];
  document.querySelector("#answer4Lbl").innerHTML = qPrompt.choices[3];
}

function EvaluateAnswer(answerChosenId, answerIndex) {
  //console.log('Evaluated question in index: ', answerIndex);

  var question = quizQuestions[answerIndex];
  var quizAnswer = question.correctAnswer;
  var userAnswer = document.querySelector(`#${answerChosenId.replace('RadioBtn', 'Lbl')}`).innerHTML;

  //alert(`quiz: ${quizAnswer} user: ${userAnswer}`);

  if (quizAnswer === userAnswer) {
    //right
    document.querySelector("#answerResult").innerHTML = "Previous answer was: Right!";
    correctCount++;
  } else {
    //wrong
    document.querySelector("#answerResult").innerHTML = "Previous answer was: Wrong!";

  }

}

function CalculateScore() {
  return correctCount * 20;
}

function ToggleHideShow(elementId) {
  var elem = document.getElementById(`${elementId}`);
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function BuildOL(array) {
  // Create the list element:
  var list = document.createElement('ol');

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

var interval;

function StopTimer() {
  clearInterval(interval);
}

function TimerCountDown(callback) {

  var count = 75;

  interval = setInterval(function() {
    document.getElementById('timer').innerHTML = count;
    count--;

    if (count === 0) {
      clearInterval(interval);
      //document.getElementById('timer').innerHTML = 'Done';
      // or...

      if (questionsAnsweredCount < 5) {
        callback();
      }

    }
  }, 1000);

}




function ShowFinalSore() {
  ToggleHideShow('questionModal');
  ToggleHideShow('doneModal');
  document.querySelector("#finalScore").innerHTML = CalculateScore()
}

function TimerEnded() {
  alert('Time Ended');
  ShowFinalSore();
}


function ClickEvent(value, elementId, args) {
  //alert(`Clicked Something: ${elementId}`);

  switch (value) {
    case "start":
      //console.log('question On Display: ', questionIndexOnDisplay + 1, 'questionIndexOnDisplay: ', questionIndexOnDisplay);
      ToggleHideShow('startModal');
      ToggleHideShow('questionModal');
      RefreshQuestionInfo(0);
      TimerCountDown(TimerEnded);
      break;
    case "answer":
      //console.log('question On Display: ', questionIndexOnDisplay + 2, 'questionIndexOnDisplay: ', questionIndexOnDisplay + 1);
      questionsAnsweredCount++;

      EvaluateAnswer(elementId, questionIndexOnDisplay);
      if (questionIndexOnDisplay < 4) {
        //EvaluateAnswer(elementId, questionIndexOnDisplay);

        //Refresh next question
        RefreshQuestionInfo(questionIndexOnDisplay + 1);
      } else {
        //EvaluateAnswer(elementId, questionIndexOnDisplay);
        StopTimer();
        ToggleHideShow('questionModal');
        ToggleHideShow('doneModal');
        document.querySelector("#finalScore").innerHTML = CalculateScore()
      }



      // code block
      break;
    case "submitScore":
      var userResult = document.querySelector("#initials").value;
      quizes.push(`${userResult} - ${CalculateScore()}`);


      document.querySelector("#initials").value = '';
      ToggleHideShow('doneModal');
      ToggleHideShow('highScoresModal');

      document.getElementById('highScoresBody').innerHTML = '';
      // Add the contents of quizes:
      document.getElementById('highScoresBody').appendChild(BuildOL(quizes));

      // code block
      break;
    case "goBack":
      // code block
      ToggleHideShow('highScoresModal');
      ToggleHideShow('startModal');
      ResetForm();
      break;
    case "clearScores":
      // code block
      quizes = [];
      document.getElementById('highScoresBody').innerHTML = '';
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
});

clearScoresBtn.addEventListener("click", function() {
  ClickEvent("clearScores", "clearScores", null);
});
