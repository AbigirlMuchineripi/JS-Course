// String Methods & Properties

// The String object ("") is used to represent and manipulate a sequence of characters.
const myVariable = "JavaScript";
console.log(myVariable);
// Expected Output: JavaScript,
const myCity = "Mutare";
console.log(myCity);
// Expected Output: Mutare
const myFavoriteFood = "Pizza";
console.log(myFavoriteFood);
// Expected Output: Pizza


// The length property returns the number of code units in the string.
console.log(myVariable.length);
// Expected Output: 10
console.log(myCity.length);
// Expected Output: 6

// The charAt() method returns a character from a string.
console.log(myVariable.charAt(0));
// Expected Output: J
console.log(myCity.charAt(1));
// Expected Output: u
console.log(myCity[1]);//indexing
// Expected Output: u


// The indexOf() method returns the position of the first occurrence of specified character(s) in a string.
console.log(myVariable.indexOf("ava"));
// Expected Output: 1
console.log(myCity.indexOf("e"));//Mutare
// Expected Output: 5

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(myVariable.lastIndexOf("ipt"));
// Expected Output: 7
const eggShellColor = "white";
console.log(eggShellColor.lastIndexOf("i"));
// Expected Output: 2

// The slice() method extracts a part of a string.
console.log(myVariable.slice(5));
// Expected Output: cript
const currency = "USD";
console.log(currency.slice(1));
// Expected Output: SD

// The toUpperCase() method converts a string to uppercase letters.
console.log(myVariable.toUpperCase());
// Expected Output: JAVASCRIPT
const country = "zimbabwe";
console.log(country.toUpperCase());
// Expected Output: ZIMBABWE

// TThe toLowerCase() method converts a string to lowercase letters.
console.log(myVariable.toLowerCase());
// Expected Output: javascript
const editor = "VSCODE";
console.log(editor.toLowerCase());
// Expected Output: vscode

// The includes() method returns true if a string includes a specified string.
console.log(myVariable.includes("Scr"));
// Expected Output: true
const work = "developer";
console.log(work.includes("dev"));
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
console.log(currency.split(""));
// Expected Output: ['U', 'S', 'D']
console.log(currency.split("S"));
// Expected Output: ['U', 'D']
