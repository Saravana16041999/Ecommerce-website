import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp";
import Productpage from "./Pages/Products/Productpage";
import { createContext, useState } from "react";
import CheckOut from "./Components/CheckOut";

export const Appcontext = createContext();

function App() {
  const [login, setlogin] = useState(true);

  return (
    <div className="App">
      <Appcontext.Provider value={{ setlogin, login }}>
        <BrowserRouter>
          <Routes>
            {!login ? (
              <>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="signIn" element={<SignIn />} />
              </>
            ) : (
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="product/:id" element={<Productpage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Checkout" element={<CheckOut />} />
                <Route path="*" element={<h1>go back</h1>} />
              </Route>
            )}
          </Routes>
        </BrowserRouter>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
