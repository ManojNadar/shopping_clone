import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const route = useNavigate();
  const { state, logout } = useContext(MyContext);

  // console.log(state);

  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));

    if (currentUser) {
      setisLoggedIn(true);
      setUser(currentUser);
    }
    if (state?.user) {
      setUser(state?.user);
    } else {
      setUser({});
    }
  }, [state]);

  return (
    <nav>
      <div id="logo">
        <h2 onClick={() => route("/")}>Shopping</h2>
      </div>

      <h3 onClick={() => route("/multipleproducts")}>Products</h3>
      {state?.user ? (
        <div id="rightNav">
          {isLoggedIn ? (
            <Link className="profLink" to="/profile">
              <h3> {user.userName}</h3>
            </Link>
          ) : (
            <Link to="/profile">
              <h3>Profile</h3>
            </Link>
          )}
          <button onClick={logout}>Logout</button>
          <h3 onClick={() => route("/cart")}>cart</h3>
        </div>
      ) : (
        <button onClick={() => route("/login")}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
