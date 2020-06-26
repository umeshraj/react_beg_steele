import React from "react";

function Greeter({ name, excitement = 1, age = 18 }) {
  return (
    <>
      <h1>
        Hi there, {name}
        {"!".repeat(excitement)}
      </h1>
      <p>You are {age} years old</p>
    </>
  );
}

export default Greeter;
