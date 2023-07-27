import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "../../styles/ProductsCSs/MultipleProducts.css";
import { AiOutlineSearch, AiOutlineUp } from "react-icons/ai";
import loader from "../../Assets/spinner.gif";

const MultipleProducts = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [query, setQuery] = useState("");
  const router = useNavigate();

  const url = "https://fakestoreapi.com/products";

  // console.log(product);

  async function fetchproduct() {
    const fetchdata = await fetch(url);
    const response = await fetchdata.json();
    // console.log(response);
    setProduct(response);
    setFilterProduct(response);
  }

  useEffect(() => {
    fetchproduct();
  }, []);

  function handleSearchInput(e) {
    const prodSearch = e.target.value;
    setQuery(prodSearch);
    // console.log(prodSearch);

    if (prodSearch.length > 0) {
      const searchData = product.filter((item) =>
        item.title.toLowerCase().includes(prodSearch)
      );

      setProduct(searchData);
    } else {
      setProduct(filterProduct);
    }
  }
  return (
    <>
      <Navbar />

      <div id="topSectionMulProducts">
        <p>Home Offers / All Offer / Products</p>
        <h2>All Categories</h2>
        <div style={{ position: "relative", zIndex: 0 }}>
          <select>
            <option>SORT BY : DISCOUNT</option>
            <option>RELEVANCE</option>
            <option>POPULAR</option>
            <option>NEW</option>
            <option>DISCOUNT</option>
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
            value={query}
            onChange={handleSearchInput}
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
          {product.length ? (
            product.map((item) => (
              <div
                key={item.id}
                id="singleproduct"
                onClick={() => router(`/singleproduct/${item.id}`)}
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
    </>
  );
};

export default MultipleProducts;
