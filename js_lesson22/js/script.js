// Modules

// By using type="module", strict-mode is automatically applied in your JavaScript
// No need to use defer

// Import the guitars.js module
import playGuitar from "./guitars.js"; 
import { shredding as shred, plucking } from "./guitars.js";

console.log(playGuitar());
console.log(shred());
console.log(plucking());

// Rename imports by using "as"

// Import the full namespace
import * as Guitars from "./guitars.js";

console.log(playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// Import the User example
import User from "./user.js";
const me = new User("email@email.com", "Abigirl", "Chicken & Mushroom Pasta");
console.log(me);
console.log(me.greeting());
console.log(me.favouriteFood());
