// console.log("Coding Quiz Challenge");

// Quiz Question object - var with array and object for questions.
var quizQuestions = [{
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
        {
        question: "The condition in an if / else statement is enclosed within _______.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },   
        {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },       
        {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes"
    },        
        {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }, 
];


// HTML elements to manipulate

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
// Other variables
var score = 0;

var secondsLeft = 75;
var timerInterval;



//  var score = 0;

//  for (var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }
// alert("you got " + score + "/" + questions.length);
    

   
// var 