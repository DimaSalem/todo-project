'use strect'

var userName = prompt("Please enter your name:");
var userGender = prompt("Please enter your gender (male or female):");
var userAge = prompt("Please enter your age:");

if (userAge <= 0) {
    alert("Invalid age. Age must be greater than zero.");
}

var skipWelcome = confirm("Do you want to skip the welcoming message?");

if (!skipWelcome) {
    if (userGender == "male") {
        alert("Welcome, " + "Mr" + " " + userName);
    } else if (userGender == "female") {
        alert("Welcome, " + "Ms" + " " + userName);
    }
    else {
        alert("Welcome, " + userName);
    }
}

