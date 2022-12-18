// import { useState } from "react";
import NavigationItem from "./NavigationItem";
// import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHive } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const navigationItems = [
  { name: "Početna", link: "/", icon: <FaHome /> },
  { name: "O nama", link: "/#about", icon: <FaInfo /> },
  { name: "Proizvodi", link: "/#products", icon: <FaHive /> },
  { name: "Kontakt", link: "/contact", icon: <FaPhone /> },
];

const NavigationItems = ({ showNavMobile, className, onClick }) => {
  const variants = {
    hidden: { x: showNavMobile ? 0 : -500 },
    shown: { x: 0 },
  };
  const items = navigationItems.map((item, index) => (
    // className za mobilni
    <NavigationItem key={index} index={index} className={className} onClick={onClick} showNavMobile={showNavMobile}>
      {item}
    </NavigationItem>
  ));

  return (
    <motion.ul
      className={!className ? `navigation-items` : className}
      variants={variants}
      initial="hidden"
      animate="shown"
      transition={{
        duration: showNavMobile ? 0 : 2,
        delayChildren: showNavMobile ? 0 : 1,
        staggerChildren: showNavMobile ? 0.1 : 0.2,
      }}
    >
      {items}
    </motion.ul>
  );
};

export default NavigationItems;
