import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Register_Login_Css/Register.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = ({ hideRegisterModal, openLoginModal, setLoginModal }) => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
    role: "Buyer",
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

  const registerForm = async (e) => {
    e.preventDefault();

    const { userName, email, password, cPassword } = data;

    if (userName && email && password && cPassword) {
      if (password.length >= 8) {
        if (password === cPassword) {
          const response = await axios.post("http://localhost:8000/register", {
            data,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            setData({
              userName: "",
              email: "",
              password: "",
              cPassword: "",
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

// const [data, setData] = useState({
//   userName: "",
//   email: "",
//   password: "",
//   cPassword: "",
//   role: "Buyer",
//   cart: [],
// });

// //   console.log(data);

// const handleChange = (e) => {
//   const name = e.target.name;
//   // console.log(name);
//   const val = e.target.value;

//   setData(() => {
//     return {
//       ...data,
//       [name]: val,
//     };
//   });
//   // console.log(name, val);
// };

// const registerForm = (e) => {
//   e.preventDefault();

//   const { userName, email, password, cPassword } = data;

//   if (userName && email && password && cPassword) {
//     if (password.length >= 8) {
//       if (password === cPassword) {
//         let storeUser = JSON.parse(localStorage.getItem("userdata")) || [];

//         let userObj = {
//           ...data,
//           id: new Date().getTime().toString(),
//         };

//         let flag = false;

//         for (let i = 0; i < storeUser.length; i++) {
//           if (storeUser[i].email === email) {
//             flag = true;
//           }
//         }

//         if (!flag) {
//           storeUser.push(userObj);
//           localStorage.setItem("userdata", JSON.stringify(storeUser));

//           alert("registration successfully Done");

//           setData({
//             userName: "",
//             email: "",
//             password: "",
//             cPassword: "",
//           });

//           hideRegisterModal();
//           setLoginModal(true);
//         } else {
//           alert("user already registered proceed too Login");
//         }
//       } else {
//         alert("password and confirm password should be same");
//       }
//     } else {
//       alert("password must be atleast 8 or more characters");
//     }
//   } else {
//     alert("all fields are mandatory");
//   }

//   // alert("sumbitted");
// };
