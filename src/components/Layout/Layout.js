import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  const location = useLocation();

  return (
    <Fragment>
      <Navigation secondLogo={location.pathname.includes("contact")} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
