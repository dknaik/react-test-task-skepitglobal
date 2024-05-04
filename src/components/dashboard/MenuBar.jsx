import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContextProvider } from "../context/Context";

const MenuBar = ({ explorer, onHide, expand, setExpandHandler }) => {
  const ref = useRef(null);
  const { setAppData } = useContext(AppContextProvider);
  const onMouseEnter = () => {
    setExpandHandler(true);
  };
  const onMouseLeave = () => {
    setExpandHandler(false);
  };
  const getName = (name) => {
    setAppData((prevData) => {
      return [...prevData, name];
    });
  };

  if (explorer.isFolder) {
    return (
      <>
        <ul className="options-container">
          <li
            ref={ref}
            onMouseEnter={() => onMouseEnter(explorer.name)}
            onMouseLeave={() => onMouseLeave(explorer.name)}
            onClick={() => getName(explorer.name)}
          >
            {explorer.name}
          </li>
        </ul>
        <div className="submenu" style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((exp, index) => {
            return (
              <ul key={index}>
                <li style={{ marginTop: "10px" }}>
                  <MenuBar explorer={exp} onHide={onHide} />
                </li>
              </ul>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <ul className="options-container">
        <li
          onClick={() => getName(explorer.name)}
          onMouseEnter={() => onMouseEnter(explorer.name)}
        >
          {explorer.name}
        </li>
      </ul>
    );
  }
};

export default MenuBar;
