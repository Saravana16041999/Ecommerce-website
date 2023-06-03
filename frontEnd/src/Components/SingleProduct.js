import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addIteam } from "../redux/Reducer/Cart";

const SingleProduct = ({ data }) => {
  const dispatchcart = useDispatch();

  const addToCart = () => {
    dispatchcart(addIteam(data));
  };
  return (
    <div key={data.id} className="single-product">
      <div className="product-image">
        <Link to={`/product/${data.id}`}>
          <img src={data.image} alt={data.tilte} />
        </Link>
      </div>
      <div className="product-detials">
        <Link to={`/product/${data.id}`}>
          <div className="name-price">
            <h2>{data.tilte}</h2>
            <p>₹{data.price}</p>
          </div>
        </Link>
        <div className="detial-cat">
          <p>{data.decription}</p>
          <p>{data.category}</p>
        </div>
        <button onClick={addToCart} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
