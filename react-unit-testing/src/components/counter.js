import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 data-testid="count">{count}</h2>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button
          data-testid="increment"
          style={{ fontSize: "14px" }}
          onClick={incrementCount}
        >
          increment +
        </button>
        <button
          data-testid="decrement"
          style={{ fontSize: "14px" }}
          onClick={decrementCount}
        >
          decrement -
        </button>
      </div>
    </div>
  );
};

export default Counter;
