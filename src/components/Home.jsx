import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { MyContext } from "../Context/ContextContainer";

const Home = () => {
  const { state, logout } = useContext(MyContext);

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const route = useNavigate();

  useEffect(() => {
    let getCurrentUser = JSON.parse(localStorage.getItem("currentuser"));

    if (getCurrentUser) {
      // console.log(state?.user?.email);
      if (state?.user?.email) {
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
    }
  }, [state]);

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "2%" }}>
        {state?.user?.email ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <button onClick={() => route("/login")}>Login</button>
        )}
      </div>

      <div id="homeHeader">
        <h2>Welcome to Shopping </h2>
      </div>

      <div id="homebanner">
        <img
          src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
