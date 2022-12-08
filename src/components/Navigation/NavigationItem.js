import { NavLink, useNavigate } from "react-router-dom";

import { Link } from "react-scroll";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";

const NavigationItem = (props) => {
  // console.log("Render navigavija");

  const { name, link, icon } = props.children;

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
    <li
      className={props.className ? null : `navigation-item ${mouseNavOver && !mouseLinkOver ? "opacity" : " "}`} // className za mobilni
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={onClickHandler}
    >
      {/* {link !== "about" && link !== "products" ? (
        <NavLink to={link}>{name}</NavLink>
      ) : (
        <Link to={link} spy={true} smooth={true} offset={-10} duration={500}>
          {name}
        </Link>
      )} */}
      <span className="navigation-item__icon hide-icon_for-desktop">{icon}</span>
      {name}
    </li>
  );
};
export default NavigationItem;
