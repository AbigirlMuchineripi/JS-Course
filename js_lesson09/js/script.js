// User Input

// Alert Notification: Instructs the browser to display a
//  dialog with an optional message, and to wait until the
//  user dismisses the dialog.
alert("Hello World!");

// Confirm Notification: Instructs the browser to
//  display a dialog with an optional message, and to 
// wait until the user either confirms or cancels the dialog.
// confirm("Ok === True\nCancel=== False");
let myBoolean = confirm("Ok === True\nCancel=== False");
console.log(myBoolean);

// Prompt Notification: Instructs the browser to display a 
// dialog with an optional message prompting the user to 
// input some text, and to wait until the user either 
// submits the text or cancels the dialog.
let yourPet = prompt("Please enter your pet's name.");
// console.log(yourPet ?? "You didn't enter your pet's name.");
// If (??) no name (nothing entered, null value). It is called the Nullish Coalescing Operator.

// How to check for an empty string 👇
if (yourPet) {
    console.log(yourPet);
} else {
    console.log("You didn't enter your pet's name.");
}

// How to eliminate extra white space from user input 👇
let myCountry = prompt("Please enter your country's name.");
if (myCountry) {
    console.log(myCountry.length); // Length of entered string
    console.log(myCountry.trim().length); // Length of trimmed string
    console.log(myCountry.trim()); // Final Trimmed String Value
} else {
    console.log("You didn't enter your country's name.");
}
