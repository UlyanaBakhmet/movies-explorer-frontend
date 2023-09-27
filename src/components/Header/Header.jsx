import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import closeIcon from "../../images/closeButton.svg";
import burgerMenu from "../../images/burger.svg";

export default function Header ({ isLoggedIn }) {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMobileNavOpen = () => {
    const menu = document.getElementById("menu");
    menu.classList.add("mobile");
    setToggleMenu(true);
  };

  const handleMobileNavClose = () => {
    const menu = document.getElementById("menu");
    menu.classList.remove("mobile");
    setToggleMenu(false);
  };

  return (
    <header
      className={
        location.pathname === "/"
          ? "header header_theme_blue"
          : "header header_theme_black"
      }
    >
      <Logo />
      <Navigation
        isLoggedIn={isLoggedIn}
        toggleMenu={toggleMenu}
        handleMobileNavClose={handleMobileNavClose}
      />
      {isLoggedIn ? (
        <>
          {toggleMenu ? (
            <img
              src={closeIcon}
              alt="Закрыть всплывающее меню"
              className="navigation__menu-icon navigation__menu-icon_type_close"
              onClick={handleMobileNavClose}
            />
          ) : (
            <img
              src={burgerMenu}
              alt="Открыть всплывающее меню"
              className="navigation__menu-icon navigation__menu-icon_type_burger"
              onClick={handleMobileNavOpen}
            />
          )}
        </>
      ) : (
        ""
      )}
    </header>
  );
}