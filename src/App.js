import React from "react";

let counter = 0;

function App() {
  function clickConsole() {
    counter++;
    console.log(counter);
    console.log("clicked");
  }

  return (
    <>
      <h1> Welcome </h1>
      <button onClick={clickConsole}> click ME</button>
    </>
  );
}

export default App;
