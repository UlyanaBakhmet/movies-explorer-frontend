import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import AuthInput from "../AuthInput/AuthInput";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { nameValidator, emailValidator } from "../../utils/validator";
import "./Register.css";

export default function Register({ handleRegister }) {

  const { values, errors, isValid, handleChange, handleChangeEmail, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
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
        buttonText={"Зарегистрироваться"}
        isDisabled={!isValid ? true : ""}
      >
        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="Имя"
          type="text"
          name="name"
          id="name"
          inputClassName="register__auth-page-input"
          minLength={2}
          maxLength={30}
          required
          placeholder="Виталий"
          value={values.name || ""}
          onChange={handleChange}
        />
        <span
          className={`register__auth-error ${
            isValid ? "" : "register__auth-error register__auth-error_active"
          }`}
        >
          {nameValidator(values.name).error}
        </span>

        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="E-mail"
          type="email"
          name="email"
          id="email"
          inputClassName="register__auth-page-input"
          required
          placeholder="pochta@yandex.ru"
          value={values.email || ""}
          onChange={handleChangeEmail}
        />
        <span
          className={`register__auth-error ${
            isValid ? "" : "register__auth-error register__auth-error_active"
          }`}
        >
          {emailValidator(values.email).error}
        </span>

        <AuthInput
          labelClassName="register__auth-page-label"
          labelText="Пароль"
          type="password"
          name="password"
          id="password"
          inputClassName="register__auth-page-input"
          minLength={5}
          maxLength={30}
          required
          placeholder="***************"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span
          className={`register__auth-error ${
            isValid ? "" : "register__auth-error register__auth-error_active"
          }`}
        >
          {errors.password}
        </span>
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