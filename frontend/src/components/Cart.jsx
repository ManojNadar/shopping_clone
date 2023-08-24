import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css";
import { MyContext } from "../Context/ContextContainer";
// import Footer from "./Footer";
import emptycart from "../Assets/emptycart.png";
import emptycart2 from "../Assets/emptycart2.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const { state } = useContext(MyContext);

  // console.log(cartItems);
  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));

    if (currentuser) {
      const regUsers = JSON.parse(localStorage.getItem("userdata"));
      for (let i = 0; i < regUsers.length; i++) {
        if (regUsers[i].email === currentuser.email) {
          setCartItems(regUsers[i].cart);
        }
      }
    }
  }, []);

  const removeSingleItem = (id) => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));

    const regUsers = JSON.parse(localStorage.getItem("userdata"));
    if (currentuser) {
      for (let i = 0; i < regUsers.length; i++) {
        if (regUsers[i].email === currentuser.email) {
          regUsers[i].cart.splice(id, 1);
          setCartItems(regUsers[i].cart);
          setTotalPrice(0);
          localStorage.setItem("userdata", JSON.stringify(regUsers));
        }
      }
    }

    // alert("product removed");

    // console.log(id);
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

  const buyProduct = () => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (currentuser?.email) {
      const reguser = JSON.parse(localStorage.getItem("userdata"));
      for (var i = 0; i < reguser.length; i++) {
        if (reguser[i].email === currentuser.email) {
          reguser[i].cart = [];
          break;
        }
      }
      localStorage.setItem("userdata", JSON.stringify(reguser));
      setCartItems([]);
      setTotalPrice(0);
      // window.location.reload();
    }
    alert("Product will deliver soon, Thank you for shopping.");
  };
  return (
    <>
      <Navbar />

      {state?.user ? (
        <div className="cartBody">
          <div className="MainCartSection">
            <div className="cartContainer">
              {cartItems.length ? (
                cartItems.map((e, index) => (
                  <div className="proContainer" key={e.id}>
                    <div className="imgSection">
                      <img src={e.image} alt="" />
                    </div>

                    <div className="cartDetails">
                      <h3>{e.title}</h3>
                      <h4>Rs.{e.price}</h4>
                      <h4 className="cartDesc">
                        {e.description.slice(0, 100)}...
                      </h4>
                      <button onClick={() => removeSingleItem(index)}>
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
                    <h2>Total Price : {totalPrice}$</h2>
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
