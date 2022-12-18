import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import "../../sass/components/_logo2.scss";

const Logo2 = () => {
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
