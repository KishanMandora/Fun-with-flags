import React, { useState } from "react";

let str = "";

function App() {
  const [userInput, setInput] = useState(str);
  function changeHandler(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input onChange={changeHandler} />
      <div>Welcome {userInput}</div>
    </>
  );
}

export default App;
