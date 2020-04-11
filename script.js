//Declare all DOMs
var startScreenEl = document.getElementById("startScreen");
console.log(startScreenEl);
var capitalQuizEl = document.getElementById("capitalQuiz");
var startBtnEl = document.getElementById("startBtn");
var questionsEl = document.getElementById("questions");
var answerChoicesEl = document.getElementById("answerChoices");
var feedbackEl = document.getElementById("feedback");
var nextDivEl = document.getElementById("nextDiv");
var timerDisplayEl = document.getElementById("timerDisplay");
var finalDivEl = document.getElementById("finalDiv");
var timesUpDiv = document.getElementById("timesUpDiv");
var userInitialsInput = document.getElementById("userInitials");
var highscoresResultsSpan = document.getElementById("highscoresResults");
var highscoreDivEl = document.getElementById("highscoreDiv");
var viewHighscoreEl = document.getElementById("viewHighscore")
var timeLeft = 90;

$(document).ready(function () {

//Declare functions to display questions and run
    function startQuiz(event) {
        event.preventDefault();
        startScreenEl.setAttribute("class", "hide");
        questionsEl.removeAttribute("class");
        getQuestion();
    }


    var scoreCounter = 0;
    var currentIndex = 0;

    function getQuestion() {
        if (currentIndex < 10) {
            var currentQuestion = question[currentIndex];
            var title = document.getElementById("questionTitle");
            title.textContent = currentQuestion.questionTitle;
            console.log(title);
            nextDivEl.setAttribute("class", "hide");


    function randomAnswerGenerator() {

            var mulitpleChoice = []; 
                do {
            var answer = currentQuestion.answerChoices[Math.floor(Math.random() * currentQuestion.answerChoices.length)];
                if (mulitpleChoice.indexOf(answer) === -1) {
                        mulitpleChoice.push(answer);
                    }
             } while (mulitpleChoice.length < currentQuestion.answerChoices.length) {
                  
                };
                console.log(currentIndex);
             
    function createRadio(answerArr) {
            for (var i = 0; i < answerArr.length; i++) {
            var newDiv = document.createElement("div");
            var newLabel = document.createElement("label");
            var newRadio = document.createElement("input");
            newRadio.setAttribute("type", "radio");
            newRadio.setAttribute("value", answerArr[i]);
            newLabel.append(newRadio);
            newLabel.append(answerArr[i]);
            answerChoicesEl.append(newLabel);
            newRadio.setAttribute("name", "select");
            newRadio.setAttribute("class", "myRadio");
            var div = document.createElement("div");
            document.getElementById("answerChoices").appendChild(div);
            feedbackEl.removeAttribute("class");
             }

            $("input").on("click", function () {
                $(".myRadio").attr("disabled", true);

            if ($("input:checked").val() === currentQuestion.correctAnswer) {
                $("#feedback").html("Correct!");
                nextDivEl.setAttribute("class", "display");
                console.log("scoreCounter: " + scoreCounter);
                scoreCounter++;
                document.getElementById("scoreCounter").textContent = scoreCounter;
                } else {
                $("#feedback").html("Wrong!");
                timeLeft = timeLeft - 10;
                timesUpDiv.setAttribute("class", "none");
                nextDivEl.setAttribute("class", "display");
                }
                });}
                createRadio(mulitpleChoice);
                }
                randomAnswerGenerator();

            } else {
            questionsEl.setAttribute("class", "hide");
            answerChoicesEl.setAttribute("class", "hide");
            feedbackEl.setAttribute("class", "hide");
            finalDivEl.removeAttribute("class");
            document.getElementById("scoreCounter2").textContent = scoreCounter;
            nextDivEl.remove();
            document.querySelector(".timer").remove();
            timesUpDiv.remove();
        }
    }

    function nextQuestion(event) {
        event.preventDefault()
        answerChoicesEl.innerHTML = " ";
        feedbackEl.innerHTML = " ";
        timesUpDiv.setAttribute("class", "hide");
        for (var i = 0; i < question.length; i++) {
            currentIndex += 1;
            getQuestion();
        return;
        }
    }

    function startTimer() {
        var timeInterval = setInterval(function () {
            timerDisplayEl.textContent = timeLeft + " seconds";
            timeLeft--;

            if (timeLeft === 0) {
                timerDisplayEl.textContent = "Times Up!";
                $(".myRadio").attr("disabled", true);
                timesUpDiv.setAttribute("class", "hide");
                timesUp();
                
                 } else if (timeLeft <= 0) {
                timerDisplayEl.textContent = "Times Up!";
                $(".myRadio").attr("disabled", true);
                timesUpDiv.setAttribute("class", "hide");
                clearInterval(timeInterval);
                timesUp();
             }
        }, 1000);
    }


    function scoreBoard(event) {
        event.preventDefault()

        highscoresResultsSpan.innerHTML = userInitialsInput.value + " : Score: " + scoreCounter;

        store();""
        userInitialsInput.value = "";
        console.log(userInitialsInput.value);
        viewHighscoreEl.setAttribute("class", "hide");
        finalDivEl.setAttribute("class", "hide");
        highscoreDivEl.removeAttribute("class");

    }

//Store scores locally.
    function store() {
        window.localStorage.myitems = JSON.stringify(highscoresResultsSpan.innerHTML);
        // console.log(storedValues);

    }
    console.log(highscoresResultsSpan.innerText);
    function getValues() {
        var storedValues = window.localStorage.myitems;
        highscoresResultsSpan.innerHTML = JSON.stringify(storedValues);


    }
    getValues();
    console.log(highscoresResultsSpan);



   $("#viewHighscore").on("click", function () {
        questionsEl.setAttribute("class", "hide");
        answerChoicesEl.setAttribute("class", "hide");
        feedbackEl.setAttribute("class", "hide");
        highscoreDivEl.removeAttribute("class");
        document.getElementById("scoreCounter2").textContent = scoreCounter;
        nextDivEl.remove();
        document.querySelector(".timer").remove();
        timesUpDiv.remove();
        startScreenEl.setAttribute("class", "hide");
    });


    $("#startBtn").on("click", startQuiz);
    $("#startBtn").on("click", startTimer);
    $("#nextBtn").on("click", nextQuestion);
    $("#initialBtn").on("click", scoreBoard);
    $("#clearScoreBtn").on("click", function () {

        localStorage.removeItem("myitems");
        highscoresResultsSpan.innerHTML = "";
    });

}); 


function scoreBoard(event) {
    event.preventDefault()

    highscoresResultsSpan.innerHTML = userInitialsInput.value + ": Score:" + scoreCounter;

    store();
    userInitialsInput.value = "";
    console.log(userInitialsInput.value);
    viewHighscoreEl.setAttribute("class", "hide");
    finalDivEl.setAttribute("class", "hide");
    highscoreDivEl.removeAttribute("class");

}


function store() {
    window.localStorage.myitems = JSON.stringify(highscoresResultsSpan.innerHTML);
    // console.log(storedValues);

}
console.log(highscoresResultsSpan.innerText);
function getValues() {
    var storedValues = window.localStorage.myitems;
    highscoresResultsSpan.innerHTML = JSON.stringify(storedValues);


}
getValues();
console.log(highscoresResultsSpan)
