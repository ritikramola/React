//                   SESSION 1 (BASICS OF REACT)

// <!--hello world using javascript-->
// <!--<div id="root"></div>
//  <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Hello World from JAVASCRIPT!!";

//     const root = document.getElementById("root");
//     root.appendChild(heading);
// </script> -->

//  const heading = React.createElement("h1" , {} , "Hello World from REACT!!");  //  {h1 = element ,{} = object provided with root or attribute, content}
// const root = ReactDOM.createRoot(document.getElementById("root"));  // creating root using reactDOM
// root.render(heading);                                                   // rendering heading inside root ,

// VERY IMPORTANT **React will override the content inside the root element with the content we provide in the render method**.

// const heading = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
// const container = React.createElement("div", { id: "container" }, [
//   heading,                                //these are children of div (heading,heading2)
//   heading2,
// ]);                                         // to add multiple elements we have to put them in an array

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);                      // rendering container inside root ,


// TILL HERE SESSION 1 (BASICS OF REACT)

//       SESSION 2 (BASICS OF REACT)


/**
 * 
 * Uses of parcel:
 * 1. It is a module bundler, it takes all the different files that we have in our project and bundle them into one single file.
 * 2. It also takes care of all the different types of files that we have in our project like css,js,html and convert them into a format that can be understood by the browser.
 * 3. It also provides a development server that we can use to run our project locally.
 * 5. It also provides a production build, which means that it will optimize our code for production and create a minified version of our code.
 * Hot module replacement: It is a feature that allows us to see the changes we make in our code immediately in the browser without having to refresh the page.
 * file watchers: It is a feature that allows parcel to watch for changes in our files and automatically rebuild the project whenever we make any changes.
 * Bundling - it takes all the different files that we have in our project and bundle them into one single file.
 * Code splitting - it allows us to split our code into different chunks so that we can load only the necessary code when needed.
 * Tree shaking - it is a feature that allows parcel to remove any unused code from our project.
 * Minification - minifying the code to reduce the size of the file.
 * Cleaning - it removes any unnecessary code from our project.
 * Image optimization - it optimizes the images in our project to reduce the size of the file.
 * Caching - it caches the files in our project so that they can be loaded faster.
 * Compression - it compresses the files in our project to reduce the size of the file.
 * compatibility - it ensures that our code is compatible with all the different browsers.
 * gives us https support - it allows us to run our project on a secure server.  **cmd - npx parcel index.html --https**
 * also provides a way to use environment variables in our project. **cmd - set PORT=4000 && npx parcel index.html** (for windows)
 * zero configuration - it means that we don't have to configure anything to use parcel. It works out of the box. 
 * 
 * 
 * transitive dependencies - when we install a package, it may have its own dependencies that need to be installed as well
 */

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
// const container = React.createElement("div", { id: "container" }, [
//   heading,                                //these are children of div (heading,heading2)
//   heading2,
// ]);    

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(container);  


//                                      TILL HERE SESSION 2 (BASICS OF REACT)


//       SESSION 3 (BASICS OF REACT)


import React from "react";
import ReactDOM from "react-dom/client";

// createElement createas a javascript object which then creates the actual DOM element and adds it to the DOM
// React element is a lightweight representation of a DOM element. It is an object that describes a DOM node and its attributes.
// React elements are immutable, which means that once they are created, they cannot be changed. If we want to change the content or attributes of a React element, we have to create a new element with the updated content or attributes.\


const heading = React.createElement("h1", { id: "title",key: "h1" }, "Heading 1");

//JSX creates a React element which then creates the actual DOM element and adds it to the DOM
// JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML-like code in our JavaScript files, which makes it easier to create and visualize the structure of our UI components.
// JSX is not a string or HTML. It is a syntax that gets transformed into JavaScript code by a compiler like Babel.
// Under the hood, JSX is just syntactic sugar for React.createElement() function calls. When we write JSX, it gets compiled into React.createElement() calls that create React elements.

const title = <h1>This is JSX</h1>

// This is a functional component
// A functional component is a JavaScript function that returns a React element (JSX). It is a simple and concise way to define a component in React.
// Functional components are also known as stateless components because they do not have their own state. They receive data and behavior through props (properties) passed down from their parent component.
// Functional components are easier to read and understand than class components, especially for simple components that do not require state or lifecycle methods.
// Functional components can also use hooks, which are special functions that allow us to use state and other React features in functional components.
const HeaderComponent = () => {
  return ( <div><h1>This is React code</h1>
  <h2> This is function</h2>
  </div>
  )
}  
//OR both above and below are same (without return statement)

// const HeaderComponent2 = () => (
//   <div><h1>This is React code</h1>
//   <h2> This is function</h2>
//   </div>
// )

// How to use an element or component inside another component

const HeaderComponent1 = () => {
  return (
  <div>
    {title}  
    <h1>This is React code</h1>
    <h2> This is function</h2>
  </div>
  )
}  



console.log(HeaderComponent1)  // it will return a function

const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(HeaderComponent1());  // it will return a react element which will be rendered to the DOM
  // OR
// root.render(<HeaderComponent/>);  // it will return a react element which will be rendered to the DOM



 