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
  let message;
  if (num > 5) {
    message = <h2>Big Number!</h2>;
  } else {
    message = <h2>Small Number!</h2>;
  }
  return (
    <div>
      <h1>Your number is {num}</h1>
      {message}
    </div>
  );
};

ReactDOM.render(<RandomNum />, document.getElementById("root"));
