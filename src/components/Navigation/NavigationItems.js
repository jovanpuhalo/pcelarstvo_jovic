// import { useState } from "react";
import NavigationItem from "./NavigationItem";
// import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHive } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const navigationItems = [
  { name: "Početna", link: "/", icon: <FaHome /> },
  { name: "O nama", link: "/#about", icon: <FaInfo /> },
  { name: "Proizvodi", link: "/#products", icon: <FaHive /> },
  { name: "Kontakt", link: "/contact", icon: <FaPhone /> },
];

const NavigationItems = ({ className, onClick }) => {
  const items = navigationItems.map((item, index) => (
    // className za mobilni
    <NavigationItem key={index} className={className} onClick={onClick}>
      {item}
    </NavigationItem>
  ));

  return <ul className={!className ? `navigation-items` : className}>{items}</ul>;
};

export default NavigationItems;
