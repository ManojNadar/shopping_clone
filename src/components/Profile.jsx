import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextContainer";
import ProfileModal from "./ProfileModal";
import "../styles/ProfileCss/Profile.css";
import user from "../Assets/userDp.png";
import { AiFillEdit } from "react-icons/ai";
import Footer from "./Footer";

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
        if (regUser[i].email === currentuser.email) {
          setUserData(regUser[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!state?.user) {
      route("/");
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
    <>
      <Navbar />

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
            zIndex: "150",
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

      <div id="profileContainer">
        <div className="mainProfileContainer">
          <div className="leftProfileSection">
            <div className="leftTopProfileDetails">
              <div className="leftprofIcon">
                <img src={user} alt="" />
              </div>

              {currentuser ? (
                <div className="leftprofDetails">
                  <div
                    onClick={openEditProfileModal}
                    style={{ position: "absolute", right: "5%", top: "7%" }}
                  >
                    <AiFillEdit />
                  </div>
                  <p>Name : {currentuser.userName}</p>
                  <p>Email : {currentuser.email} </p>
                  <p>Mobile : 1234567890</p>
                </div>
              ) : (
                <div className="leftprofDetails">
                  <p>Name : </p>
                  <p>Email : </p>
                  <p>Mobile : </p>
                </div>
              )}
            </div>

            <div className="leftNavigationsProfile">
              <div
                onClick={openEditProfileModal}
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid grey",
                  padding: "4% 0",
                  fontSize: "0.85em",
                }}
              >
                <p>Change Password</p>
              </div>

              <p>My Offers</p>
              <p>My First Citizen Points</p>
              <p>My Wallet</p>
              <p>My Transaction</p>
              <p>My Wardrobe</p>
              <p>My Address Book</p>
              <p>Logout</p>
              <p>DeleteProfile</p>
            </div>
          </div>

          <div className="rightProfileSection">
            {currentuser ? (
              <div className="personalInfo">
                <h2>Personal Information</h2>

                <div>
                  <p>Name </p>
                  <p>{currentuser.userName}</p>
                </div>
                <div>
                  <p>Email address </p>
                  <p>{currentuser.email}</p>
                </div>
                <div>
                  <p>Mobile Number </p>
                  <p>1234567890</p>
                </div>
                <div>
                  <p>Gender </p>
                  <p>Male </p>
                </div>

                <button className="editProfBtn" onClick={openEditProfileModal}>
                  Edit Profile
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
