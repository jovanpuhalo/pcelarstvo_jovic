import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";
import { motion } from "framer-motion";

const NavigationItem = (props) => {
  const { name, link, icon } = props.children;
  const variantsChildren = {
    hidden: {
      x: props.showNavMobile ? 150 : -150,
      rotate: props.showNavMobile ? -10 : 0,
      opacity: 0,
    },
    shown: {
      x: 0,
      opacity: 1,
    },
  };
  const [mouseLinkOver, setMouseLinkOver] = useState(false);
  const mouseNavOver = useSelector((state) => state.ui.mouseNavOver);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mouseOverHandler = function (e) {
    dispatch(uiActions.mouseOver(true));
    setMouseLinkOver((prevState) => !prevState);
  };
  const mouseLeaveHandler = function (e) {
    dispatch(uiActions.mouseOver(false));
    setMouseLinkOver((prevState) => !prevState);
  };

  const onClickHandler = () => {
    navigate(link, { replace: true });
    props.className && props.onClick(); // za manu na mobilnom tel
  };

  return (
    <motion.li
      className={props.className ? null : `navigation-item ${mouseNavOver && !mouseLinkOver ? "opacity" : " "}`} // className za mobilni
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={onClickHandler}
      variants={variantsChildren}
      transition={{ duration: props.showNavMobile ? 1 : 0.2 }}
    >
      <span className="navigation-item__icon hide-icon_for-desktop">{icon}</span>
      {name}
    </motion.li>
  );
};
export default NavigationItem;
