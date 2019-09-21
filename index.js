const QUIZ = {
        questions: [
        {   questionNumber: 1,
            q: 'This is the first question, what is the answer?', 
            answers: ['This is the correct answer', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer',
        },
        {   questionNumber: 2,
            q: 'This is the second question, what is the answer?', 
            answers: ['This is the correct answer for the second question', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer for the second question'
        },
    ],
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    respondedList: []
}

function getQuestion(questionNumber) {
    //Get the question object
    let question = QUIZ.questions.find(q => q.questionNumber === questionNumber);
    return question;
}

function getQ(questionNumber) {
    //Get the question's prompt
    let prompt = getQuestion(questionNumber).q;
    return prompt;
}

function getCorrectAnswer(questionNumber) {
    //Get question's correct answer string
    let correctAnswer = getQuestion(questionNumber).correctAnswer;
    return correctAnswer;
}

function getQuestionChoices(questionNumber) {
    //Get a list of choices for a question
    let choices = [...getQuestion(questionNumber).answers];
    return choices;
}

// Start page 
function render(){
    if (QUIZ.currentQuestion === 0) {
        renderIntro();
        return;
    }
    if (QUIZ.currentQuestion > QUIZ.questions.length) {
        renderFinalScore();
        return;
    }
    if (QUIZ.respondedList.length > 0){
        renderScores();
    }
    renderQuestion(QUIZ.currentQuestion);
}

function renderIntro(){
    const introHtml = generateIntroHtml();
    $('.quiz-app').html(introHtml);
    const introButtonClick = function(event){
        event.preventDefault();
        QUIZ.currentQuestion += 1;
        render();
    }
    $('.quiz-app').on(click, '.js-button', introButtonClick);
    // should set page to start start quiz, attach event listener to start button. 
}

function renderQuestion(questionNum){
//access quiz data model and render the question.
    const questionHtml = generateQuestionHtml(questionNum);
    $('.quiz-app').html(questionHtml);
    const submitButtonClick = function(event){
        event.preventDefault();
        //get form data as answer
        //check if submission is valid
        renderSubmit(answer);
    }
    $('.quiz-form').submit(submitButtonClick);
}

function renderSubmit(answer){
    //check if answer matches correct answer
    // if correct, generate and render Correct HTML
    // if incorrect generate and render Incorrect HTML
    //update scores, append to response list
    $('.quiz-app').html(html) 
    const nextButtonClick = function(event){
        QUIZ.currentQuestion += 1
        //check if submission is valid
        render();
    }
    $('.quiz-app').on('click', '.js-button', nextButtonClick);
}

function renderScores(){
    const scoresHtml = generateScoresHtml();
    $('.scores').html(scoresHtml);
}

function renderFinalScore(){
    
}
function handleIntroStart(){}
// should attach event listener. 




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

function startApp(){
    QUIZ.currentQuestion = 0;
    QUIZ.correctAnswers = 0;
    QUIZ.incorrectAnswers = 0;
    QUIZ.respondedList = [];
    render();
}

$(startApp);





