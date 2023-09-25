import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "../../styles/ProductsCSs/MultipleProducts.css";
import { AiOutlineSearch, AiOutlineUp } from "react-icons/ai";
import loader from "../../Assets/spinner.gif";
import Footer from "../Footer";
import axios from "axios";

const MultipleProducts = () => {
  const [allproducts, setAllProducts] = useState([]);
  const route = useNavigate();
  // console.log(allproducts);

  useEffect(() => {
    async function allProducts() {
      try {
        const response = await axios.get("http://localhost:8000/getproducts");

        if (response.data.success) {
          setAllProducts(response.data.allProducts);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    allProducts();
  }, []);

  const handleCategoryChange = async (e) => {
    const { value } = e.target;

    try {
      const response = await axios.get("http://localhost:8000/getproducts");

      const getAllProduct = response.data.allProducts;

      if (value === "Mens") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Mens"
        );
        setAllProducts(filterProduct);
      } else if (value === "Womens") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Womens"
        );
        setAllProducts(filterProduct);
      } else if (value === "Kids") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Kids"
        );
        setAllProducts(filterProduct);
      } else if (value === "Home") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Home"
        );
        setAllProducts(filterProduct);
      } else if (value === "Beauty") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Beauty"
        );
        setAllProducts(filterProduct);
      } else {
        setAllProducts(getAllProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <div id="topSectionMulProducts">
        <p>Home Offers / All Offer / Products</p>
        <h2>All Categories</h2>
        <div style={{ position: "relative", zIndex: 0 }}>
          <select onChange={handleCategoryChange}>
            <option>SORT BY : Category</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
            <option value="Kids">Kids</option>
            <option value="Home">Home</option>
          </select>

          <div style={{ position: "absolute", right: "6%", top: "20%" }}>
            <AiOutlineSearch />
          </div>

          <input
            style={{
              marginLeft: "3%",
              height: "25px",
              width: "350px",
              paddingLeft: "1%",
              zIndex: 0,
            }}
            type="text"
            placeholder="search product"
          />
        </div>
      </div>

      <div className="multipleProductsContainer">
        <div className="multipleProductsLeftSection">
          <div className="filterSection">
            <div className="filterHeader">
              <h4>DEPARTMENT</h4>

              <AiOutlineUp />
            </div>
            <div className="checkboxContainer">
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>ALL (147,576)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>BOYS (57,179)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>GIRLS (320,110)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>MENS (40,256)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>BEAUTY (36,000)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>HOMEWARE (101,588)</p>
              </div>
            </div>
          </div>
          <div className="filterSection">
            <div className="filterHeader">
              <h4>CATEGORIES</h4>

              <AiOutlineUp />
            </div>
            <div className="checkboxContainer">
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>ACCESSORIES (593)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>ALL JWELLERY (280)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>ANALOG (1023)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>BELTS (8789)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>ANALOG DIGITAL (456)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>JEANS (2132)</p>
              </div>
            </div>
          </div>
          <div className="filterSection">
            <div className="filterHeader">
              <h4>SIZE</h4>

              <AiOutlineUp />
            </div>
            <div className="checkboxContainer">
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>1 (113)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>10 (846)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>100 (78)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>105 (12)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>13-14 (45)</p>
              </div>
              <div className="singleCheckbox">
                <input type="checkbox" />
                <p>45-16 (115)</p>
              </div>
            </div>
          </div>

          <div className="filterBtn">
            <button>REFINE SEARCH</button>
          </div>
        </div>

        <div id="mainProductsContainer">
          {allproducts.length ? (
            allproducts.map((item) => (
              <div
                key={item._id}
                id="singleproduct"
                onClick={() => route(`/singleproduct/${item._id}`)}
              >
                <div id="singleproductImg">
                  <img src={item.image} alt="" />
                </div>
                {/* <h1 id="prodId">{item.id}</h1> */}

                <div id="prodDetails">
                  <p id="prodTitle">{item.title.slice(0, 50)}..</p>
                  <p id="prodPrice">Rs.{item.price}</p>

                  <h5 id="prodCategory">{item.category}</h5>
                </div>
              </div>
            ))
          ) : (
            <div className="loader">
              <div>
                <img src={loader} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MultipleProducts;
