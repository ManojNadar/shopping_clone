import React, { useContext, useState } from "react";
import "../styles/ProfileCss/Profile.css";
import axios from "axios";
import toast from "react-hot-toast";
import { MyContext } from "../Context/ContextContainer";

const ProfileModal = ({ setProfileModal }) => {
  const [prevValue, setPrevValue] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const { login } = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrevValue({ ...prevValue, [name]: value });
  };

  const submitUpdateProfileDetails = async (e) => {
    e.preventDefault();

    const { name, password, confirmPassword } = prevValue;

    if (name && password && confirmPassword) {
      if (password === confirmPassword) {
        const token = JSON.parse(localStorage.getItem("shoppingToken"));
        const response = await axios.post("http://localhost:8000/editprofile", {
          token,
          prevValue,
        });

        if (response.data.success) {
          const userData = response.data.updateUser;
          login(userData, token);
          toast.success(response.data.message);
          setProfileModal(false);
        }
      } else {
        toast.warn("password doesnot match");
      }
    } else {
      toast.warn("all fields are mandatory");
    }
  };
  return (
    <form
      style={{ position: "relative" }}
      onSubmit={submitUpdateProfileDetails}
    >
      <button
        style={{ position: "absolute", right: "7%", top: "5%", width: "5%" }}
        onClick={() => setProfileModal(false)}
      >
        x
      </button>

      <div className="ediContainer">
        <h3>Verify Login Password</h3>

        <input
          type="text"
          placeholder="update Name"
          onChange={handleChange}
          name="name"
          value={prevValue.name}
        />
        <br />
        <input
          type="password"
          placeholder="update password"
          onChange={handleChange}
          value={prevValue.password}
          name="password"
        />

        <br />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          value={prevValue.confirmPassword}
          name="confirmPassword"
        />
        <br />
        <input type="submit" value="Update Details" />
      </div>
    </form>
  );
};

export default ProfileModal;
