import React, { Fragment } from "react";
import "../../sass/layouts/_header.scss";
import "../../sass/components/_header-title.scss";
import Navigation from "../Navigation/Navigation";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const options = {
    root: null,
    threshold: 0,
    initialInView: true,
    rootMargin: "-100px",
    // triggerOnce: true,
  };
  const { ref: navRef, inView } = useInView(options);

  return (
    <Fragment>
      <Navigation stickyClass={"sticky"} inView={inView} />
      <div className="header" ref={navRef}>
        <div className="title_container">
          <div className="header_title">
            <div className="header_title__bisnis">
              <span> PČELARSTVO</span>
              <div className="header_title__bisnis--background"></div>
            </div>
            <div className="header_title__name">
              <span>JOVIĆ</span>
              <div className="header_title__name--background"></div>
            </div>
          </div>
          <div className="header_slogan"> ne ostavlja mjesta pitanju o kvalitetu!</div>
        </div>
        {/* <div className="header_part1"></div>
        <div className="header_part2"></div>
        <div className="background-two"></div> */}
      </div>
    </Fragment>
  );
};

export default Header;
