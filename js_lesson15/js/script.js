// Objects

// Key-Value pairs in curly braces
const myObj = {
   name: "Aby"
  };
console.log(myObj); //{name: 'Aby'}
console.log(myObj.name);//Aby
console.log(typeof myObj);//object

const anotherObj = {
  alive : true,
  answer: 20,
  hobbies: ["Music"," Designing","Coding"],
  meal: {
    morning: "Breakfast",
    afternoon: "Lunch"
  },
  // object Method 👇
  action: function() {
    return `Time for ${this.meal.morning}`;
  }
};

// Access specific part of object
console.log(anotherObj.alive);
console.log(anotherObj.hobbies[2]);
console.log(anotherObj["meal"]);


// Another Example 
const limousine = {
  wheels: 4,
  engine: function() {
    return "shhhh!";
  }
}

const car = Object.create(limousine);
car.doors = 6;
console.log(car);
console.log(car.wheels); // Inheritance
console.log(car.engine());

const band = {
  guitarist: "Justine Derrico",
  bass: "Brian Gass",
  drummer: "Mark Schulman",
};
console.log(Object.keys(band)); //Object.keys() ex: guitar
console.log(Object.values(band)); // Object.values() ex: Brian Gass
// delete band.drums; => to delete an object value

// Using a for-in loop, to loop through an object
for (let job in band) {
  console.log(band[job]);
  console.log(`On ${job}, it's ${band[job]}!`); //Using values inside for-in loops
}

// Destructuring Objects

// We define the variables by naming a key and an object the we want to pull the variable from

const { guitarist: myVariable  } = band;
console.log(myVariable);

//shorten the code like
const { guitarist ,drummer , bass} = band;
console.log(drummer);
console.log(bass);
console.log(guitarist);

let vocals = "Erric Shayne"
function sings ({vocals}){
  return `${vocals} sings!`
};
console.log(sings(band))

