import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/dashboard.css";
import DropDownMenu from "./DropDownMenu";
import { AppContextProvider } from "../context/Context";
import Clock from "../clock/Clock";
import { apps } from "../../fakerData/faker";

const Dashboard = () => {
  const { appData } = useContext(AppContextProvider);
  const [isVisible, setIsVisible] = useState(false);
  const [expand, setExpand] = useState(false);

  const [allApp, setAllApp] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHideMenu = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
        setExpand(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getApps = apps.filter((val) => appData?.includes(val.name));
    setAllApp(getApps);
  }, [appData]);

  const setExpandHandler= (val)=>{
    setExpand(val)
  }
  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ height: "100vh", position: "relative", width: "100vw" }}
    >
      <Clock />

      <div>
        <DropDownMenu
          xPos={position.x}
          yPos={position.y}
          isVisible={isVisible}
          onHide={handleHideMenu}
          ref={menuRef}
          expand={expand}
          setExpandHandler={setExpandHandler}
        />
      </div>

      {allApp.length > 0 && (
        <div className="app-container">
          {allApp.map((val, index) => (
            <img key={index} src={val.img} alt={val.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
