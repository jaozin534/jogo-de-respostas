// script.js

const questions = [
    // 1ª Geração Romântica
    {
        question: "Qual autor é considerado o representante da 1ª geração romântica no Brasil?",
        options: ["José de Alencar", "Gonçalves Dias", "Álvares de Azevedo", "Castro Alves"],
        answer: "Gonçalves Dias"
    },
    {
        question: "Qual obra de Álvares de Azevedo retrata o sofrimento e o melancolismo da juventude?",
        options: ["Senhora", "O Primo Basílio", "Noite na Taverna", "Iracema"],
        answer: "Noite na Taverna"
    },
    {
        question: "A poesia de Gonçalves Dias é marcada por que tipo de sentimento?",
        options: ["Romantismo social", "Nacionalismo", "Pessimismo e melancolia", "Idealismo e escapismo"],
        answer: "Nacionalismo"
    },
    {
        question: "Qual foi a principal característica da 1ª geração romântica brasileira?",
        options: ["Nacionalismo e Indianismo", "Idealização da natureza e do sofrimento", "Simbolismo", "Realismo"],
        answer: "Nacionalismo e Indianismo"
    },

    // 2ª Geração Romântica
    {
        question: "Quem é o principal autor da 2ª geração romântica no Brasil?",
        options: ["José de Alencar", "Gonçalves Dias", "Álvares de Azevedo", "Castro Alves"],
        answer: "José de Alencar"
    },
    {
        question: "Qual é o nome da obra de José de Alencar que retrata a história de amor entre uma índia e um português?",
        options: ["O Guarani", "Iracema", "Senhora", "Lucíola"],
        answer: "Iracema"
    },
    {
        question: "Na 2ª geração romântica, qual tema é predominante nas obras de Castro Alves?",
        options: ["O amor e a paixão", "A liberdade e a abolição da escravatura", "O nacionalismo", "A natureza brasileira"],
        answer: "A liberdade e a abolição da escravatura"
    },
    {
        question: "Qual é o principal tema das obras de José de Alencar na 2ª geração?",
        options: ["Indigenismo e nacionalismo", "Romance urbano", "Luta contra a escravidão", "Religião e morte"],
        answer: "Indigenismo e nacionalismo"
    },

    // 3ª Geração Romântica
    {
        question: "Quem é o principal autor da 3ª geração romântica brasileira?",
        options: ["Cruz e Souza", "Gonçalves Dias", "José de Alencar", "Álvares de Azevedo"],
        answer: "Cruz e Souza"
    },
    {
        question: "Qual característica é marcante na poesia de Cruz e Souza?",
        options: ["Pessimismo e simbolismo", "Nacionalismo e idealismo", "Realismo e pragmatismo", "Sentimentalismo exagerado"],
        answer: "Pessimismo e simbolismo"
    },
    {
        question: "A poesia simbolista de Cruz e Souza é marcada pela busca de quê?",
        options: ["A estética do belo e do irracional", "Realidade social e urbana", "Idealização da natureza", "Racionalismo e objetividade"],
        answer: "A estética do belo e do irracional"
    },
    {
        question: "Qual obra de Cruz e Souza é uma das principais da 3ª geração romântica?",
        options: ["A Moreninha", "O Primo Basílio", "O Canto do Cisne", "Iracema"],
        answer: "O Canto do Cisne"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.onclick = () => checkAnswer(button.textContent);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-question-btn").style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const result = document.getElementById("result");
    if (selectedAnswer === correctAnswer) {
        result.textContent = "Resposta correta!";
        result.style.color = "green";
    } else {
        result.textContent = "Resposta errada! Tente novamente.";
        result.style.color = "red";
    }
    document.getElementById("next-question-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "<h2>Parabéns! Você completou o jogo!</h2>";
        document.getElementById("answers").style.display = "none";
        document.getElementById("next-question-btn").style.display = "none";
    }
}

loadQuestion();
