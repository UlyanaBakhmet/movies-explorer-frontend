import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import "./AuthPage.css";

export default function AuthPage({
  title,
  name,
  children,
  onSubmit,
  buttonText,
}) {
  return (
    <div className="auth-page">
    <div className="auth-page__container">
      <Logo />
      <h1 className="auth-page__title">{title}</h1>
      <form
        className="auth-page__form"
        name={name}
        onSubmit={onSubmit}
      >
        <fieldset className="auth-page__fieldset">{children}</fieldset>
        <Button className="auth-page__button" type="submit" text={buttonText} />
      </form>
    </div>
    </div>
  );
}
