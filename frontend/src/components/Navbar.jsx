import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import Register from "./Register_Login/Register";
import Login from "./Register_Login/Login";
import king from "../Assets/king.png";

const Navbar = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [isLoggedIN, setisLoggedIn] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const route = useNavigate();
  const { state, logout } = useContext(MyContext);

  // // console.log(state);

  function openRegisterModal() {
    setRegisterModal(true);
  }
  function hideRegisterModal() {
    setRegisterModal(false);
  }
  function openLoginModal() {
    setLoginModal(true);
  }
  function hideLoginModal() {
    setLoginModal(false);
  }

  function openProfileDropDown() {
    if (state?.user) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  return (
    <>
      <nav>
        {!state?.user && registerModal ? (
          <div className="registerContainerScreen">
            <Register
              hideRegisterModal={hideRegisterModal}
              openLoginModal={openLoginModal}
              setLoginModal={setLoginModal}
            />
          </div>
        ) : null}
        {!state?.user && loginModal ? (
          <div className="loginContainerScreen">
            <Login
              hideLoginModal={hideLoginModal}
              hideRegisterModal={hideRegisterModal}
            />
          </div>
        ) : null}

        {/* dropdown */}

        {state?.user && dropDown ? (
          <div
            onMouseOver={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            className="profileDropDown"
          >
            <div onClick={() => route("/profile")}>
              <h4>My Profile</h4>
            </div>
            {state?.user?.role == "Seller" && (
              <>
                <div onClick={() => route("/addproducts")}>
                  <h4>Add Products</h4>
                </div>
                <div onClick={() => route("/myproducts")}>
                  <h4>My Products</h4>
                </div>
              </>
            )}
            <div>
              <h4>My Orders</h4>
            </div>
            <div>
              <h4>My Account</h4>
            </div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        ) : null}

        {/* --------------------- */}

        <div className="topNav">
          <div className="topLeftNav">
            <p>First Citizen Club</p>
            <p>All Stores</p>
            <p>Help & Support</p>
          </div>
          <div className="topCenterNav">
            <div className="centerLogoImg">
              <img
                onClick={() => route("/")}
                src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/rectangle_logo_black.svg"
                alt=""
              />
            </div>
          </div>
          <div className="topRightNav">
            <div className="searchContainer">
              <input type="text" placeholder="Search Products and Brands" />
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>

            <div className="allIconsContainer">
              <i className="fa-regular fa-heart fa-xl"></i>

              {state?.user?.role == "Buyer" && (
                <div className="bagIcon" onClick={() => route("/cart")}>
                  <BiShoppingBag />
                </div>
              )}
              {state?.user ? (
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    backgroundColor: "#ececec",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "7px 2px ",
                  }}
                  className="username"
                  onClick={openRegisterModal}
                  onMouseOver={openProfileDropDown}
                  onMouseLeave={() => setDropDown(false)}
                >
                  <div style={{ width: "30%" }}>
                    <img width="15px" height="15px" src={king} alt="" />
                  </div>
                  <p style={{ width: "55%" }}>
                    {state?.user?.name.slice(0, 7)}
                  </p>
                </div>
              ) : (
                <i
                  onClick={openRegisterModal}
                  onMouseOver={openProfileDropDown}
                  onMouseLeave={() => setDropDown(false)}
                  className="fa-regular fa-circle-user fa-xl"
                ></i>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="centerNav">
        <div className="centerMiddleNavigation">
          <NavLink to="/multipleproducts" className="centerNavigations">
            CATEGORIES
          </NavLink>
          <NavLink className="centerNavigations" id="luxe">
            LUXE
          </NavLink>
          <NavLink className="centerNavigations">BARGAINS</NavLink>
          <NavLink className="centerNavigations">STYLE HUB</NavLink>
        </div>
      </div>
      <div className="bottomNav">
        <div className="bottomNavigations">
          <NavLink className="allCategoriesNav">MEN</NavLink>
          <NavLink className="allCategoriesNav">WOMEN</NavLink>
          <NavLink className="allCategoriesNav">BEAUTY</NavLink>
          <NavLink className="allCategoriesNav">WATCHES</NavLink>
          <NavLink className="allCategoriesNav">KIDS</NavLink>
          <NavLink className="allCategoriesNav">HOMESTOP</NavLink>
          <NavLink className="allCategoriesNav">GIFTS</NavLink>
          <NavLink className="allCategoriesNav">BRANDS</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
