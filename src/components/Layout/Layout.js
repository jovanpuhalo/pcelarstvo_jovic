import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LogoAnimation from "../LogoAnimation";
import Navigation from "../Navigation/Navigation";
import "../../sass/layouts/_layout.scss";
import { delay, motion } from "framer-motion";

const Layout = (props) => {
  const location = useLocation();
  const introAnimationIsFinish = useSelector((state) => state.ui.introAnimationIsFinish);

  return (
    <div className="layout">
      {location.pathname !== "/contact" && <LogoAnimation />}
      {introAnimationIsFinish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ position: "relative" }}
        >
          <Navigation secondLogo={location.pathname.includes("contact")} />
          <main>{props.children}</main>
        </motion.div>
      )}
    </div>
  );
};

export default Layout;
