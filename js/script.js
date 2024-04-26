let questions = [
    {
        question: "В честь какой войны мы отмечаем праздник День Победы?",
        correctAnswer: "Великая Отечественная война"
    },
    {
        question: "В каком году началась великая отечественная война?",
        correctAnswer: "1941"
    },
    {
        question: "Сколько лет она длилась?",
        correctAnswer: "5 лет"
    },
    {
        question: "Дата окончания ВОВ?",
        correctAnswer: "09.05.1945"
    },
    {
        question: "Какой мировой войне соответствовала ВОВ?",
        correctAnswer: "Вторая"
    },
    {
        question: "Кто развязал Вторую мировую войну?",
        correctAnswer: "Гитлер"
    },
    {
        question: "С кем мы воевали?",
        correctAnswer: "С немцами"
    },
    {
        question: "На какой площади идёт главный парад Победы (в скобках укажите город)?",
        correctAnswer: "Красная площадь (Москва)"
    },
]
let currentQuestion = 0
let correctAnswer = 0

function displayQuestion() {
    let question = document.getElementById('question')
    question.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    let answer = document.getElementById('answer')
    let submit = document.getElementById('sendButton')
    submit.addEventListener('click', (e) => {
        e.preventDefault
        let target = e.target
        nextQuestion(answer)
    }, { once: true })
}
function nextQuestion(answer) {
    if (answer.value === questions[currentQuestion].correctAnswer) {
        correctAnswer++
        console.log('Верный ответ')
    }
    if (answer.value != questions[currentQuestion].correctAnswer) {
        console.log('Неверный ответ')
    }
    currentQuestion++
    if (currentQuestion < questions.length) {
        displayQuestion()
    }
    else {
        displayResult()
    }
}
displayQuestion()