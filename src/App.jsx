import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MultipleProducts from "./components/AllProducts/MultipleProducts";
import SingleProduct from "./components/AllProducts/SingleProduct";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/multipleproducts"
            element={<MultipleProducts />}
          />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
