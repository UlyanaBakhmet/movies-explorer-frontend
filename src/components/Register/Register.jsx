import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

export default function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__container">
          <Logo />
          <h1 className="register__header">Добро пожаловать!</h1>
          <label className="register__label" htmlFor="name">
            Имя
            <input
              className="register__input"
              type="name"
              id="name"
              name="name"
              minLength="2"
              maxLength="30"
              required
              placeholder="Ульяна"
              autoComplete="off"
            />
          </label>

          <label className="register__label" htmlFor="email">
            E-mail
            <input
              className="register__input"
              type="email"
              id="email"
              name="email"
              minLength="2"
              maxLength="30"
              required
              placeholder="kotic@yandex.ru"
              autoComplete="off"
            />
          </label>

          <label className="register__label" htmlFor="password">
            Пароль
            <input
              className="register__input"
              type="password"
              name="password"
              id="password"
              minLength="2"
              maxLength="30"
              required
              placeholder="******"
              autoComplete="off"
            />
            <span className="register__error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="register__container">
          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
          <p className="register__question">
            Уже зарегистрированы?{" "}
            <Link to={"/signin"} className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
