import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import AuthInput from "../AuthInput/AuthInput";
import "./Login.css";

const Login = ({ toggleMenu }) => {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/movies", { replace: true });
    toggleMenu();
  }

  return (
    <section className="login">
      <AuthPage
        title="Рады видеть!"
        name="login"
        buttonText="Войти"
        onSubmit={handleSubmit}
      >
        <AuthInput
          labelClassName="auth-page__label"
          labelText="E-mail"
          name="email"
          id="email"
          type="email"
          inputClassName="auth-page__input"
          placeholder="pochta@yandex.ru"
        />
        <AuthInput
          labelClassName="auth-page__label"
          labelText="Пароль"
          name="password"
          id="password"
          type="password"
          inputClassName="auth-page__input"
          placeholder=""
        />
      </AuthPage>
      <div className="login__registration">
        <p className="login__registration-paragraph">
          Ещё не зарегистрированы?
        </p>
        <Link to="/signup" className="login__registration-button link">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

export default Login;
