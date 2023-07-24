import React from "react";

const ProfileModal = ({
  setProfileModal,
  handleSubmit,
  handleChange,
  userData,
}) => {
  return (
    <form style={{ position: "relative" }} onSubmit={handleSubmit}>
      <button
        style={{ position: "absolute", right: "7%", top: "5%" }}
        onClick={() => setProfileModal(false)}
      >
        x
      </button>
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "gold",
        }}
      >
        <input
          type="text"
          placeholder="update Name"
          onChange={handleChange}
          name="userName"
          value={userData.userName}
        />
        <br />
        <input
          type="password"
          placeholder="update password"
          onChange={handleChange}
          value={userData.password}
          name="password"
        />

        <br />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          value={userData.cPassword}
          name="cPassword"
        />
        <br />
        <input type="submit" value="Update Details" />
      </div>
    </form>
  );
};

export default ProfileModal;
