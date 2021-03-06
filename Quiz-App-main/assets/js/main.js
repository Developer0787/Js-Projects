const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is he President of Republic of Uzbekistan?',
        a: 'Donald Trump',
        b: 'Vladimir Putin',
        c: 'Barak Obama',
        d: 'Shavkat Mirziyayev',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Cascading Style Sheet',
        b: 'Hypertext Markup Language',
        c: 'Jason Object Notation',
        d: 'Single Page Application',
        correct: 'b'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },
];
let quiz = document.getElementById('quiz');
let questionEl = document.getElementById('question');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d


}

function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly
             at ${score}/${quizData.length} questions</h2>
             <button onclick="location.reload()">Reload</button>`
        }

    }

})