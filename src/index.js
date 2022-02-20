// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.celebrateBirthday = function() {
//     this.age++;
// }

// const john = new Person('John', 32);

/**
 * Question - text(string), choices(array of strings), answer(string)
 */

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice
}

/**
 * Quiz
 * Data members
 * - score - number of right answers (initialize to 0)
 * - questions - an array of Question objects
 * - questionIndex - the index of the currently displayed question in the quiz
 * 
 * Methods
 * checkOptionWithAnswer(answer) - checks the current question's answer with the answer passed as argument, and
 *  1. If correct, it increases the score
 *  2. In any case, it increments the question index
 * 
 * NOTE: You can test out if you are able to creat a Quiz object, and call the method on it.
 */


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if (this.questions[this.questionIndex].isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex
}

function showScore() {
    document.querySelector('#quiz').innerHTML = `<h1>Result</h1>
        <div id="score">You scored ${quiz.score} / ${quiz.questions.length}</div>`;
}

function loadQuestion() {

    if (quiz.isEnded()) {
        showScore();
        return;
    }

    var currentQuestion = quiz.questions[quiz.questionIndex];
    document.querySelector('#question').textContent = currentQuestion.text;

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
        handleOptionButtonClick('btn' + i, currentQuestion.choices[i]);
    }
    showProgress();
}

function handleOptionButtonClick(btnId, choice) {
    var button = document.querySelector('#' + btnId);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestion();
    };
}

function showProgress() {
    document.querySelector('#progress').textContent = 'Question ' + (quiz.questionIndex + 1) + ' of ' + quiz.questions.length;
}


var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

// var quiz = new Quiz(questions);
// quiz.checkOptionWithAnswer("Functions");
// quiz.checkOptionWithAnswer("CSS");
// quiz.checkOptionWithAnswer("Django");
// quiz.checkOptionWithAnswer("PHP");
// quiz.checkOptionWithAnswer("Programming Language");

// console.log(quiz.score);

var quiz = new Quiz(questions);
loadQuestion();