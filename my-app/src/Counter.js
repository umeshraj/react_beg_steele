import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h3 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
    </div>
  );
}

export default Counter;
