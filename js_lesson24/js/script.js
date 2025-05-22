// Fetch API consists of :
// Callbacks, Promises, and Async/Await 

// Callbacks are functions passed to other functions as params
function firstFunction(parameters, callback) {
    // Do stuff
    callback();
}

// AKA "Callback Hell"
/* firstFunction(param, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {});
    });
}); */


// Promises 
// are used to remove callback hell
// 3 states: Pending, Fulfilled, Rejected 

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! Resolved the promise!");
    } else {
        reject("No! Rejected the promise!");
    };
});

console.log(myPromise); //fullfilled with no information

//Chaining

myPromise
//thenables
.then(value => {
    console.log(value);
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})

//Timeout

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

// Using the Fetch API 👇
const users = fetch("https://jsonplaceholder.typicode.com/users");

// Pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});

