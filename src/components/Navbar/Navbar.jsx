import React, { useState } from "react";
import "./Navbar.scss";
import modeIcon from "../../assets/sun.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
const navLinks = [
    { id: "home", label: "home" },
    { id: "about", label: "acerca" },
    { id: "work", label: "proyectos" },
    { id: "skills", label: "skills" },
    { id: "testimonial", label: "testimonios" },
    { id: "contact", label: "contacto" },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={images.app_logo} alt="logo" className="app__logo" />
      </div>
      <ul className={`app__navbar-links ${mode}`}>
         {navLinks.map(({ id, label }) => (
          <li className={`app__flex  p-text ${mode}`} key={`link-${id}`}>
            <div />
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      
      </ul>
      <div className={`app__navbar-menu ${mode} `}>
        <HiMenuAlt4 onClick={(e) => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className={`app__navbar-links ${mode}`}>
                 {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setToggle(false)}>
                    {label}
                  </a>
                </li>
              ))}
             
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
