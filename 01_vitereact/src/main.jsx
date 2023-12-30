import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <App />

    // <div>
    //   <h1>Custom App !</h1>
    // </div>
  );
}

// // self create so does not work, react bundler cannot convert it
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click Me to Visit Google'
}

// // this work because it is html, which after converted by react bundler
const anotherElement = (
  <a href='https://google.com' target='_blank'> Click Me to Visit Google</a>
)

// // variable 
const user = 'prince';


// this works, because we use rules by react
const element = React.createElement(
  'a',
  {
    href: "http://google.com",
    target: '_blank'
  },
  'Click Me',
  user
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // // they both work
  <MyApp />
  // MyApp()

  // // does not work 
  // reactElement

  // // this gonna work
  // anotherElement

  // // this gonna work
  // element
);
