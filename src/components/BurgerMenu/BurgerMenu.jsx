import { NavLink } from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
import "./BurgerMenu.css";

export default function MobileNavigation({ isActive, handlerClose }) {
  return (
    <section className={`burger ${isActive ? "burger_active" : ""}`}>
      <button className="burger__close-button" onClick={handlerClose} />
      <nav
        className={`burger__menu ${!isActive ? "burger__menu_notactive" : ""}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `burger__link ${isActive ? "burger__link_active" : ""}`
          }
          onClick={handlerClose}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `burger__link ${isActive ? "burger__link_active" : ""}`
          }
          onClick={handlerClose}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `burger__link ${isActive ? "burger__link_active" : ""}`
          }
          onClick={handlerClose}
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink
          to="/profile"
          className="burger__button-profile"
          onClick={handlerClose}
        >
          <p className="burger__button-profile-paragraph">Аккаунт</p>
          <img
            className="burger__button-profile-img"
            src={accountIcon}
            alt="Аккаунт"
          />
        </NavLink>
      </nav>
    </section>
  );
}
