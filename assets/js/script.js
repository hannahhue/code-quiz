//assign vars
var timerEl = document.querySelector("countdown");
var startButton = document.querySelector("#start");
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

//  startButton.addEventListener("click", function()) {
//     timerStart();
//     generateQuestions();
//  };

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

function subtractSec() {
    secondsLeft = secondsLeft -5 
};

localStorage.setItem('name',nameS)
