import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";

const NavigationItem = (props) => {
  // console.log("Render navigavija");

  const { name, link } = props.children;

  const [mouseLinkOver, setMouseLinkOver] = useState(false);
  const mouseNavOver = useSelector((state) => state.ui.mouseNavOver);
  const dispatch = useDispatch();

  const mouseOverHandler = function (e) {
    dispatch(uiActions.mouseOver(true));
    setMouseLinkOver((prevState) => !prevState);
  };
  const mouseLeaveHandler = function (e) {
    dispatch(uiActions.mouseOver(false));
    setMouseLinkOver((prevState) => !prevState);
  };

  return (
    <li
      className={`navigation-item ${mouseNavOver && !mouseLinkOver ? "opacity" : " "}`}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {link !== "about" && link !== "products" ? (
        <NavLink to={link}>{name}</NavLink>
      ) : (
        <Link to={link} spy={true} smooth={true} offset={-10} duration={500}>
          {name}
        </Link>
      )}
    </li>
  );
};
export default NavigationItem;
