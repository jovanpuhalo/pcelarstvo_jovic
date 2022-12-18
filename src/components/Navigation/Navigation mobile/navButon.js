import React from "react";
import "../../../sass/components/_navButton.scss";
const NavButon = ({ onClick, showNavMobile }) => {
  console.log("render button", showNavMobile);
  return (
    <div className={`${showNavMobile ? "menu-mobile-button__close" : "menu-mobile-button__open"} `} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NavButon;
