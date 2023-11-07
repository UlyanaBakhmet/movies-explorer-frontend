import { Helmet } from 'react-helmet';
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

      <Helmet>
        <title>Регистрация</title>
      </Helmet>

      <AuthPage
        title="Добро пожаловать!"
        name="register"
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
      >
        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="Имя"
          type="text"
          name="name"
          id="name"
          inputClassName="register__auth-page-input"
          minLength="2"
          maxLength="30"
          required
          placeholder="Виталий"
        />
        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          inputClassName="register__auth-page-input"
          required
          placeholder="pochta@yandex.ru"
        />
        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
          inputClassName="register__auth-page-input"
          minLength="2"
          maxLength="30"
          required
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
