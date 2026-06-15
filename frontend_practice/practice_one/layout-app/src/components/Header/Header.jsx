import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";

function Header() {
  return (
    <div className="header">
      {/* <div className="logo-img">
        <img src={logo} alt="logo" />
      </div> */}

      <div className="header-options">
        <h5>Syed Zulkharnain</h5>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
