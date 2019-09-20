const QUIZ = {
        questions: [
        {   questionNumber: 1,
            q: 'This is the first question, what is the answer?', 
            answers: ['This is the correct answer', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer'
        },
        {   questionNumber: 2,
            q: 'This is the second question, what is the answer?', 
            answers: ['This is the correct answer for the second question', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer for the second question'
        },
    ],
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
}


let question = console.log(QUIZ.questions[0].q)
let numberOfQuestion = console.log(QUIZ.questions.length)
let listOfAnswers = console.log(QUIZ.questions[0].answers)
let correctAnswer1 = console.log(QUIZ.questions[0].correctAnswer)
let correctAnswer2 = console.log(QUIZ.questions[1].correctAnswer)
let currentCorrectAnswers = console.log(QUIZ.correctAnswers)


// Start page 
function renderingIntro(){
    function generateInroHtml(){};
    // should set page to start start quiz, attach event listener to start button. 
}

function handleIntroStart(){}
// should attach event listener. 


function renderQuestion(questionnumber){
//access quiz data model and render the question. 
}

function  handleQuestionSubmit (){}
// attach event lisenter to submit button 

//** logic for when no answer is chosen, submit button renders an alert that answer 
// is required. 

function compareUserAnswer(questionnumber, useranswer) {}
//compare user answer to correct answer and add to score to reflect change.  
//Also, set question number bar to what the question it should on. 

function renderCorrect(questionnumber){
// render the html that displays correct, move on to next question. 
}

function renderWrong(questionnumber){
    //should render wrong, and display correct answer, write function to access correct answer. 
}

function RenderResultsPage(){
// display total score, display start over, display completed quiz. 
}





