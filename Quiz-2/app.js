// CREATE A QUIZ CLASS
var questionNo = 1;
var totalQuestion = 10;
var Total = 20;

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    getIndex() {
        return this.questionIndex;
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === Total;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    var img = document.createElement("img");
    document.getElementById("logo").style.cssText = "width:200px; margin-top:20px; margin-left:144px;"

    if (quiz.getIndex() == 10) {
        const head = document.getElementsByTagName("h1")[0];
        head.innerHTML = "General Knowledge";
        quizTime = 15 * 60 * 60 / 60;
        questionNo = 1;
        totalQuestion = 5;
    }

    if (quiz.getIndex() == 15) {
        const head = document.getElementsByTagName("h1")[0];
        head.innerHTML = "Logo Identification";
        quizTime = 8 * 60 * 60 / 60;
        // img.src = "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/vwpng.PNG";
        // document.getElementById("shikhar").replaceChildren(img);
        questionNo = 1;
        totalQuestion = 5;
        img.src =
            "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1971-present.png";
        document.getElementById("logo").appendChild(img);

    }
    if (quiz.getIndex() == 16) {
        img.src =
            "https://s3-symbol-logo.tradingview.com/uco-bank--600.png";
        document.getElementById("logo").replaceChildren(img);
    }
    if (quiz.getIndex() == 17) {
        img.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Motorola_M_symbol_blue.svg/2048px-Motorola_M_symbol_blue.svg.png";
        document.getElementById("logo").replaceChildren(img);
    }
    if (quiz.getIndex() == 18) {
        img.src =
            "https://logos-world.net/wp-content/uploads/2021/03/Jaguar-Logo.png";
        document.getElementById("logo").replaceChildren(img);
    }
    if (quiz.getIndex() == 19) {
        img.src =
            "https://www.carlogos.org/logo/Volkswagen-emblem-2014-1920x1080.png";
        document.getElementById("logo").replaceChildren(img);
    }
    if (quiz.isEnded()) {

        showScores();
    }
    else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = questionNo++;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${totalQuestion}`;
};

// SHOW SCORES
function showScores() {
    var campus = "";
    if (quiz.score >= 9.5) {
        campus = "Vellore";
    }
    else if (quiz.score >= 7.5 && quiz.score < 9.5) {
        campus = "Chennai";
    }
    else if (quiz.score >= 6.5 && quiz.score < 7.4) {
        campus = "Amravati";
    }
    if (campus == "") {
        var quizEndHTML =`
        <h1>Quiz Completed</h1>
        <h2 id='score'> Your scored: ${quiz.score} of ${Total} <br><br>
        You are not eligible to take admission in any campus of VIT
        </h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
        `;
    }
    else {
        var quizEndHTML =
            `
        <h1>Quiz Completed</h1>
        <h2 id='score'> Your scored: ${quiz.score} of ${Total}
        <br><br>
        You are eligible to take admission in ${campus} campus of VIT
        </h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
        `;
    }
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question("There are _____ number of muscles in human.", ["638", "637", "639", "640"], "639"),
    new Question(
        "What is the life span of RBC?", ["130 days", "110 days", "100 days", "120 days"], "120 days"
    ),
    new Question(
        "What is the life span of WBC?", ["2-15 days", "3-15 days", "4-15 days", "5-20 days"], "2-15 days"
    ),
    new Question(
        "Which is the vertebrate that has a two-chambered heart?", ["Fish", "Snake", "Blue Whale", "Crocodile"], "Fish"
    ),
    new Question(
        "Which animal never drinks water in its entire life?", ["Kangaroo", "Hippopotamus", "Rat", "Kangaroo rat"], "Kangaroo rat"
    ),
    new Question(
        "What is the physical phase of life called?", ["Protoplasm", "Cytoplasm", "Organelles", "None of the above"], "Protoplasm"
    ),
    new Question(
        "The largest cell is ___________", ["Nerve Cell", "Ovum", "The egg of an Ostrich", "None of the above"], "The egg of an Ostrich"
    ),
    new Question(
        "What is the name of the cells in the body that engulf foreign particles like bacteria?", ["Globulin", "Phagocytes", "Fibrinogen", "Albumin"], "Phagocytes"
    ),
    new Question(
        "Which among the following is the correct set of chemical formulae of Chile Saltpetre, Saltpetre and Quick Lime?", ["KNO3, NaNO3, CaO", "NaNO3, KNO3, Ca(OH)2", "Na(OH)2, KOH, CaO", "NaNO3, KNO3, CaO"], "NaNO3, KNO3, CaO"
    )
    ,
    new Question(
        "Which among the following is essential for both activation and action of thrombin?", ["Na+", "Cl-", "Ca2+", "Mg2+"], "Ca2+"
    ),
    new Question(
        "Omega Mission Hills World Cup is related to which game?", ["Tennis", "Golf", "Hockey", "Polo"], "Golf"
    ),
    new Question(
        "Where were the first Summer Olympics held?", ["Singapore", "South Korea", "Germany", "Greece"], "Greece"
    ),
    new Question(
        "When was the Olympic flag created?", ["1912", "1914", "1915", "1913"], "1913"
    ),
    new Question(
        "Where is the Tagore Centre for the Study of Culture and Civilization?", ["Shimla", "Kolkata", "Chennai", "Dehrdun"], "Shimla"
    ),
    new Question(
        "Mattur Village, whose inhabitants are known to speak Sanskrit Language is located in which among the following states of India?", ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu"], "Karnataka"
    ),
    new Question(
        "The Logo represents which of the following Brand?", ["Nike", "Adidas", "Reebok", "Puma"], "Adidas"
    ),
    new Question(
        "Which bank is having above Logo", ["Canara Bank", "UCO Bank", "Indian Bank", "Axis Bank"], "UCO Bank"
    ),
    new Question(
        "Which Mobile Company is having above logo?", ["Motorola", "Micromax", "Blackberry", "Mi"], "Motorola"
    ),
    new Question(
        "Which Car is related to logo?", ["Audi", "Jaguar", "FIAT", "Bugatti"], "Jaguar"
    ),
    new Question(
        "The Logo represents which of the following Car Company?", ["Volkswagen", "Ford", "Hyundai", "Nissan"], "Volkswagen"
    ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 15;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

function startCountdown(time) {
    let counting = document.getElementById("count-down");
    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);

            showScores();
        }
        else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}
startCountdown(15)

