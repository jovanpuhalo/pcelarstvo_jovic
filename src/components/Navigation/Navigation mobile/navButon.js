import React from "react";
import "../../../sass/components/_navButton.scss";
const NavButon = ({ onClick }) => {
  return (
    <div className="navi_mobile_button" onClick={onClick}>
      <div className="navi_mobile_button_button"></div>
    </div>
  );
};

export default NavButon;
