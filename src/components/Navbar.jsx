import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import Register from "./Register_Login/Register";
import Login from "./Register_Login/Login";

const Navbar = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const [dropDown, setDropDown] = useState(false);

  // const [isLoggedIn, setisLoggedIn] = useState(false);
  // const [user, setUser] = useState({});
  // const route = useNavigate();
  const { state, logout } = useContext(MyContext);

  // // console.log(state);

  // useEffect(() => {
  //   let currentUser = JSON.parse(localStorage.getItem("currentuser"));

  //   if (currentUser) {
  //     setisLoggedIn(true);
  //     setUser(currentUser);
  //   }
  //   if (state?.user) {
  //     setUser(state?.user);
  //   } else {
  //     setUser({});
  //   }
  // }, [state]);

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
    // <nav>
    //   <div id="logo">
    //     <h2 onClick={() => route("/")}>Shopping</h2>
    //   </div>

    //   <h3 onClick={() => route("/multipleproducts")}>Products</h3>
    //   {state?.user ? (
    //     <div id="rightNav">
    //       {isLoggedIn ? (
    //         <Link className="profLink" to="/profile">
    //           <h3> {user.userName}</h3>
    //         </Link>
    //       ) : (
    //         <Link to="/profile">
    //           <h3>Profile</h3>
    //         </Link>
    //       )}
    //       <button onClick={logout}>Logout</button>
    //       <h3 onClick={() => route("/cart")}>cart</h3>
    //     </div>
    //   ) : (
    //     <button onClick={() => route("/login")}>Login</button>
    //   )}
    // </nav>

    <nav>
      {registerModal && (
        <div className="registerContainerScreen">
          <Register
            hideRegisterModal={hideRegisterModal}
            openLoginModal={openLoginModal}
            setLoginModal={setLoginModal}
          />
        </div>
      )}
      {loginModal && (
        <div className="loginContainerScreen">
          <Login
            hideLoginModal={hideLoginModal}
            hideRegisterModal={hideRegisterModal}
          />
        </div>
      )}

      {/* dropdown */}

      {state?.user && dropDown ? (
        <div
          onMouseOver={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
          className="profileDropDown"
        >
          <button onClick={logout}>Logout</button>
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

            <div className="bagIcon">
              {/* <i className="fa-solid fa-bag-shopping fa-xl"></i> */}
              <BiShoppingBag />
            </div>

            {state?.user ? (
              <h4
                onClick={openRegisterModal}
                onMouseOver={openProfileDropDown}
                onMouseLeave={() => setDropDown(false)}
              >
                {state.user.userName}
              </h4>
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
      <div className="centerNav">
        <div className="centerMiddleNavigation">
          <NavLink className="centerNavigations">CATEGORIES</NavLink>
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
    </nav>
  );
};

export default Navbar;
