// script.js

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Brasília", "São Paulo", "Rio de Janeiro", "Belo Horizonte"],
        answer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Alvares de Azevedo", "Gonçalves Dias"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o nome do autor de 'Iracema'?",
        options: ["José de Alencar", "Castro Alves", "Gonçalves Dias", "Álvares de Azevedo"],
        answer: "José de Alencar"
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
