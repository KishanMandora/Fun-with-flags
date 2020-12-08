import React, { useState } from "react";

function App() {
  const [likeCount, setCount] = useState(0);
  function likeCounter() {
    let newLikeCount = likeCount++;
    setCount(newLikeCount);
  }

  return (
    <>
      <h1> Welcome </h1>
      <button onClick={likeCounter}> click ME </button> {likeCount}
    </>
  );
}

export default App;
