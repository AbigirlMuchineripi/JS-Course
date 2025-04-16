// Arrays

const myArray = [];

// Add elements to an array by referencing the position they are in, in the Array.

myArray[0] = "Abigirl";
myArray[1] = 700;
myArray[2] = true;

// Arrays are like storage locations for values.
console.log(myArray);

// Length Property
console.log(myArray.length);

// Last element in an Array
console.log(myArray[myArray.length - 1]);

console.log(myArray[0]);

// Use the push() method to add elements to end of an array.
myArray.push("coffee");
console.log(myArray);//['Abigirl', 700, true, 'coffee']

// Use pop() to remove elements from the end of an array.
myArray.pop();
console.log(myArray)//['Abigirl', 700, true]

// unshift() adds an element to the front of an array.
myArray.unshift("tall"); 
console.log(myArray)//['tall', 'Abigirl', 700, true]


// shift() removes an element from the front of an array.
myArray.shift();
console.log(myArray)//  ['Abigirl', 700, true]

// splice() removes or replaces existing elements and/or adds new elements in place.

/*No problem! Here's a shortened note on the **`splice()`** method:

### `splice()` Method in JavaScript

- **Purpose**: Adds or removes elements from an array, modifying the original array.
- **Parameters**:
  - `startIndex`: The index to start modifying the array.
  - `deleteCount`: The number of elements to remove.
  - `item1, item2, ...` (optional): Items to add at the `startIndex`.
- **Returns**: An array of the removed elements.
- **Key Points**:
  - Modifies the original array.
  - Can add, remove, or both add and remove elements.
  */
myArray.splice( false,1, 2,3);
console.log(myArray);//[2,3, 700, true]
console.log(myArray.length)//4

// slice() slices out a piece of an array.
myArray.slice();
console.log(myArray)//[2,3, 700, true]
console.log(myArray.slice(3));//[true]
console.log(myArray.slice(0,3));// [2, 3, 700]

// reverse() reverses the elements in an array.
myArray.reverse();
console.log(myArray);// [true, 700, 3, 2]

// The join() method returns an array as a string.

myArray.join();
console.log(myArray.join());//true,700,3,2

// split() method splits a string into an array of substrings.
//myArray.split(",")
//to be reviewed


// concat() method concatenates (joins) two or more arrays.
const myArray1= ["A", "B"];
const myArray2 = ["D", "E", "F"];

const myArray3 = myArray1.concat(myArray2);
console.log(myArray3);// ['A', 'B', 'D', 'E', 'F']

// The Spread (...) Operator expands an iterable into more elements (or more arguments for function calls).
const newArray = [...myArray1, ...myArray2];
console.log(newArray);
