// First Code Challenge


// Write code that will return a random letter from your name

// Character Selector in the string
console.log("Abigirl".charAt());

// Random Number Generator from 1-7 (7 characters in the name "Abigirl")
console.log(Math.floor(Math.random() * 7 + 1));

// Now combine both small functions into one solution

// String characters positions start at 0. Since my name has 7 characters the range must be 0-6.

// Generate a random number from 0-6.
console.log("Abigirl".charAt(Math.floor(Math.random() * 7)));



// Now create a sloution that works for ALL names.
const anyName = "Zimbabwe";

// The name is a variable. "anyName.length" takes into account how long each variable is.
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
