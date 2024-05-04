import React, { forwardRef, useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import { menuItems } from "../../fakerData/faker";
const DropDownMenu = forwardRef(
  ({ xPos, yPos, isVisible, onHide, expand, setExpandHandler }, ref) => {
    const style = {
      position: "fixed",
      top: yPos,
      left: xPos,
      display: isVisible ? "block" : "none",
      backgroundColor: "white",
    };

    return (
      <div style={style} ref={ref}>
        {menuItems.map((val, index) => (
          <div key={index}>
            <MenuBar
              explorer={val}
              onHide={onHide}
              expand={expand}
              setExpandHandler={setExpandHandler}
              onMouseLeave={() => console.log("mouse left")}
            />
          </div>
        ))}
      </div>
    );
  }
);

export default DropDownMenu;
