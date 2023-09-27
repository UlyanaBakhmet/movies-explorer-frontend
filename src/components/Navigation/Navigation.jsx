import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../images/accountIcon.svg";
import Button from "../Button/Button";
import "./Navigation.css";

export default function Navigation({
  isLoggedIn,
  toggleMenu,
  handleMobileNavClose,
}) {
  const location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <navigation className={toggleMenu ? "navigation__overlay" : ""}>
          <div
            className={
              location.pathname === "/"
                ? "navigation navigation_type_hidden navigation_theme_blue"
                : "navigation navigation_type_hidden navigation_theme_black"
            }
            id="menu"
          >
            <ul className="navigation__list">
              {toggleMenu && (
                <li
                  className={
                    location.pathname === "/"
                      ? "navigation__list-element navigation__list-element_active link"
                      : "navigation__list-element link"
                  }
                  onClick={handleMobileNavClose}
                >
                  <Link to="/">Главная</Link>
                </li>
              )}
              <li
                className={
                  location.pathname === "/movies"
                    ? "navigation__list-element navigation__list-element_active link"
                    : "navigation__list-element link"
                }
                onClick={handleMobileNavClose}
              >
                <Link to="/movies">Фильмы</Link>
              </li>
              <li
                className={
                  location.pathname === "/saved-movies"
                    ? "navigation__list-element navigation__list-element_active link"
                    : "navigation__list-element link"
                }
                onClick={handleMobileNavClose}
              >
                <Link to="/saved-movies">Сохранённые фильмы</Link>
              </li>
            </ul>
            <Link to="/profile">
              <div className="navigation__profile-container button">
                <p
                  className={
                    location.pathname === "/profile"
                      ? "navigation__profile-text navigation__list-element_active"
                      : "navigation__profile-text"
                  }
                >
                  Аккаунт
                </p>
                <div
                  className={
                    location.pathname === "/"
                      ? "navigation__profile-icon-container navigation__profile-icon-container_theme_blue"
                      : "navigation__profile-icon-container navigation__profile-icon-container_theme_black"
                  }
                >
                  <img
                    src={profileIcon}
                    alt="Иконка профиля"
                    className="navigation__profile-icon"
                  />
                </div>
              </div>
            </Link>
          </div>
        </navigation>
      ) : (
        <>
          <navigation className="navigation" id="menu">
            <Link className="navigation__link link" to="/signup">
              Регистрация
            </Link>
            <Link to="/signin">
              <Button
                className="navigation__button"
                text="Войти"
                type="button"
              />
            </Link>
          </navigation>
        </>
      )}
    </>
  );
}
