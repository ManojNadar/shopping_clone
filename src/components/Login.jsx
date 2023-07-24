import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";

const Login = () => {
  const { login } = useContext(MyContext);

  const [loginInput, setLoginInput] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const route = useNavigate();

  const handleLoginChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setLoginInput(() => {
      return {
        ...loginInput,
        [name]: val,
      };
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    // console.log(loginInput);

    let loginDetails = JSON.parse(localStorage.getItem("userdata"));

    // console.log(loginDetails);

    const { loginEmail, loginPassword } = loginInput;

    if (loginEmail && loginPassword) {
      let flag = false;
      let currentUser;

      for (let i = 0; i < loginDetails.length; i++) {
        if (
          loginDetails[i].email === loginEmail &&
          loginDetails[i].password === loginPassword
        ) {
          flag = true;
          currentUser = loginDetails[i];
          break;
        }
      }

      if (flag) {
        alert("login success");
        route("/");
        login(currentUser);
      } else {
        alert("invalid details");
        setLoginInput({ loginEmail: "", loginPassword: "" });
      }
    } else {
      alert("fill all the fields");
    }
  };
  return (
    <>
      <h2 className="header">Login here</h2>

      <form onSubmit={submitLogin}>
        <div className="registerContainer">
          <div>
            <input
              value={loginInput.userEmail}
              name="loginEmail"
              onChange={handleLoginChange}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div>
            <input
              value={loginInput.userPassword}
              onChange={handleLoginChange}
              name="loginPassword"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div>
            <input type="submit" value="Login" placeholder="confirm password" />
          </div>
        </div>
      </form>

      <div className="bottomSection">
        <Link to="/register">New User ? Register Here</Link>
      </div>
    </>
  );
};

export default Login;
