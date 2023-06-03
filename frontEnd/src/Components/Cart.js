import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modfyiteam, removeIteam } from "../redux/Reducer/Cart";
import ProductList from "./ProductList";

const Cart = () => {
  const { list } = useSelector((state) => state.cart);
  const dispathch = useDispatch();

  const incrementIteam = (iteam) => {
    dispathch(modfyiteam({ ...iteam, count: iteam.count + 1 }));
  };
  const decrementIteam = (iteam) => {
    if (iteam.count === 1) {
      dispathch(removeIteam(iteam));
    } else dispathch(modfyiteam({ ...iteam, count: iteam.count - 1 }));
  };

  const removeIteamCart = (iteam) => {
    dispathch(removeIteam(iteam));
  };

  return (
    <div className="main-cart">
      <h1>All Itemas</h1>
      <div className="all-cart-iteams">
        {list.length > 0 ? (
          list.map((iteam, index) => {
            console.log(iteam);
            return (
              <ProductList
                key={index}
                iteam={iteam}
                incrementIteam={() => incrementIteam(iteam)}
                decrementIteam={() => decrementIteam(iteam)}
                removeIteam={() => removeIteamCart(iteam)}
              />
            );
          })
        ) : (
          <h1>There is no Iteam</h1>
        )}
        <div className="action-cart">
          <button className="Check-out">
            <Link to="/Checkout">Check Out</Link>
          </button>
          <button className="back">
            <Link to="/">Go back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
