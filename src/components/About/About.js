import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import "../../sass/layouts/_about_layout.scss";
import "../../sass/components/_about.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const About = () => {
  // console.log("Komponenta about");
  const options = {
    root: null,
    threshold: 1,
    rootMargin: -80 + "px",
    triggerOnce: true,
  };
  const [scrollY, setScrollY] = useState(0);
  // const [position, setPosition] = useState();
  // const referenca = useRef();
  const dispatch = useDispatch();

  const { ref: titleRef, inView: inViewTitle } = useInView(options);
  const { ref: textRef, inView: inViewText } = useInView({ ...options, threshold: 0.5 });
  const { ref: buttonRef, inView: inViewButton } = useInView(options);

  const handleResize = useCallback(
    function (e) {
      // console.log(e.scrollLeft);
      const value = window.scrollY;
      setScrollY(value);
      dispatch(uiActions.setScrollY(value));
    },
    [dispatch]
  );
  useEffect(() => {
    // setPosition(referenca.current.getBoundingClientRect());
    // referenca.current.getBoundingClientRect();
    window.addEventListener("scroll", handleResize);
  }, [handleResize]);
  return (
    <div className="container_about" id="about">
      <div className="about">
        <div className={`about__title ${inViewTitle && "about__title--animate"}`} ref={titleRef}>
          Ko smo mi?
        </div>
        <div className={`about__text ${inViewText && "about__text--animate"}`} ref={textRef}>
          Pčelarstvo Jović Bijeljina, osnovano je 2018. godine sa sljedećim osnovnim ciljevima:
          <br /> • proizvodnje meda i pčelinjih proizvoda; <br /> • promet pčelarske opreme, pribora i hrane za pčele;{" "}
          <br /> • edukacije pčelara i pružanja konsalting usluga u oblasti pčelarstva.
        </div>
        {/* <div className="button_container"> */}
        <Link to="/" className={`about__button ${inViewButton && "about__button--animate"}`} ref={buttonRef}>
          Saznaj više
        </Link>
        {/* </div> */}
      </div>
      <div className="about__background" style={{ transform: `translateY(-${scrollY / 4}px)` }}></div>
    </div>
  );
};

export default About;