import React, { useState } from "react";
import "./sidebar.css";

import logo from "../graphics/logo.png";
import campaigns from "../graphics/side bar icons/campaigns.png";
import drive from "../graphics/side bar icons/drive.png";
import team from "../graphics/side bar icons/team.png";
import production from "../graphics/side bar icons/production.png";
import list from "../graphics/side bar icons/list.png";
import settings from "../graphics/side bar icons/settings.png";
import greenArrow from "../graphics/side bar icons/green.png";
import whiteArrow from "../graphics/side bar icons/white.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="list-unstyled">
        <li id="campaign">
          <a href="#" className="nav-link">
            <img src={campaigns} alt="" />
            Campaign
            <img src={greenArrow} id="greenArrow" alt="" />
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={drive} alt="" />
            Drive
            <img src={whiteArrow} id="whiteArrow" alt="" />
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={team} alt="" />
            Boxi Team
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={production} alt="" />
            Production
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={list} alt="" />
            Fix List
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={settings} alt="" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
