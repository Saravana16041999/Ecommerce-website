import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CheckOut = () => {
  const { list } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Order Sucessfully placed</h1>
      {list.map((iteam) => {
        return (
          <div>
            <div className="cart-left">
              <div className="cart-image">
                <img src={iteam.image} alt={iteam.tilte} />
              </div>
              <div className="cart-detilas">
                <p>₹{iteam.price}</p>
                <p>{iteam.category}</p>
              </div>
              <div className="add-remove">
                <h2>Order Numer</h2>
                <p>{uuidv4()}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
