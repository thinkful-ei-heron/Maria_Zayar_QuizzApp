const QUIZ = {
        description: "This is a sample description of this particular quiz.",
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
        {   questionNumber: 3,
            q: 'This is the question, what is the answer?', 
            answers: ['This is the correct answer for the second question', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer for the second question'
        },
        {   questionNumber: 4,
            q: 'This is the question, what is the answer?', 
            answers: ['This is the correct answer for the second question', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer for the second question'
        },
        {   questionNumber: 5,
            q: 'jaweifaowjefoijawoefjiaweofj?', 
            answers: ['This is the correct answer for the second question', 'This is a choice', 'This is another choice', 'This is another incorrect answer'],
            correctAnswer: 'This is the correct answer for the second question'
        },
    ],
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    respondedList: []
}

//QUIZ object helper functions
function getQuestion(questionNumber=QUIZ.currentQuestion) {
    //Get the question object
    let question = QUIZ.questions.find(q => q.questionNumber === questionNumber);
    return question;
}

function getQ(questionNumber=QUIZ.currentQuestion) {
    //Get the question's prompt
    let prompt = getQuestion(questionNumber).q;
    return prompt;
}

function getCorrectAnswer(questionNumber=QUIZ.currentQuestion) {
    //Get question's correct answer string
    let correctAnswer = getQuestion(questionNumber).correctAnswer;
    return correctAnswer;
}

function getQuestionChoices(questionNumber=QUIZ.currentQuestion) {
    //Get a list of choices for a question
    let choices = [...getQuestion(questionNumber).answers];
    return choices;
}

// Render functions handle DOM rendering, and events based on quiz object state.
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
    let introHtml = generateIntroHtml();
    $('.js-description').text(QUIZ.description)
    $('.quiz-app').html(introHtml);

    $('.quiz-app').on('click', '.js-start-button', function(event){
        event.preventDefault();
        QUIZ.currentQuestion += 1;
        render();
    });
    // should set page to start start quiz, attach event listener to start button. 
}

function renderQuestion(questionNum){
//access quiz data model and render the question.
    let questionHtml = generateQuestionHtml(questionNum);
    $('.quiz-app').html(questionHtml);

    $('.quiz-form').submit(function(event){
        event.preventDefault();
        let $answer = $( "input[type=radio][name=answer]:checked" )
        if ($answer.length > 0) {
            let answer = $answer.val();
            renderSubmit(answer);
        } else {
            ($('em').length === 0)? $(".quiz-form").append("<em>Select an answer!</em>"): null
            //alert('Must select an answer');
        }
    });
    $('.quiz-app').on('click', '.js-input', (event) => {
       $('em').hide(); 
    });
}

function renderSubmit(answer){
    let html;
    if (answer === getCorrectAnswer(QUIZ.currentQuestion)) {
        console.log('correct');
        QUIZ.respondedList.push([QUIZ.currentQuestion, 'Correct!']);
        QUIZ.correctAnswers += 1
        html = generateCorrectHtml();

    } else {
        console.log('wrong');
        QUIZ.respondedList.push([QUIZ.currentQuestion, 'Wrong!', answer]);
        QUIZ.incorrectAnswers += 1
        html = generateIncorrectHtml(answer);

    }
    renderScores();
    $('.quiz-app').html(html) 
    $('.quiz-app').on('click', '.js-next-button', function(event){
        QUIZ.currentQuestion += 1
        render();
    });
}

function renderScores(){
    let scoresHtml = generateScoresHtml();
    $('.scores').html(scoresHtml);
}

function renderFinalScore(){
    
}


function generateIntroHtml(){
    return `<h1>Welcome to the quiz. Press Start to begin.</h1>
            <button class="js-start-button">Start</button>`
}

function generateQuestionHtml(currentQuestion=QUIZ.currentQuestion){
    let items = getQuestionChoices().map((choice, index) => {
        return `<li class="choice">
                    <input class="js-input" id="${index+1}" type="radio" name="answer" value="${choice}"></input>
                    <label for="${index+1}">${choice}</label>
                </li>`
    });
    items = items.join('');
    
    let html =
        `<h3 class="question-number">Question ${currentQuestion}</h3>
        <form class="quiz-form">
        <fieldset>
            <h4 class="question-prompt">${getQ()}</h4>
            <ul>
                ${items}
            </ul>
        </fieldset>
        <button class="js-submit-button" type="submit">Submit</button>`
        
    return html;
    
}

function generateCorrectHtml(correctAnswer=getCorrectAnswer(QUIZ.currentQuestion)){
    return `<p><quote>${correctAnswer}</quote> is right!!</p>
            <button class="js-next-button">Next</button>`
}

function generateIncorrectHtml(wrongAnswer){
    return `<p><quote>${wrongAnswer}</quote> is wrong!</p>
            <p>Correct answer is <quote>${getCorrectAnswer()}</quote></p>
            <button class="js-next-button">Next</button>`
}

function generateScoresHtml(numCorrect=QUIZ.correctAnswers, numIncorrect=QUIZ.incorrectAnswers, responses=QUIZ.respondedList){
    return `<h3>Scores</h3>
            <b class="js-score-correct">${numCorrect}</b>
            <b class="js-score-incorrect">${numIncorrect}</b>`
}

function generateFinalScoreHtml(numCorrect=QUIZ.correctAnswers, numIncorrect=QUIZ.incorrectAnswers, responses=QUIZ.respondedList){
    //
}



function startApp(){
    QUIZ.currentQuestion = 0;
    QUIZ.correctAnswers = 0;
    QUIZ.incorrectAnswers = 0;
    QUIZ.respondedList = [];
    render();
}

$(startApp);





