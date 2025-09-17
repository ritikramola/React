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


