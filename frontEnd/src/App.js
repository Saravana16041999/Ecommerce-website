import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Productpage from "./Pages/Productpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Product/:id" element={<Productpage />} />
            <Route path="*" element={<h1>go back</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
