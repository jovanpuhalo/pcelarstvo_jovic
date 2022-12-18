import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import "../../sass/layouts/_navigation.scss";
import NavButon from "./Navigation mobile/navButon";
import { useState, useEffect, useCallback, memo } from "react";
import Logo2 from "../Logo/Logo2";
import NavigationMobile from "./Navigation mobile/NavigationMobile";
import { Backdrop } from "../UI/Modal";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

const Navigation = ({ stickyClass, inView, secondLogo }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showNavMobile, setShowNavMobile] = useState(false);

  // const scrollY = useSelector((state) => state.ui.scrollY);
  // const scrollYPrev = useSelector((state) => state.ui.scrollYPrev);

  const handleResize = useCallback(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    setShowNavMobile(null); //u slucaju resizea da ne bi doslo do translacije menija
  }, []);

  const onClickHandler = () => {
    if (showNavMobile) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowNavMobile((prev) => !prev);
    // document.body.style.overflow = "hidden";
  };
  const onCloseHandler = () => {
    setShowNavMobile(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  // ? `navigation navigation--sticky ${!inView && scrollYPrev > scrollY && "sticky"}`

  let navClass =
    stickyClass === "sticky"
      ? `navigation navigation--sticky ${!inView && "sticky"} `
      : `navigation ${showNavMobile && "color"}`;
  return (
    <>
      {showNavMobile && <Backdrop onClose={onCloseHandler} />}
      <nav className={navClass}>
        {dimensions.width <= 500 && <NavButon showNavMobile={showNavMobile} onClick={onClickHandler} />}
        {secondLogo ? <Logo2 /> : stickyClass ? <Logo logoStycky={stickyClass} /> : ""}
        {dimensions.width > 500 && <NavigationItems />}
      </nav>
      {dimensions.width <= 500 && (
        <NavigationMobile
          showNavMobile={showNavMobile}
          // className={showNavMobile ? "translateIn" : showNavMobile === false ? "translateOut" : ""}
          onClick={onCloseHandler}
        />
      )}
    </>
  );
};
export default memo(Navigation);

// const [dimensions, setDimensions] = useState({
// height: window.innerHeight,
//   width: window.innerWidth,
// });
// function handleResize() {
//   setDimensions({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });
// }
