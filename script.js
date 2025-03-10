let exercises = [];

function generateExercises() {
    const container = document.getElementById("exercises");
    container.innerHTML = "";
    exercises = [];

    for (let i = 0; i < 3; i++) {
        let a = Math.floor(Math.random() * 10) + 1; // מקדם x
        let b = Math.floor(Math.random() * 20) - 10; // מספר חופשי
        let x = Math.floor(Math.random() * 10) - 5; // פתרון אקראי
        let c = a * x + b; // צד ימין של המשוואה

        let bFormatted = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;

        let equation = `${a}x ${bFormatted} = ${c}`;
        let solution = x;

        exercises.push({ equation, solution });

        container.innerHTML += `
            <div class="exercise">
                <div class="input-row">
                    <input type="text" class="operation-box" placeholder="/">
                    <p class="equation">${equation}</p>
                </div>
                <div class="input-row">
                    <input type="text" class="operation-box" placeholder="/">
                    <input type="text" class="step" placeholder="שלב 1">
                </div>
                <div class="input-row">
                    <input type="text" class="operation-box" placeholder="/">
                    <input type="text" class="step" placeholder="שלב 2">
                </div>
                <br>
                <input type="number" class="answer" placeholder="x = ?">
                <span class="result"></span>
            </div>
        `;
    }
}

function checkAnswers() {
    let answers = document.getElementsByClassName("answer");
    let results = document.getElementsByClassName("result");

    for (let i = 0; i < exercises.length; i++) {
        let userAnswer = parseInt(answers[i].value);
        if (userAnswer === exercises[i].solution) {
            results[i].innerHTML = "✅";
            results[i].style.color = "green";
        } else {
            results[i].innerHTML = "❌";
            results[i].style.color = "red";
        }
    }
}

function showAnswers() {
    let answers = document.getElementsByClassName("answer");
    let results = document.getElementsByClassName("result");

    for (let i = 0; i < exercises.length; i++) {
        answers[i].value = exercises[i].solution;
        results[i].innerHTML = "✅";
        results[i].style.color = "blue";
    }
}

document.addEventListener("DOMContentLoaded", generateExercises);
