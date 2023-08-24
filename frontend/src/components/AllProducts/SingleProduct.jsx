import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "../../styles/ProductsCSs/SingleProduct.css";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { MyContext } from "../../Context/ContextContainer";
import Footer from "../Footer";

const SingleProduct = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();
  const { state } = useContext(MyContext);
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

  function addToCart() {
    if (isLoggedIn) {
      let registeredUser = JSON.parse(localStorage.getItem("userdata"));

      for (let i = 0; i < registeredUser.length; i++) {
        if (registeredUser[i].email === currentEmail) {
          registeredUser[i].cart.push(singleProd);
          localStorage.setItem("userdata", JSON.stringify(registeredUser));
        }
      }
    }
    alert("product added");
    route("/multipleproducts");
  }

  return (
    <>
      <Navbar />

      <div id="singlProductHeader">
        <p>Home / Men / Clothing / Ethnicwear / Kurtas / {singleProd.title}</p>
      </div>

      <div id="mainSingleProdContainer">
        <div id="singleProdContainer">
          <div className="singleImgContainer">
            <img src={singleProd.image} alt="" />
          </div>
          <div className="singleImgContainer">
            <img src={singleProd.image} alt="" />
          </div>
        </div>

        <div id="singleProdDetails">
          <h3 className="singleProdTitle"> {singleProd.title}</h3>
          <p className="singleProdDesc">{singleProd.description}...</p>
          <h2 className="singleProdPrice">₹ {singleProd.price}</h2>
          <h3 className="singleProdCat"> {singleProd.category}</h3>

          <div className="sizeChartsHeading">
            <p>SIZE</p>
            <p>Size Chart</p>
          </div>
          <div className="sizeCharts">
            <div>38</div>
            <div>40</div>
            <div>42</div>
            <div>44</div>
          </div>

          <p className="return">
            14 days easy return and exchange applicable for this item
          </p>

          <div className="shareHeart">
            <div>
              <AiOutlineShareAlt />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            {state?.user ? (
              <button
                className="addToCart"
                onClick={() => addToCart(singleProd.id)}
              >
                ADD TO BAG
              </button>
            ) : null}
          </div>

          <div className="authSecure">
            <div>
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.702 2.952a3.25 3.25 0 0 1 5.547 2.236H8.751a3.25 3.25 0 0 1 .95-2.236zM7.75 6.312V8.25a.5.5 0 0 0 1 0V6.312h6.5V8.25a.5.5 0 0 0 1 0V6.312h2.684a.187.187 0 0 1 .18.136l1.14 3.99H3.746l1.14-3.99a.187.187 0 0 1 .18-.136H7.75zm0-1.125a4.25 4.25 0 0 1 8.5 0h2.684a1.313 1.313 0 0 1 1.262.952l1.341 4.694.026.17V12.5a3.563 3.563 0 0 1-1.5 2.905V21.5a1.313 1.313 0 0 1-1.313 1.313H5.25A1.312 1.312 0 0 1 3.937 21.5v-6.095a3.568 3.568 0 0 1-1.5-2.905v-1.503c0-.057.01-.112.026-.164l1.34-4.694a1.312 1.312 0 0 1 1.263-.952H7.75zm13.787 5.646.026.167v-.017l-.001-.009a.562.562 0 0 0-.025-.14zM15.563 12.5v-.938h4.874v.938a2.438 2.438 0 0 1-1.132 2.059.562.562 0 0 0-.165.096 2.436 2.436 0 0 1-3.578-2.155zM18 16.063c.32 0 .635-.043.938-.126V21.5a.188.188 0 0 1-.188.188H5.25a.187.187 0 0 1-.188-.188v-5.563A3.56 3.56 0 0 0 9 14.42a3.56 3.56 0 0 0 5.52.598c.182-.183.343-.383.48-.598a3.561 3.561 0 0 0 3 1.642zm-3.563-4.5v.937a2.438 2.438 0 1 1-4.874 0v-.938h4.874zm-6 .937v-.938H3.564v.938a2.437 2.437 0 0 0 1.132 2.059.562.562 0 0 1 .166.096A2.438 2.438 0 0 0 8.438 12.5z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
              <p>Express Store Pickup</p>
            </div>
            <div>
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.367 4.367a.187.187 0 0 1 .133-.054h15a.188.188 0 0 1 .188.187V10c0 7.475-6.33 9.962-7.635 10.395l-.006.002a.145.145 0 0 1-.094 0l-.006-.002c-1.305-.433-7.634-2.92-7.634-10.395V4.5c0-.05.02-.097.054-.133zm.133-1.18A1.313 1.313 0 0 0 3.187 4.5V10c0 8.273 7.032 11.006 8.403 11.462.266.09.554.09.82 0 1.371-.456 8.402-3.19 8.402-11.462V4.5A1.313 1.313 0 0 0 19.5 3.187h-15zm12.013 6.22a.563.563 0 0 0-.776-.814l-5.112 4.88-2.362-2.255a.563.563 0 0 0-.776.814l2.75 2.625c.217.207.559.207.776 0l5.5-5.25z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
              <p>Secure Payment</p>
            </div>
            <div>
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.063a6.938 6.938 0 1 0 0 13.875 6.938 6.938 0 0 0 0-13.876zM3.936 9a8.063 8.063 0 1 1 16.125 0A8.063 8.063 0 0 1 3.937 9z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5.063a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.876zM6.936 9a5.063 5.063 0 1 1 10.125 0A5.063 5.063 0 0 1 6.937 9zM16.5 14.437c.31 0 .563.252.563.563v7.5a.562.562 0 0 1-.814.503l-4.25-2.124-4.247 2.124a.562.562 0 0 1-.814-.503V15a.562.562 0 1 1 1.125 0v6.59l3.685-1.843a.562.562 0 0 1 .503 0l3.687 1.843V15c0-.311.251-.563.562-.563z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
              <p>Authentic Product</p>
            </div>
          </div>
        </div>
      </div>

      <p className="similarProdHeading">People Also Viewed</p>

      <div id="similarProductContainer">
        <div className="similarProductImgContainer">
          <div className="similarProdImg">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/images/h63/he0/27342768701470/S22SW38PURSPOWH_PURPLE.jpg_136Wx204H"
              alt=""
            />
          </div>
          <div className="similarProdDetails">
            <h3>Sanwara</h3>
            <p>Embroidered Cotton Regular Fit Men's Kurta</p>
            <h5>₹ 8752</h5>
          </div>
        </div>
        <div className="similarProductImgContainer">
          <div className="similarProdImg">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/images/h92/hb2/29994374201374/SYSK915YL_YELLOW.jpg_136Wx204H"
              alt=""
            />
          </div>
          <div className="similarProdDetails">
            <h3>Sanwara</h3>
            <p>Embroidered Cotton Regular Fit Men's Kurta</p>
            <h5>₹ 3252</h5>
          </div>
        </div>
        <div className="similarProductImgContainer">
          <div className="similarProdImg">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/images/he5/h9d/29823742607390/N22MK12026BKGY_MULTI.jpg_136Wx204H"
              alt=""
            />
          </div>
          <div className="similarProdDetails">
            <h3>Sanwara</h3>
            <p>Embroidered Cotton Regular Fit Men's Kurta</p>
            <h5>₹ 1919</h5>
          </div>
        </div>
        <div className="similarProductImgContainer">
          <div className="similarProdImg">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/images/he1/h4a/29823877775390/N22MLKK11926YW_YELLOW.jpg_136Wx204H"
              alt=""
            />
          </div>
          <div className="similarProdDetails">
            <h3>Sanwara</h3>
            <p>Embroidered Cotton Regular Fit Men's Kurta</p>
            <h5>₹ 2310</h5>
          </div>
        </div>
        <div className="similarProductImgContainer">
          <div className="similarProdImg">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/images/h84/h84/27342287568926/S22SWSYSK814MN_RED.jpg_136Wx204H"
              alt=""
            />
          </div>
          <div className="similarProdDetails">
            <h3>Sanwara</h3>
            <p>Embroidered Cotton Regular Fit Men's Kurta</p>
            <h5>₹ 1520</h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
