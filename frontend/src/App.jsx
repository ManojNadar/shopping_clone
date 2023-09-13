import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MultipleProducts from "./components/AllProducts/MultipleProducts";
import SingleProduct from "./components/AllProducts/SingleProduct";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import { useContext } from "react";
import { MyContext } from "./Context/ContextContainer";
import AddProducts from "./components/AllProducts/AddProducts";
import MyProducts from "./components/AllProducts/MyProducts";
import UpdateProduct from "./components/AllProducts/UpdateProduct";

function App() {
  const { state } = useContext(MyContext);

  console.log(state);
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
          <Route
            exact
            path="/singleproduct/:productId"
            element={<SingleProduct />}
          />
          <Route exact path="/addproducts" element={<AddProducts />} />
          <Route exact path="/myproducts" element={<MyProducts />} />
          <Route
            exact
            path="/updateproduct/:productId"
            element={<UpdateProduct />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
