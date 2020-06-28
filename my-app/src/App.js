import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Tacos", price: 2, qty: 2 },
  { id: 2, name: "Avocado ", price: 1.0, qty: 5 },
  { id: 3, name: "Sour Cream", price: 3, qty: 1 },
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
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
