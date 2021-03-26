import React from "react";
import Footer from "../../footer/topfooter/Footer";
import Name from "../Name/Name";
import "./ProfileBox.css";
import profilepic from "./profilepic.jpg";

const ProfileBox = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        <img src={profilepic} alt="displaypicture" className="profile-pic" />

        <h1 className="profile-name">Manoj Kumar M</h1>
        <p className="profile-subtitle">Computer Science Student</p>
      </div>
      <div className="profile-info">
        <Name />
        <Footer />
      </div>
    </div>
  );
};

export default ProfileBox;
