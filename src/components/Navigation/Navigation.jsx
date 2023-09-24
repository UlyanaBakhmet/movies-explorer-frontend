import { NavLink } from "react-router-dom";
import React from "react";
import accountIcon from "../../images/accountIcon.svg";
import "./Navigation.css";

export default function Navigation() {
  return (
    <section className="navigation">
      <nav className="navigation__wrapper">
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to={"/movies"}
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to={"/saved-movies"}
        >
          Сохраненные фильмы
        </NavLink>
      </nav>
      <NavLink className="header__account" to={"/profile"}>
        <p className="header__account-text">Аккаунт</p>
        <img
          className="header__account-icon"
          src={accountIcon}
          alt="Переход на страницу профиля"
        />
      </NavLink>
    </section>
  );
}
