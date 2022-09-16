import React from "react";
import "../../../sass/components/_navigation-mobile.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";

const NavigationMobile = ({ className, onClick }) => {
  return (
    <div className={`navigation-mobile ${className}`}>
      <div>
        <div className="navigation-mobile__logo">
          <Logo />
        </div>
        <div
          className="navigation-mobile__close-button"
          onClick={onClick}
          // onTransitionEndCapture={() => setShow(true)}
        ></div>
      </div>
      <NavigationItems className={"navigation-mobile__items"} onClick={onClick} />
    </div>
  );
};

export default NavigationMobile;
