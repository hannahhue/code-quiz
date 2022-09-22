//assign vars
var timerEl = document.getElementById("timer");
var startButton = document.querySelector("#start-btn");
var questionChoice = document.getElementById("multiple-choice");
var scoreB = document.getElementById("scorebox");

var secondsLeft = 0;
var score = 0;

//timer count down start
var timerCount = setInterval(function (event) {
  if (secondsLeft > 0) {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
  }
}, 1000);

// // var nameS = nameInput.value;
var questionNum = 0;

//questions/answers set in an array
var questions = [
  {
    prompt: "Which would be the largest heading?",
    choices: ["<h1>", "<h3>", "<main>"],
    answer: "<h1>",
  },
  {
    prompt: "What does HTML stand for?",
    choices: [
      "Hypertext Madeup Language",
      "Hypertext Markup Language",
      "Hypo Makes Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    prompt: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Circular Style Sheets",
      "Copper Styling Sheet",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    prompt: "Where should the <script> code go in an HTML file?",
    choices: ["header", "end of body", "div"],
    answer: "end of body",
  },
  {
    prompt: "How can you make a list that lists the items with bullets? ",
    choices: ["<ul>", "<h3>", "<span>"],
    answer: "<ul>",
  },
];

//starts program, starts timer and generates questions
function startProgram(event) {
  secondsLeft = 50;
  event.preventDefault();
  generateQuestions();
  startButton.style.visibility = "hidden";
}

//gets called by start program shows questions,
//if less than # of q's will move on to next question
function generateQuestions() {
  questionChoice.textContent = Object.values(questions[questionNum])[0];
  for (i = 0; i < questions[questionNum].choices.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = Object.values(questions[questionNum])[1][i];
    questionChoice.appendChild(choice);
  }
}

//checks response from question
function checkAnswer(event, answer) {
  var answer = event.target;
  var result = false;
  //if right and more questions will move on to next q
  if (questionNum < questions.length) {
    var questionAnswer = Object.values(questions[questionNum])[2];
  }
  //if wrong and is less than # of qs will remove time and go next
  if (answer.textContent !== questionAnswer) {
    secondsLeft = secondsLeft - 5;
    questionNum++;
    if (questionNum === questions.length) {
      endGame(score, timerEl, result);
    } else {
      nextQuestion(questionNum, result);
    }
    //ends game if all questions / max length reached
  } else {
    score++;
    questionNum++;
    result = true;
    if (questionNum === questions.length) {
      endGame(score, timerEl, result);
    } else {
      nextQuestion(questionNum, result);
    }
  }
}

//called by check is question # is less than the length will execute
function nextQuestion(questionNum, result) {
  if (questionNum < questions.length) {
    questionChoice.textContent = Object.values(questions[questionNum])[0];
    var resultText = document.createElement("p");
    questionChoice.appendChild(resultText);
    if (result) {
      resultText.textContent = "Correct!";
    } else {
      resultText.textContent = "Wrong!";
    }
    for (i = 0; i < questions[questionNum].choices.length; i++) {
      var choice = document.createElement("button");
      choice.textContent = Object.values(questions[questionNum])[1][i];
      questionChoice.appendChild(choice);
    }
  }
}

//called after all questions are complete
function endGame(result) {
  var scoreSaver = document.createElement("input");
  var scoreButton = document.createElement("button");
  var finalScore = secondsLeft + score;
  var resultText = document.createElement("p");
  //creating creating buttons and save local storage functions
  scoreButton.textContent = "Submit";
  scoreSaver.type = "text";
  startButton.style.visibility = "visible";
  questionChoice.textContent =
    "Game Over! Your score was! " + finalScore + " Enter your initials!: ";
  questionChoice.appendChild(resultText);
  questionChoice.appendChild(scoreSaver);
  questionChoice.appendChild(scoreButton);
  //responce after answer
  if (result) {
    resultText.textContent = "Correct!";
  } else {
    resultText.textContent = "Wrong!";
  }
  scoreButton.addEventListener("click", function (event) {
    event.preventDefault;
    localStorage.setItem(JSON.stringify(scoreSaver.value), finalScore);
  });
}

//button function
//startgame button
startButton.addEventListener("click", startProgram);

//next question/check button
questionChoice.addEventListener("click", checkAnswer);
