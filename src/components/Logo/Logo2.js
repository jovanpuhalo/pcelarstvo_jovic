import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import "../../sass/components/_logo2.scss";

const Logo2 = () => {
  return (
    <div className="logo2">
      <GiTreeBeehive className="logo2__icon" />
      <div>
        <span>PČELARSTVO </span>
        <span> JOVIĆ</span>
      </div>
    </div>
  );
};

export default Logo2;
