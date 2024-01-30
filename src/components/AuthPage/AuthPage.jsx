import React from "react";
import Logo from "../Logo/Logo";
import "./AuthPage.css";

export default function AuthPage({
  isLoading,
  title,
  name,
  children,
  onSubmit,
  buttonText,
  isDisabled
}) {

  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <Logo />
        <h1 className="auth-page__title">{title}</h1>
        <form className="auth-page__form" name={name} onSubmit={onSubmit}>
          <fieldset className="auth-page__fieldset">{children}</fieldset>
          <button
            className={`auth-page__button ${
              isDisabled ? "auth-page__button_disabled" : ""
            }`}
            type="submit"
            disabled={isDisabled || isLoading }
          >
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}