import React from "react";

const ProductList = ({
  iteam,
  incrementIteam,
  decrementIteam,
  removeIteam,
}) => {
  return (
    <div className="cart-iteams">
      <div className="cart-left">
        <div className="cart-image">
          <img src={iteam.image} alt={iteam.tilte} />
        </div>
        <div className="cart-detilas">
          <p>₹{iteam.price}</p>
          <p>{iteam.category}</p>
        </div>
      </div>
      <div className="cart-right">
        <div className="add-remove">
          <button onClick={incrementIteam} className="add1-btn">
            +
          </button>
          <span>{iteam.count}</span>
          <button onClick={decrementIteam} className="minus-btn">
            -
          </button>
        </div>
        <button onClick={removeIteam} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductList;
