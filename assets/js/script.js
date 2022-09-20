//assign vars
var timerEl = document.querySelector("countdown");
var startButton = document.querySelector("#start");
var secondsLeft = 10;

//questions/answers set in an array
var questions = [
    {
        prompt: 'fdsfdg'
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS'
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS'
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS'
        answer:'a'
    },
    {
        prompt: 'DSFDSGFDSGFDS'
        answer:'a'
    }
];

score = 0;

for (var i=0; i < questions.length;i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG! - 5 seconds (:");
    }
}
alert("you got " + score + "/" + questions.length);





// click start button and quix starts
// startButton.onclick = function(){
//     generateQuestion()
//     timerStart()
// }

// startButton.addEventListener("click", function() {
//     timerStart();
//     generateQuestions();
// }


//after clicking start the timer will go down
//when answer wrong the timer subtracts
 
// function timerStart() {
//     // Sets interval in variable
//     var timeInterval = setInterval(function() {
//       secondsLeft--;
//       timer.textContent = secondsLeft + " Seconds Left.";
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to prompt message
//         sendMessage()
//       }
//     }
// };

// function sendMessage() {
//     timeEl.textContent = "Times Up!";
// }


// function startTimer(){
//     var counter = 5;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('Sorry, out of time!');
//           clearInterval(counter);
//       }
//     }, 1000);
//   }
//   function start()
//   {
//       document.getElementById("count").style="color:green;";
//       startTimer();

//call each question one at a time

// function generateQuestion {

// }

//show correct answer/right/wrong
// function {

// }

//timer
//make timer hidden until start 
//when answer wrong the timer subtracts

//promt questions one at a time

//game over screen 

//score right / wrong

//save initalls into hiugh score list