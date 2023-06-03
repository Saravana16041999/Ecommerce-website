import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addIteam } from "../../redux/Reducer/Cart";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loding: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Productpage = () => {
  const dispatchcart = useDispatch();
  const params = useParams();
  const { id } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fethData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/id/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fethData();
  }, [id]);

  const addToCart = () => {
    dispatchcart(addIteam(product));
  };

  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <section className="main-section">
      <div className="product-img">
        <img src={product.image} alt={product.tilte} />
      </div>
      <div className="product-detial">
        <h1>{product.decription}</h1>
        <div className="ava-size">
          <p>Avaliable Size: </p>
          {product.size.map((elem, index) => (
            <p className="sizes" key={index}>
              {elem}
            </p>
          ))}
        </div>
        <h1 className="title">{product.tilte}</h1>
        <p className="detial">{product.ditales}</p>
        <h3>category: - {product.category}</h3>
        <div className="price-btn">
          <h2 className="price">Price : ₹{product.price}</h2>
          <button onClick={addToCart} className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productpage;
