import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Register_Login_Css/Register.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = ({ hideRegisterModal, openLoginModal, setLoginModal }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
    cart: [],
  });

  console.log(data);

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

  const registerForm = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, number } = data;

    if (name && email && password && confirmPassword && number) {
      if (password.length >= 3) {
        if (password === confirmPassword) {
          const response = await axios.post("http://localhost:8000/register", {
            data,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            setData({
              name: "",
              email: "",
              number: "",
              password: "",
              confirmPassword: "",
              role: "Buyer",
            });

            hideRegisterModal();
            setLoginModal(true);
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("password and confirm password should be same");
        }
      } else {
        toast.error("password must be atleast 8 or more characters");
      }
    } else {
      toast.error("all fields are mandatory");
    }

    // alert("sumbitted");
  };

  return (
    <>
      <div className="registerMainContainer">
        <div className="header">
          <div className="registerHeading">
            <h2>Registration</h2>
            <p>for a tailored experience....</p>
          </div>
          <h4 className="skipBtn" onClick={hideRegisterModal}>
            skip
          </h4>
        </div>

        <form onSubmit={registerForm}>
          <div className="registerFormContainer">
            <div>
              <input
                name="name"
                onChange={handleChange}
                value={data.name}
                type="text"
                placeholder="Enter name"
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
            <div>
              <input
                name="number"
                onChange={handleChange}
                value={data.number}
                type="text"
                placeholder="Enter number"
              />
            </div>
            <div>
              <select name="role" onChange={handleChange}>
                <option value="">Select your role</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>

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
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                value={data.confirmPassword}
                placeholder="confirm password"
              />
            </div>
            <div className="submitBtn">
              <button
                type="submit"
                value="Register"
                placeholder="confirm password"
              >
                Register
              </button>
            </div>
          </div>
          <div className="alreadyUser">
            <NavLink className="bottomSectionForm">
              Already an User ?<span onClick={openLoginModal}> Login Here</span>
            </NavLink>
          </div>
        </form>

        <div className="fbGoogle">
          <div>
            <BiLogoFacebookCircle />
          </div>
          <div>
            <FcGoogle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
