import React, { useEffect, useRef, useState } from "react";
import "../../styles/footer.css";
import logo from "../../../public/images/Logo.png";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const fileRef = useRef();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fileRef.current && !fileRef.current.contains(event.target)) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="footer">
      <div className="conversation-popup-container" ref={fileRef}>
        <span className="conversation-popup-button" onClick={togglePopup}>
          file
        </span>
        {isOpen && (
          <div className="conversation-popup">
            <div className="conversation-popup-tail"></div>
            <div className="conversation-popup-content">
              <h2> Hello!</h2>
              <p>What are you looking for?</p>
            </div>
          </div>
        )}
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Footer;
