
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

const heading = React.createElement("h1", { id: "title" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading, //these are children of div (heading,heading2)
  heading2,
]); // to add multiple elements we have to put them in an array

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container); // rendering container inside root ,
