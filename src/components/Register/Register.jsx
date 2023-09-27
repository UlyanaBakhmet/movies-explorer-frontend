import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import AuthInput from "../AuthInput/AuthInput";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/signin", { replace: true });
  }

  return (
    <section className="register">
      <AuthPage
        title="Добро пожаловать!"
        name="register"
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
      >
        <AuthInput
          labelClassName="auth-page__label"
          labelText="Имя"
          type="text"
          name="name"
          id="name"
          inputClassName="auth-page__input"
          placeholder="Виталий"
        />
        <AuthInput
          labelClassName="auth-page__label"
          labelText="E-mail"
          type="text"
          name="email"
          id="email"
          inputClassName="auth-page__input"
          placeholder="pochta@yandex.ru"
        />
        <AuthInput
          labelClassName="auth-page__label"
          labelText="Пароль"
          type="text"
          name="password"
          id="password"
          inputClassName="auth-page__input"
          placeholder="***************"
        />
      </AuthPage>
      <div className="register__login">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-button link">
          Войти
        </Link>
      </div>
    </section>
  );
}
