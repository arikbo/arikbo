let exercises = [];

function generateExercises() {
    const container = document.getElementById("exercises");
    container.innerHTML = "";
    exercises = [];

    for (let i = 0; i < 3; i++) {
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 20) - 10;
        let x = Math.floor(Math.random() * 10) - 5;
        let c = a * x + b;

        let equation = `${a}x + ${b} = ${c}`;
        let solution = x;

        exercises.push({ equation, solution });

        container.innerHTML += `
            <div class="exercise">
                <p>${equation}</p>
                <input type="number" class="step1" placeholder="הכנסת פעולה">
                <span class="action">/</span>
                <input type="number" class="step1" placeholder="שני האגפים">
                <br>
                <input type="number" class="step2" placeholder="שלב הבא">
                <span class="action">=</span>
                <input type="number" class="step2" placeholder="תוצאה">
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

window.onload = generateExercises;
