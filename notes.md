## Session 2 important topics

package-lock.json: it is used to locks the version from which we are using parcel, very important 
node-module : it contains all the dependency used by parcel. can be generated many times.
Parcel cache - it is cache stored by parcel to reload the local server, put in gitignore
dist - parcel put production file in this folder. **cmd-  npx parcel build index.html**


## SESSION 3 IMPORTANT NOTES

polyfill : a never version of code which is coverted into older version of a code for all the web browser to understand
AND WHICH CONVERTS IT IS **BABEL: js package**  

  "scripts": {
    "start" : "parcel index.html",   /* to run the project (npm run start) or (npm start) */

#### how to install plugin : 

go to npm , like to remove console.log we use :
                babel-plugin-transform-remove-console

1st install it using command then create a new file to config and then use it 


JSX - jsx is html likes and tags *not* html inside javascript 
     example : In html we write **<tab-index><tab-index/>**  in JSX we write it as **<tabIndex><tabIndex/>**


#### BABEL

Babel is a compiler or transpiler

babel takes this jsx code and give us react code  using ast spec (ABSTRACT SYNTAX TREE) other algos.

babel comes along with parcel.

COMPONENT

Everything is component in react
1. Functional Component : new way of writing code
2. Class based Component : older way of writing code(covered later)


#### How to use react element inside any component (function)

const HeaderComponent = () => {
  return ( <div>
  {title}   **Using curly braces we can put element inside component**
  <h1>This is React code</h1>
  <h2> This is function</h2>
  </div>
  )
}


#### How to use react component inside any component (function) called Component Composition

const HeaderComponent = () => {
  return ( <div>
  {title()}   **Using curly braces we can put element inside component**
  <h1>This is React code</h1>
  <h2> This is function</h2>
  </div>
  )
}


JSX is save us from XSS(cross site scripting )
JSX uses SANITIZATION to save us from getting hacked.

JAR GUN - is component composition

### Session 4

Is jsx mandatory -  NO , typescript - no , es6 - No


This will give error as we can only have one parent {header,body and footer giving error}
const AppLayout = () => {
  return (
  <>
    <Header/>
     <Body/>
    <Footer/> 
 </>
  );
};

<>  </> these are called **React fragment** 

Wht is react fragment ? wht does it do ? and why is it needed ?
react.fragment is a componenet imported by react and is used as component inside react
const AppLayout = () => {
  return (
  <React.Fragment>
    <Header/>
     <Body/>
    <Footer/> 
 <React.Fragment/>
  );
};

WHy is it needed ? As JSX can only have one parent so to get 2 or more parents we use **REACT.FRAGMENT**

we can use it as **<> </>** OR emptytag

with this we can't use css  BUT for that we have inline styling in react , How we do it ?

const styleObj = () = {
    background-color : "red",
  };


const AppLayout = () => (
  <div style = {styleObj}>
    <Header/>
     <Body/>
    <Footer/> 
 <div/>
);

Can we use react.fragment inside react.fragment
Yes, it is possible to use a React Fragment inside another React Fragment. React Fragments are primarily used to group multiple elements without adding an extra node to the DOM. This can be useful for various reasons, such as when returning multiple elements from a component or when working with lists and tables. 


We make our UI dynamic which is called as **CONFIG DRIVEN UI**

for example : carousel is showing for some location and for some it is not as there are no offers there.
backend make changes in api depending on the place the app is being used.

OPTIONAL CHAINING:  Optional chaining ( ?. ) in React, as in general JavaScript, is a syntax feature that allows you to safely access nested object properties or call methods when intermediate properties might be null or undefined. It prevents your application from crashing due to attempting to access a property of a null or undefined value.  

React wraps up all the argument in one property and pass in params as single property called props.


#### VIRTUAL DOM

Virtual dom is concept we keep a representation of DOM with us is called Virtual dom.
We need it for **RECONCIALIATION** => is an algo that react uses to diff one tree from other and it determines wht needs to be updated and just re-rendered small portion of project.\

WHY WE USE KEY ? with the help of key react knows wht needs to be rerendered.

React Fiber =>  It is a fundamental change to React's internal architecture, designed to improve the rendering process and enable new features like asynchronous rendering and concurrent mode. 

In essence, React Fiber transforms React's rendering from a largely synchronous, all-or-nothing process into an asynchronous, interruptible, and prioritized system, leading to a more performant and fluid user experience.


Why don't we use index as a key ?
Index us a valid key but we never use index as a key as if the order of the index changes it will negatively impact our project
