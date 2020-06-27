import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";

function App() {
  return (
    <div>
      <Counter step={5} />
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name="Karen" age="27" excitement={4} />
      <Greeter name="Tammy" excitement={2} />
      <h1>Hello from App!</h1>
    </div>
  );
}

export default App;
