import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

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

          localStorage.setItem("userdata", JSON.stringify(regUsers));
        }
      }
    }

    // alert("product removed");

    window.location.reload();

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
        if (reguser[i].email == currentuser.email) {
          reguser[i].cart = [];
          break;
        }
      }
      localStorage.setItem("userdata", JSON.stringify(reguser));
      setCartItems([]);
      // window.location.reload();
    }
    alert("Product will deliver soon, Thank you for shopping.");
  };
  return (
    <>
      <Navbar />
      <h2 className="header">My Cart</h2>
      <h1 style={{ color: "blue", fontWeight: "bolder", paddingLeft: "20px" }}>
        Total Price : {totalPrice}$
      </h1>
      {cartItems.length ? (
        <div className="buyProd">
          <button onClick={buyProduct}>Buy Product</button>
        </div>
      ) : null}

      <div className="cartContainer">
        {cartItems.length ? (
          cartItems.map((e, index) => (
            <div className="proContainer" key={e.id}>
              <img src={e.image} alt="" />
              <h3>Brand : {e.title}</h3>
              <h4>Rs.{e.price}</h4>
              {/* <h4>{e.description.slice(0, 100)}...</h4> */}
              <button onClick={() => removeSingleItem(index)}>
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Your Cart is Empty</h1>
          </div>
        )}

        {/* {cartItems.length < 0 && <h2>Your Cart is Empty</h2>} */}
      </div>
    </>
  );
};

export default Cart;
