// Number Methods

//Numbers
// An integer is a whole number.
const myNumber = 93;
const myAnotherNumber = 42;


// A number with a decimal point is a float which references the "floating point"
const myFloat = 93.1089;
const myAnotherFloat = 42.42;


const myString = "93";
const myAnotherString = "42";

// 0 is always equal to "false" in JavaScript

// Number Methods

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));
// Expected output: true
// Expected output: false
// Expected output: false
console.log(Number.isInteger(myAnotherNumber));
// Expected output: true
console.log(Number.isInteger(myAnotherFloat));
// Expected output: false
console.log(Number.isInteger(myAnotherString));
// Expected output: false



// The Number.parseFloat() method parses an argument and returns a floating point number.
//  If a number cannot be parsed from the argument, it returns NaN. 
console.log(Number.parseFloat(myFloat));
// Expected output: 93.1089
console.log(Number.parseFloat(myAnotherFloat));
// Expected output: 42.42
console.log(Number.parseFloat(myAnotherNumber));
// Expected output: 42


//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myFloat).toFixed(1));
// Expected output: 93.1
console.log(Number.parseFloat(myAnotherFloat).toFixed(1));


// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));
// Expected output: 93
console.log(Number.parseInt(myAnotherFloat));
// Expected output: 42

// The toString() method returns a string representing the number.
console.log(myFloat.toString());
// Expected output: 93.1089 in white color because it is string
console.log(myAnotherFloat.toString());
// Expected output: 42.42 

// Chaining = Using several methods chained together
console.log(Number.parseFloat("93Abby").toFixed(2).toString());
// Expected output: 93.00
console.log(Number.parseFloat("42Abby").toFixed(2).toString());
// Expected output: 42.00

// NaN is an acronym for Not a Number
console.log(Number("Abigirl"));
// Expected output: NaN
console.log(Number("Zimbabwe"));
// Expected output: NaN

// The Number.isNan() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("James"));
console.log(Number.isNaN("93"));
console.log(Number.isNaN(93));
console.log(typeof(93));
// Expected output: false
// Expected output: false because it is a string
//Expected output: false
// Expected output: number
console.log(Number.isNaN(NaN));
// Expected output: true
console.log(Number.isNaN(28/7));//false

// The global isNan() function determines whether a value is NaN or not.
console.log(isNaN("Abigirl"));
console.log(isNaN("Abigirl93"));
// Expected output: true
// Expected output: true
