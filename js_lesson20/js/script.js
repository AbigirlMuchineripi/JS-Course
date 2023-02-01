// Event Listeners

/* In the head of the HTML file, the script element contains a "defer" attribute. This specifies that the script is downloaded and executed after the page has finished parsing. */

// Insure the DOM is available to interact with.
const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 = view.querySelector("h2");

// Syntax: addEventListener (event, function, useCapture)

const doSomething = () => {
    alert("doing something");
}

// Using a function name in the event listener
h2.addEventListener("click", doSomething, false);

// Removing a function with a name: removeEventListener()
h2.removeEventListener("click", doSomething, false);

// Using an anonymous function in the event listener
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
})

// Listening for the readystatechange event