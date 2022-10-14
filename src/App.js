import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
