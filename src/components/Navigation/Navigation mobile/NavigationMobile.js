import React, { useEffect } from "react";
import "../../../sass/components/_navigation-mobile.scss";
import NavigationItems from "../NavigationItems";
import { motion, useAnimationControls } from "framer-motion";

const variants = {
  shown: { x: 0, transition: { duration: 0.3, ease: "linear" } },
  hidden: { x: 300, transition: { duration: 0.1, ease: "linear" } },
};
const NavigationMobile = ({ showNavMobile, onClick }) => {
  const animateNav = useAnimationControls();

  if (showNavMobile) {
    animateNav.start("shown");
  } else {
    animateNav.start("hidden");
  }
  return (
    <motion.div className={`navigation-mobile`} variants={variants} initial="shown" animate={animateNav}>
      {showNavMobile && (
        <NavigationItems className={"navigation-mobile__items"} onClick={onClick} showNavMobile={showNavMobile} />
      )}
    </motion.div>
  );
};

export default NavigationMobile;
