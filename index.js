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
    incorrectAnswers: 0,
    totalQuestions: 5
}


let question = console.log(QUIZ.questions[0].q)
let listOfAnswers = console.log(QUIZ.questions[0].answers)
let correctAnswer1 = console.log(QUIZ.questions[0].correctAnswer)
let correctAnswer2 = console.log(QUIZ.questions[1].correctAnswer)
let currentCorrectAnswers = console.log(QUIZ.correctAnswers)
