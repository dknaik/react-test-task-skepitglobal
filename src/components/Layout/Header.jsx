import React from "react";
import "../../styles/header.css";
import Group from "../../../public/images/Group.png";
import Vectorwifi from "../../../public/images/Vector wifi.png";
import speaker from "../../../public/images/Vector.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <FaSearch color="white" size={18} />
        </li>
        <li>
          <FaBell color="white" size={18} />
        </li>
        <li>
          <img src={Vectorwifi}  />
        </li>
        <li>
          <img src={speaker} />
        </li>
        <li>
          <img src={Group} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
