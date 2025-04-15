// Conditionals: If Statements

// Syntax

// if (condition) {
//     if true, run code
// } else {
//     run different code
// }

// Soup Example

let customerIsBanned = true;//change here to false 
let chicken = "grilled chicken";
let chips = true;
let reply;

if(customerIsBanned) {
    reply = `No chicken for you!`;
} else if (chicken && chips) {
    reply = `Here's your order of ${chicken} & chips.`;
} else if (chicken) {
    reply = `Here's your order of ${chicken}.`;
} else {
    reply = `Sorry, we're out of ${chicken}.`;
}

console.log(reply);

// Test Score Example

let testScore = 100;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else { 
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}
console.log(grade);


// Decision Tree


if (playerOne === computer) {
    // tie game
} else if (playerOne === "rock") {
    if(computer === "paper"){
        // computer wins
    } else {
        // playerOne wins
    }
} else if (playerOne === "paper") {
    if(computer === "scissors"){
        // computer wins
    } else {
        // playerOne wins
    }
} else {
    if(computer === "rock"){
        // computer wins
    } else {
        // playerOne wins
    }
} 
