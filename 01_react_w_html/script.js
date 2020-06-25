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
  return <h1>Your number is {num}</h1>;
};

ReactDOM.render(<RandomNum />, document.getElementById("root"));
