//assign vars
var timerEl = document.querySelector("countdown");
var startButton = document.querySelector("#start-btn");
var secondsLeft = 50;
var score = 0;
var nameInput = document.querySelector("#user-input");
var nameS = nameInput.value

//questions/answers set in an array
var questions = [
    {
        prompt: 'fdsfdg',
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS',
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS',
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS',
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS',
        answer:'a'
    }
];

//starts program, starts timer and generates questions
function startProgram() {
    timerStart()
    generateQuestions()

    for (var i=0; i < questions.length;i++) {
        var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
             score++;
             alert("Correct!");
        } else {
             alert("WRONG! - 5 seconds (:");
             subtractSec();
        }
    }
    alert("you got " + score + "/" + questions.length);
};

//timer starts
 function timerStart() {
      timerEl.textContent = secondsLeft + " Seconds Left.";
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining'
        secondsLeft--;
    } else {
        clearInterval(timerInterval);
         sendMessage()
       };
     };

 function sendMessage() {
    timerEl.textContent = "Times Up!";
};

// subtracting 5 seconds when an answer is incorect
function subtractSec() {
    secondsLeft = secondsLeft -5 
};

//storing local storage for the highscore board
localStorage.setItem('name',nameS)

//button function
startButton.addEventListener('click', function () {
    alert('Hello World');
  });