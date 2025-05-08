// Classes

// Example

class Juice {
  constructor(juiceType) {
    this.type = juiceType;
    this.size = "small";
    this.flavour = "orange";
  }
  
  mix() {
    console.log(`Mixing a ${this.size} ${this.type} ${this.flavour} juice. `);
    
  }
}

// Pass a parameter into a class
const myJuice = new Juice("pulpy");
myJuice.mix();



// Factory Function
// Another way to create an object in JavaScript
function bookFactory(bookSize) {
  const type = "story";
  const size = bookSize;
  return {
    publishTwo: () => console.log(`Publishing a ${size} ${type} book.`)
  };
}

const mypublishTwo = bookFactory("medium");
mypublishTwo.publishTwo();

// Sources 👇
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://www.w3schools.com/js/js_classes.asp