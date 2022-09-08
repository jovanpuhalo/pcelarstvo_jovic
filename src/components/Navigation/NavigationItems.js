// import { useState } from "react";
import NavigationItem from "./NavigationItem";
// import { useSelector } from "react-redux";

const navigationItems = [
  { name: "Početna", link: "/" },
  { name: "O nama", link: "/#about" },
  { name: "Proizvodi", link: "/#products" },
  { name: "Kontakt", link: "/contact" },
];

const NavigationItems = () => {
  const items = navigationItems.map((item, index) => <NavigationItem key={index}>{item}</NavigationItem>);

  return <ul className="navigation-items">{items}</ul>;
};

export default NavigationItems;
