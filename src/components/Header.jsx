import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="login-info">
        <span className="username">John Doe</span>
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
