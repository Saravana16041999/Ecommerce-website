import React, { useEffect, useReducer } from "react";
import "./Home.css";
import axios from "axios";
import SingleProduct from "../../Components/SingleProduct";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loding: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fethData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:5000/api/products");
        console.log(result);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fethData();
  }, []);
  console.log(products);
  return (
    <main className="main-page">
      <h1>Products</h1>
      <div className="all-product">
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((data) => {
            return <SingleProduct data={data} key={data.id} />;
          })
        )}
      </div>
    </main>
  );
};

export default Home;
