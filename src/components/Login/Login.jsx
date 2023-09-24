import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";

export default function Login() {
  return (
    <section className="login">
      <form className="login__form">
        <div className="login__container">
          <Logo />
          <h1 className="login__header">Рады видеть!</h1>
          <label className="login__label" htmlFor="email">
            E-mail
            <input
              className="login__input"
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

          <label className="login__label" htmlFor="password">
            Пароль
            <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              minLength="2"
              maxLength="30"
              required
              placeholder="******"
              autoComplete="off"
            />
          </label>
        </div>
        <div className="login__container">
          <button className="login__button" type="submit">
            Войти
          </button>
          <p className="login__question">
            Ещё не зарегистрированы?{" "}
            <Link to={"/signup"} className="login__link">
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
