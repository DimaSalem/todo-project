'use strict'


function generateQuestion(question) {
    let answer = prompt(question);
    return answer;
}

function getValidInput(answer) {
    return (answer === "" ? "invalid" : answer);
}

function showWelcomeMessage(userName, userGender) {
    if (userGender == "male") {
        alert("Welcome, " + "Mr" + " " + userName);
    } else if (userGender == "female") {
        alert("Welcome, " + "Ms" + " " + userName);
    }
    else {
        alert("Welcome, " + userName);
    }
}

function printAnswers(answers) {
    console.log("Answers: ")
    answers.forEach((answer, index) => {
        console.log(`Question ${index + 1}: ${answer}`);
    });
}


function askQuestions() {
    let answers = [];

    let userName = getValidInput(prompt("Please enter your name:"));
    let userGender = getValidInput(prompt("Please enter your gender (male or female):"));
    var userAge = getValidInput(prompt("Please enter your age:"));

    answers.push(userName, userGender, userAge);

    if (userAge <= 0) {
        alert("Invalid age. Age must be greater than zero.");
    }

    let question1 = getValidInput(generateQuestion("Do you love music? (Yes/No)"));
    let question2 = getValidInput(generateQuestion("Do you like pizza? (Yes/No)"));
    let question3 = getValidInput(generateQuestion("Have you traveled abroad? (Yes/No)"));

    answers.push(question1, question2, question3);

    var skipWelcome = confirm("Do you want to skip the welcoming message?");

    if (!skipWelcome) {
        showWelcomeMessage(userName, userGender);
    }

    printAnswers(answers);

}

askQuestions();



