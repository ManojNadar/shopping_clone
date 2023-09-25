import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css";
import { MyContext } from "../Context/ContextContainer";
// import Footer from "./Footer";
import emptycart from "../Assets/emptycart.png";
import emptycart2 from "../Assets/emptycart2.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const { state } = useContext(MyContext);
  const route = useNavigate();
  // console.log(cartItems);

  useEffect(() => {
    if (state?.user?.role != "Buyer") {
      route("/");
    }
  }, [state?.user]);

  useEffect(() => {
    async function getCartProducts() {
      try {
        const token = JSON.parse(localStorage.getItem("shoppingToken"));
        const response = await axios.post(
          "http://localhost:8000/get-cart-products",
          { token }
        );

        if (response.data.success) {
          setCartItems(response.data.product);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCartProducts();
  }, []);

  const removeSingleItem = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("shoppingToken"));

      const response = await axios.post(
        "http://localhost:8000/delete-cart-product",
        {
          productId,
          token,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItems(response.data.products);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (cartItems.length) {
      let totalPrice = 0;

      for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price;
      }

      setTotalPrice(totalPrice);
    }
  }, [cartItems, totalPrice]);

  const buyProduct = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("shoppingToken"));

      const response = await axios.post("http://localhost:8000/buyproduct", {
        token,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItems([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {state?.user ? (
        <div className="cartBody">
          <div className="MainCartSection">
            <div className="cartContainer">
              {cartItems.length ? (
                cartItems.map((e, index) => (
                  <div className="proContainer" key={e._id}>
                    <div className="imgSection">
                      <img src={e.image} alt="" />
                    </div>

                    <div className="cartDetails">
                      <h3>{e.title}</h3>
                      <h4>Rs.{e.price}</h4>
                      {/* <h4 className="cartDesc">
                        {e.description.slice(0, 100)}...
                      </h4> */}
                      <button onClick={() => removeSingleItem(e._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "5%",
                  }}
                >
                  <div className="emptyCart2">
                    <img src={emptycart2} alt="" />
                  </div>
                  <h1>Your Cart is Empty</h1>
                </div>
              )}
            </div>

            {cartItems.length < 1 ? null : (
              <div className="totalPriceDetailsContainer">
                <h2>Order Summary</h2>
                <div className="summaryPrice">
                  <div className="totalText">
                    <p>Sub total</p>
                    <p>Rs.{totalPrice}</p>
                  </div>
                  <div className="totalText">
                    <p>Delivery charges*</p>
                    <p>Free</p>
                  </div>
                  <div className="totalText">
                    <p>Offer discount</p>
                    <p>Rs.{totalPrice}</p>
                  </div>
                  <div className="totalText">
                    <p>Coupon discount</p>
                    <p>APPLY COUPON</p>
                  </div>

                  <div className="mainTotalPrice">
                    <h2>
                      Total Price :₹
                      {totalPrice}
                    </h2>
                  </div>
                  {cartItems.length ? (
                    <div className="buyProd">
                      <button onClick={buyProduct}>CHECKOUT</button>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
          <div className="emptyCart">
            <img src={emptycart} alt="" />
          </div>
          <h1>Please Login To See Your Cart</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
