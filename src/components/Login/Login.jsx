import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import AuthInput from "../AuthInput/AuthInput";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { emailValidator } from "../../utils/validator";
import "./Login.css";

export default function Login({ handleLogin }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <section className="login">
      <Helmet>
        <title>Вход</title>
      </Helmet>

      <AuthPage
        title="Рады видеть!"
        name="login"
        buttonText={"Войти"}
        onSubmit={handleSubmit}
        isDisabled={!isValid ? true : ""}
      >
        <AuthInput
          labelClassName="auth-page__label"
          labelText="E-mail"
          name="email"
          id="email"
          type="email"
          inputClassName="auth-page__input"
          required
          placeholder="pochta@yandex.ru"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span
          className={`login__error ${
            isValid ? "" : "login__error login__error_active"
          }`}
        >
          {emailValidator(values.email).error}
        </span>

        <AuthInput
          labelClassName="auth-page__label"
          labelText="Пароль"
          name="password"
          id="password"
          type="password"
          inputClassName="auth-page__input"
          minLength="2"
          maxLength="30"
          required
          placeholder="Введите ваш пароль"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span
          className={`login__error ${
            isValid ? "" : "login__error login__error_active"
          }`}
        >
          {errors.password}
        </span>
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
}
