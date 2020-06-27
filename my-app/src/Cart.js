import React from "react";

function Cart({ initialItems }) {
  console.log(initialItems);
  return (
    <div>
      <h1>I AM CART</h1>
      {initialItems.map((item) => (
        <li>
          Name: {item.name}, Price: {item.price}
        </li>
      ))}
    </div>
  );
}

export default Cart;
