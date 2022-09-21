//assign vars
var timerEl = document.getElementById("timer");
var startButton = document.querySelector("#start-btn");
var submitButton = document.querySelector("#sub-btn");
var nameInput = document.querySelector("#user-input");

var secondsLeft = 50;
var score = 0;
var nameS = nameInput.value;
questionNum = 0;

//questions/answers set in an array
var questions = [
    {
        prompt: 'Which would be the largest heading?(avhjb /n',
        choices: ['<h1>','<h3>','<main>'],
        answer:'<h1>'
    },
    {
        prompt: 'What does HTML stand for?',
        choices: ['Hypertext Madeup Language','Hypertext Markup Language','Hypo Makes Language'],
        answer:'Hypertext Markup Language'
    },
    {
        prompt: 'What does CSS stand for?',
        choices: ['Cascading Style Sheets','Circular Style Sheets','Copper Styling Sheet'],
        answer:'Cascading Style Sheets'
    },
    {
        prompt: 'Where should the <script> code go in an HTML file?',
        choices: ['header','end of body','div'],
        answer:'end of body'
    },
    {
        prompt: 'How can you make a list that lists the items with bullets? ',
        choices: ['<ul>','<h3>','<span>'],
        answer:'<ul>'
    }
];

//starts program, starts timer and generates questions
function startProgram(event) {
    event.preventDefault()
    timerCount()
    generateQuestions()
    startButton.style.visibility = 'hidden';
    questionNum = 0;
    timer = 90;
    questionC.textContent = Object.values(questions[questionNum])[0];
    for (i = 0; i < questions[questionNum].choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = Object.values(questions[questionNum])[1][i];
        questionC.appendChild(choice);
    }

 
};

//timer starts
var timerCount = setInterval (function() {
    secondsLeft--;
    timerEl.textContent = `Timer: ${secondsLeft}`
    if (secondsLeft === 0 ){
        endGame()

    };
}, 1000);

// subtracting 5 seconds when an answer is incorect
function subtractSec() {
    secondsLeft = secondsLeft -5 
};

//showing questions
// function generateQuestions() {
//     if ()
// }

//confirming answer
// function confirmAnswer() {
//     if ()
// }

//button function

//startgame button
startButton.addEventListener('click ', startProgram);


//HELP HERE
//save initals button
submitButton.addEventListener('click', function (event) {
     localStorage.setItem('name',nameS);
});