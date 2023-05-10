import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";
import logger from "use-reducer-logger";

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
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setproducts] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setproducts(result.data);
    };
    fethData();
  }, []);
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
            return (
              <div key={data.id} className="single-product">
                <Link to={`Product/${data.id}`}>
                  <div className="product-image">
                    <img src={data.image} alt={data.tilte} />
                  </div>
                  <div className="product-detials">
                    <div className="name-price">
                      <h2>{data.tilte}</h2>
                      <p>₹{data.price}</p>
                    </div>
                    <div>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default Home;
