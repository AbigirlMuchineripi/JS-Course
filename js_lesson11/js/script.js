// Loops

// Increment by 1 from 1-10.
let myNumber = 0;
while (myNumber < 10) {
  myNumber++;
  // myNumber += 2; Increments by 2
  console.log(myNumber);
}

// DO NOT create an endless loop

// Do While Loop
do {
  console.log(myNumber);
} while (myNumber < 10);

// For Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let myName = "Abigirl";
for (let i = 0; i <= myName.length; i++) {
  console.log(myName.charAt(i));
}

let counter = 0;
let myLetters;
while (counter <= 6) {
  myLetters = myName[counter];
  console.log(myLetters);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetters === "g") break;
  counter++;
}
console.log(counter);
