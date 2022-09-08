import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import "../../sass/layouts/_navigation.scss";
import NavButon from "./Navigation mobile/navButon";
import { useState, useEffect, useCallback, memo } from "react";
import Logo2 from "../Logo/Logo2";
// import { useSelector } from "react-redux";

const Navigation = ({ stickyClass, inView, secondLogo }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // const scrollY = useSelector((state) => state.ui.scrollY);
  // const scrollYPrev = useSelector((state) => state.ui.scrollYPrev);

  const handleResize = useCallback(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  // ? `navigation navigation--sticky ${!inView && scrollYPrev > scrollY && "sticky"}`

  let navClass = stickyClass === "sticky" ? `navigation navigation--sticky ${!inView && "sticky"}` : "navigation";
  return (
    <nav className={navClass}>
      {secondLogo ? <Logo2 /> : <Logo logoStycky={stickyClass} />}
      {dimensions.width < 701 && <NavButon />}
      {dimensions.width > 700 && <NavigationItems></NavigationItems>}
    </nav>
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
