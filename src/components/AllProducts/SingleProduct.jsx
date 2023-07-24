import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const SingleProduct = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();

  const route = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((res) => setSingleData(res));
  }, []);

  useEffect(() => {
    if (id && singleData.length) {
      const findProduct = singleData.find((elem) => elem.id === parseInt(id));
      setSingleProd(findProduct);
    }
  }, [id, singleData]);

  // console.log(singleProd);

  useEffect(() => {
    let getCurrentUser = JSON.parse(localStorage.getItem("currentuser"));

    if (getCurrentUser) {
      setisLoggedIn(true);
      setCurrentEmail(getCurrentUser.email);
    }
  }, []);

  function addToCart(id) {
    if (isLoggedIn) {
      let registeredUser = JSON.parse(localStorage.getItem("userdata"));

      for (let i = 0; i < registeredUser.length; i++) {
        if (registeredUser[i].email === currentEmail) {
          if (registeredUser[i].cart.length) {
            registeredUser[i].cart.find((elem) => elem.id != id);
            registeredUser[i].cart.push(singleProd);
            localStorage.setItem("userdata", JSON.stringify(registeredUser));
            return;
          } else {
            alert("product already added");
          }
        }
      }
    }
    alert("product added");
    route("/multipleproducts");
  }

  return (
    <>
      <Navbar />

      <div id="singleProdContainer">
        <div id="singleImgContainer">
          <img src={singleProd.image} alt="" />
        </div>

        <div id="singleProdDetails">
          <h3>Title : {singleProd.title}</h3>
          <p>Description : {singleProd.description}</p>
          <h2>Rs.{singleProd.price}</h2>
          <i>Category : {singleProd.category}</i>

          {isLoggedIn ? (
            <button onClick={() => addToCart(singleProd.id)}>
              Add To Cart
            </button>
          ) : (
            <button onClick={() => route("/login")}>
              Please login first to Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
