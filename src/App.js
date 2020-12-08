import React from "react";

let myName = prompt("enter your name");
const color = "blue";

function App() {
  return <h1 style={{ color: color }}> {myName} </h1>;
}

export default App;
