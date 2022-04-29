import React from "react";
import logo from "../images/logo.png";
import profile from "../images/profile.jpg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>BLOG APP</span>
      </div>
      <div className="search">
        <input type="text" name="search" id="searchInput" placeholder="search..." />
      </div>
      <div className="profile">
        <span>Yogesh Pal</span>
        <img src={profile} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
