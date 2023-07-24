import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const { login, state } = useContext(MyContext);

  const [profileModal, setProfileModal] = useState(false);

  const [userData, setUserData] = useState({});

  console.log(userData);

  const route = useNavigate();
  const currentuser = JSON.parse(localStorage.getItem("currentuser"));

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (!currentuser) {
      route("/");
    }

    const regUser = JSON.parse(localStorage.getItem("Users"));
    if (currentuser && regUser) {
      for (var i = 0; i < regUser.length; i++) {
        if (regUser[i].email == currentuser.email) {
          setUserData(regUser[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!state?.user) {
      route("/login");
    }
  }, [state]);

  const openEditProfileModal = () => {
    setProfileModal(true);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.userName && userData.password && userData.cPassword) {
      if (userData.password === userData.cPassword) {
        const currentuser = JSON.parse(localStorage.getItem("currentuser"));
        const regUser = JSON.parse(localStorage.getItem("userdata"));

        let flag = false;
        for (let i = 0; i < regUser.length; i++) {
          if (regUser[i].email === currentuser.email) {
            regUser[i].userName = userData.userName;
            regUser[i].password = userData.password;
            regUser[i].cPassword = userData.cPassword;
            currentuser.userName = userData.userName;
            currentuser.password = userData.password;
            currentuser.cPassword = userData.cPassword;

            flag = true;
          }
        }

        if (flag) {
          login(currentuser);
          localStorage.setItem("currentuser", JSON.stringify(currentuser));
          localStorage.setItem("userdata", JSON.stringify(regUser));
          alert("profile updated");
          setUserData({});
          setProfileModal(false);
        } else {
          alert("profile updated");
        }
      } else {
        alert("password does not match");
      }
    } else {
      alert("please fill all the fields");
    }
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>My PROFILE</h2>

      {profileModal ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            top: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProfileModal
            setProfileModal={setProfileModal}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            userData={userData}
          />
        </div>
      ) : null}

      {currentuser ? (
        <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
          <h2 style={{ backgroundColor: "gold" }}>
            Name : {currentuser.userName}
          </h2>
          <h2 style={{ backgroundColor: "gold" }}>
            Email : {currentuser.email}{" "}
          </h2>
          <button
            style={{
              width: "50%",
              margin: "auto",
              height: "50px",
              backgroundColor: "skyblue",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
            onClick={openEditProfileModal}
          >
            Edit Profile
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
