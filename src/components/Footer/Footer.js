import React from "react";
import "../../sass/components/_footer.scss";
import Logo from "../Logo/Logo";
import Logo2 from "../Logo/Logo2";

const Footer = (props) => {
  return (
    <div className={`footer ${props.secondStyle && "footer__second-style"}`}>
      <div className="footer__logo">
        <Logo />
        <Logo2 />
      </div>
      <div className="footer__address">
        <p>
          Pčelarstvo <b> Jović </b>
          <br />
          Hase bb, 76300 Bijeljina, BiH. <br />
          Tel: +387 65 123 456
          <br /> E-mail: jovic@gmail.com
        </p>
      </div>
      <div className="footer__copyright">
        Copyright © 2022 Pčelarstvo Jović. Sva prava zadržana. <br />
        Web design: Jovan Puhalo
      </div>
    </div>
  );
};

export default Footer;
