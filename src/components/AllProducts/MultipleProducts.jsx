import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const MultipleProducts = () => {
  const [product, setProduct] = useState([]);
  const router = useNavigate();

  const url = "https://fakestoreapi.com/products";

  // console.log(product);

  async function fetchproduct() {
    const fetchdata = await fetch(url);
    const response = await fetchdata.json();
    // console.log(response);
    setProduct(response);
  }

  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <>
      <Navbar />
      <h2>Multiple Products</h2>
      <div id="mainProductsContainer">
        {product.length ? (
          product.map((item) => (
            <div
              key={item.id}
              id="singleproduct"
              onClick={() => router(`/singleproduct/${item.id}`)}
            >
              <img src={item.image} alt="" />
              <h1 id="prodId">{item.id}</h1>
              <p id="prodTitle">{item.title}</p>
              <p id="prodPrice">Rs.{item.price}</p>

              <h5 id="prodCategory">{item.category}</h5>
            </div>
          ))
        ) : (
          <div id="loading">
            <div className="inner"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultipleProducts;
