// Event Listeners

/* In the head of the HTML file, the script element contains
 a "defer" attribute. This specifies that the script is downloaded and executed after the page has finished parsing. */

// Ensure the DOM is available to interact with.
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
/*The readyState property is an attribute of the Document 
interface that describes the loading state of the document.
 It helps developers determine when the document and its 
 resources have finished loading.
The document.readyState property can have three possible 
values:

"loading" - The document is still loading, and the parser is working.
"interactive" - The document has finished parsing, but resources like
 images, stylesheets, and frames may still be loading.
"complete" - The document and all its resources have fully loaded.
*/
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = view.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
   
  });

  div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
  });

  //event.terget only targets the clicked element
  h2.addEventListener("click", (event) => {
    event.target.textContent = "Clicked";
  });
};

// classList, add, remove, and toggle
/*The classList property provides methods to manipulate an 
element's CSS classes. It's a read-only property that returns 
a live DOMTokenList collection of the element's classes,
 making it easier to add, remove, or toggle classes compared 
 to directly manipulating the className property.*/
view.addEventListener("click", (event) => {
    view.classList.add("purple");
    view.classList.remove("darkblue");
    //toggle can be used instead of add / remove
    view.classList.toggle("darkblue");
  });

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) =>{
    event.target.classList.add("height100");

  }),
  nav.addEventListener("mouseout", (event) =>{
    event.target.classList.remove("height100");
  })


  // Prevent default behavior with event.preventDefault()
  const initApp2 = () => {
    const view3 = document.querySelector("#view3");
    const myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("submit event");
    })
  }