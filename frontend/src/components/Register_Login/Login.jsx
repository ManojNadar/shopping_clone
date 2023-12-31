import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/ContextContainer";
import "../../styles/Register_Login_Css/Login.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = ({ hideLoginModal, hideRegisterModal }) => {
  const { login } = useContext(MyContext);

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

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

  const submitLogin = async (e) => {
    e.preventDefault();

    // console.log(loginInput);

    // console.log(loginDetails);

    const { email, password } = loginInput;

    if (email && password) {
      try {
        const response = await axios.post("http://localhost:8000/login", {
          loginInput,
        });

        if (response.data.success) {
          const user = response.data.userData;
          const token = response.data.token;

          login(user, token);

          toast.success(response.data.message);
          setLoginInput({
            email: "",
            password: "",
          });

          hideLoginModal();
          hideRegisterModal();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("fill all the fields");
    }
  };
  return (
    <>
      <div className="loginMainContainer">
        <div className="header">
          <div className="registerHeading">
            <h2>Login here</h2>
            <p>for a tailored experience...</p>
          </div>
          <h4 onClick={hideLoginModal} className="skipBtn">
            Close
          </h4>
        </div>

        <form onSubmit={submitLogin}>
          <div className="registerFormContainer">
            <div>
              <input
                value={loginInput.email}
                name="email"
                onChange={handleLoginChange}
                type="email"
                placeholder="Enter email"
              />
            </div>

            <div>
              <input
                value={loginInput.password}
                onChange={handleLoginChange}
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </div>

            <div className="submitBtn">
              <button
                type="submit"
                value="Login"
                placeholder="confirm password"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        <div className="alreadyUser">
          <NavLink className="bottomSectionForm">
            New User ? <span onClick={hideLoginModal}> Register Here</span>
          </NavLink>
        </div>

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

export default Login;

// const { login } = useContext(MyContext);

// const [loginInput, setLoginInput] = useState({
//   email: "",
//   password: "",
// });

// const handleLoginChange = (e) => {
//   const name = e.target.name;
//   const val = e.target.value;
//   setLoginInput(() => {
//     return {
//       ...loginInput,
//       [name]: val,
//     };
//   });
// };

// const submitLogin = (e) => {
//   e.preventDefault();

//   // console.log(loginInput);

//   let loginDetails = JSON.parse(localStorage.getItem("userdata"));

//   // console.log(loginDetails);

//   const { email, password } = loginInput;

//   if (email && password) {
//     let flag = false;
//     let currentUser;

//     for (let i = 0; i < loginDetails.length; i++) {
//       if (
//         loginDetails[i].email === email &&
//         loginDetails[i].password === password
//       ) {
//         flag = true;
//         currentUser = loginDetails[i];
//         break;
//       }
//     }

//     if (flag) {
//       alert("login success");
//       // route("/");
//       login(currentUser);
//       hideLoginModal();
//       hideRegisterModal();
//     } else {
//       setLoginInput({ email: "", password: "" });
//       alert("invalid details");
//     }
//   } else {
//     alert("fill all the fields");
//   }
// };
