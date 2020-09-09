console.log("Coding Quiz Challenge");

// HTML elements to manipulate

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
// Other variables

var timeLeft = 75;
var timerInterval;
var score = 0;


// Quiz Question object
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choice1: "1. strings",
    choice2: "2. booleans",
    choice3: "3. alerts",
    choice4: "4. numbers",
    correctAnswer: "3"},
    {
    question: "The condition in an if / else statement is enclosed within _______.",
    choice1: "1. quotes",
    choice2: "2. curly brackets",
    choice3: "3. parenthesis",
    choice4: "4. square brackets",
    correctAnswer: "3"},   
    {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. booleans",
    choice4: "4. all of the above",
    correctAnswer: "4"},       
    {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    choice3: "3. quotes",
    choice4: "4. parenthesis",
    correctAnswer: "3"},        
    {
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2. terminal/bash",
    choice3: "3. for loops",
    choice4: "4. console.log",
    correctAnswer: "4"}, 
];

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