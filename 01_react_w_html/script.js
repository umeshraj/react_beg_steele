const Dog = () => {
  return (
    <div>
      <h1>I AM DOG {1 + 5}</h1>
      <hr />
      <h2>woof woof</h2>
    </div>
  );
};

const RandomNum = () => {
  const num = Math.random() * 10;
  return (
    <div>
      <h1>Your number is {num}</h1>
      <h2>{num > 5 ? "Big" : "Small"} Number </h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RandomNum />
      <Dog />
      <RandomNum />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
