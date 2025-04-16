// Conditionals : Ternary Operator

// A Ternary Operator is shorthand 
// for an "if else" statement

// Syntax

// condition ? ifTrue : ifFalse;
// ? = if
// : = else

let order = "Sausage Pizza";
let response = order ? "Yes, we have sausage pizza." : "Sorry, no sausage pizza today.";
console.log(response);

let isCustomerBanned = true;
let orderAccess = isCustomerBanned ? "Sorry, no sausage pizza for you!" 
: order 
? `Yes, we have ${order} today.` 
: "Sorry, no sausage pizza today.";
console.log(orderAccess);

// For long ternary operators 
// each part should be put on
// a new line for clean formatting

// Grading Scale Example
let testScore = 50;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}.`)

// Rock, Paper, Scissors Example
let Abby = "paper";
let Dave = "scissors";
let result = Abby === Dave ? "Tie Game!"
: Abby === "rock" && Dave === "paper" ? "Dave Wins!"
: Abby === "paper" && Dave === "scissors" ? "Dave Wins!"
: Abby === "scissors" && Dave === "rock" ? "Dave Wins!"
: "Abby Wins!";
console.log(result);
