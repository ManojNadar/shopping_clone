import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { MyContext } from "../Context/ContextContainer";
import ProfileModal from "./ProfileModal";
import "../styles/ProfileCss/Profile.css";
import user from "../Assets/userDp.png";
import { AiFillEdit } from "react-icons/ai";
import Footer from "./Footer";

const Profile = () => {
  const [profileModal, setProfileModal] = useState(false);
  const { state } = useContext(MyContext);

  const openProfileModal = () => {
    setProfileModal(true);
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
          <ProfileModal setProfileModal={setProfileModal} />
        </div>
      ) : null}

      <div id="profileContainer">
        <div className="mainProfileContainer">
          <div className="leftProfileSection">
            <div className="leftTopProfileDetails">
              <div className="leftprofIcon">
                <img src={user} alt="" />
              </div>

              {state?.user ? (
                <div className="leftprofDetails">
                  <div
                    onClick={openProfileModal}
                    style={{ position: "absolute", right: "5%", top: "7%" }}
                  >
                    <AiFillEdit />
                  </div>
                  <p>Name : {state?.user?.name}</p>
                  <p>Email : {state?.user?.email} </p>
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
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid grey",
                  padding: "4% 0",
                  fontSize: "0.85em",
                }}
              >
                <p onClick={openProfileModal}>Change Password</p>
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
            {state?.user ? (
              <div className="personalInfo">
                <h2>Personal Information</h2>

                <div>
                  <p>Name </p>
                  <p>{state?.user?.name}</p>
                </div>
                <div>
                  <p>Email address </p>
                  <p>{state?.user?.email}</p>
                </div>
                <div>
                  <p>Mobile Number </p>
                  <p>1234567890</p>
                </div>
                <div>
                  <p>Gender </p>
                  <p>Male </p>
                </div>

                <button onClick={openProfileModal} className="editProfBtn">
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
