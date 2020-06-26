import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Greeter from "./Greeter";

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="Karen" />
      <Greeter name="Tammy" />
      <h1>Hello from App!</h1>
    </div>
  );
}

export default App;
