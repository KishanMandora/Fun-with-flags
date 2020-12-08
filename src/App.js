import React, { useState } from "react";

let str = "";
let listItems = [
  "milk",
  "bread",
  "eggs",
  "flowers",
  "coffee",
  "chocolate",
  "candy",
];

function App() {
  const [userInput, setInput] = useState(str);
  function changeHandler(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input onChange={changeHandler} />
      <div>Welcome {userInput}</div>
      <ul>
        {listItems.map((item) => {
          return <li> {item} </li>;
        })}
      </ul>
    </>
  );
}

export default App;
