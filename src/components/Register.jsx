import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
const Register = () => {
  const route = useNavigate();
  const [data, setData] = useState({
    userName: "",
    email: "",
    // date: "",
    password: "",
    cPassword: "",
    cart: [],
  });

  //   console.log(data);

  const handleChange = (e) => {
    const name = e.target.name;
    // console.log(name);
    const val = e.target.value;

    setData(() => {
      return {
        ...data,
        [name]: val,
      };
    });
    // console.log(name, val);
  };

  const registerForm = (e) => {
    e.preventDefault();

    const { userName, email, password, cPassword } = data;

    if (userName && email && password && cPassword) {
      if (password.length >= 8) {
        if (password === cPassword) {
          let storeUser = JSON.parse(localStorage.getItem("userdata")) || [];

          let userObj = {
            ...data,
            id: new Date().getTime().toString(),
          };

          let flag = false;

          for (let i = 0; i < storeUser.length; i++) {
            if (storeUser[i].email === email) {
              flag = true;
            }
          }

          if (!flag) {
            storeUser.push(userObj);
            localStorage.setItem("userdata", JSON.stringify(storeUser));

            alert("registration successfully Done");

            setData({
              userName: "",
              email: "",
              password: "",
              cPassword: "",
            });

            route("/login");
          } else {
            alert("user already registered proceed too Login");
            route("/login");
          }
        } else {
          alert("password and confirm password should be same");
        }
      } else {
        alert("password must be atleast 8 or more characters");
      }
    } else {
      alert("all fields are mandatory");
    }

    // alert("sumbitted");
  };

  return (
    <>
      <h2 className="header">Registration</h2>
      <form onSubmit={registerForm}>
        <div className="registerContainer">
          <div>
            <input
              name="userName"
              onChange={handleChange}
              value={data.userName}
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div>
            <input
              name="email"
              onChange={handleChange}
              value={data.email}
              type="email"
              placeholder="Enter email"
            />
          </div>
          {/* <div>
            <input
              name="date"
              onChange={handleChange}
              value={data.date}
              type="date"
            />
          </div> */}

          <div>
            <input
              name="password"
              onChange={handleChange}
              value={data.password}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div>
            <input
              name="cPassword"
              onChange={handleChange}
              type="password"
              value={data.cPassword}
              placeholder="confirm password"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              placeholder="confirm password"
            />
          </div>
        </div>
        <div className="bottomSection">
          <Link to="/login">Already an User ? Login Here</Link>
        </div>
      </form>
    </>
  );
};

export default Register;
