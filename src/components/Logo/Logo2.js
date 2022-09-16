import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import "../../sass/components/_logo2.scss";

const Logo2 = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="logo2">
      <GiTreeBeehive className="logo2__icon" />
      <GiTreeBeehive className="logo2__icon hide-desktop hide-contact" />
      <div>
        <span>PČELARSTVO </span>
        <span> JOVIĆ</span>
      </div>
      <GiTreeBeehive className="logo2__icon hide-desktop hide-contact" />
      <GiTreeBeehive className="logo2__icon hide-desktop hide-contact" />
    </div>
  );
};

export default Logo2;
