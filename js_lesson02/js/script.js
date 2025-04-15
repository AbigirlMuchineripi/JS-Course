// String Methods & Properties

// The String object ("") is used to represent and manipulate a sequence of characters.
const myVariable = "JavaScript";
console.log(myVariable);
// Expected Output: JavaScript

// The length property returns the number of code units in the string.
console.log(myVariable.length);
// Expected Output: 10

// The charAt() method returns a character from a string.
console.log(myVariable.charAt(0));
// Expected Output: J

// The indexOf() method returns the position of the first occurrence of specified character(s) in a string.
console.log(myVariable.indexOf("ava"));
// Expected Output: 1

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(myVariable.lastIndexOf("ipt"));
// Expected Output: 7

// The slice() method extracts a part of a string.
console.log(myVariable.slice(5));
// Expected Output: cript

// The toUpperCase() method converts a string to uppercase letters.
console.log(myVariable.toUpperCase());
// Expected Output: JAVASCRIPT

// TThe toLowerCase() method converts a string to lowercase letters.
console.log(myVariable.toLowerCase());
// Expected Output: javascript

// The includes() method returns true if a string includes a specified string.
console.log(myVariable.includes("Scr"));
// Expected Output: true

// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
console.log(myVariable.split("a"));
// Expected Output: ['J', 'v', 'Script']
/*0: "J"
1: "v"
2:"Script"
length: 3
*/
// It was divided into 3 at "a" where it was targeted.
