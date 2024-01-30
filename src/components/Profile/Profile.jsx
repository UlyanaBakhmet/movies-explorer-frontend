import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { emailValidator, nameValidator } from "../../utils/validator";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Profile.css";

export default function Profile({
  handleSignOut,
  onUpdateUser,
  setServerError,
  setOkMessage,
  updateProfile,
}) {
  const { values, handleChange, setValues, isValid, setIsValid } =
    useFormAndValidation();
  const currentUserValues = useContext(CurrentUserContext);
  const isCurrentUserValues =
    (values.name === currentUserValues.name &&
      values.email === currentUserValues.email) ||
    !nameValidator(values.name).activeButton ||
    !emailValidator(values.email).activeButton;

  const [showSaveButton, setShowSaveButton] = React.useState(false);

  React.useEffect(() => {
    setOkMessage("");
  }, [setServerError, setOkMessage]);

  React.useEffect(() => {
    setValues({
      name: currentUserValues.name,
      email: currentUserValues.email,
    });
    setIsValid(true);
  }, [currentUserValues, setValues]);

  React.useEffect(() => {
    if (isCurrentUserValues) {
      setIsValid(false);
    }
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isCurrentUserValues) {
      onUpdateUser({ name: values.name, email: values.email });
    } else {
      return;
    }
    setShowSaveButton(false);
  }

  function handleShowSaveButton(evt) {
    evt.preventDefault();
    setShowSaveButton(true);
    setOkMessage("");
  }

  return (
    <section className="profile">
      <Helmet>
        <title>Аккаунт</title>
      </Helmet>
      <h1 className="profile__header">Привет, {currentUserValues.name}!</h1>
      <form
        className={`profile__form ${!isValid}`}
        onSubmit={handleSubmit}
        id="profile-form"
        noValidate
      >
        <fieldset className="profile__fieldset">
          <label htmlFor="name" className="profile__label">
            Имя
          </label>
          <input
            className="profile__input"
            name="name"
            id="name"
            autoComplete="off"
            type="name"
            minLength={2}
            maxLength={30}
            defaultValue={currentUserValues.name}
            required
            onChange={handleChange}
            disabled={!showSaveButton}
            placeholder="Ваше имя"
          />
        </fieldset>
        <span className={`profile__input-error profile__input-error_active`}>
          {nameValidator(values.name).error}
        </span>

        <fieldset className="profile__fieldset">
          <label htmlFor="email" className="profile__label">
            E-mail
          </label>
          <input
            className="profile__input"
            name="email"
            id="email"
            autoComplete="off"
            type="email"
            minLength={2}
            maxLength={30}
            defaultValue={currentUserValues.email}
            required
            onChange={handleChange}
            disabled={!showSaveButton}
            placeholder="Ваш e-mail"
          />
        </fieldset>
        <span className={`profile__input-error profile__input-error_active`}>
          {emailValidator(values.email).error}
        </span>
        <div className="profile__buttons-cover">
          {updateProfile && (
            <span
              className={`profile__update-message ${
                updateProfile === "success" ? "success" : "error"
              }`}
            >
              {updateProfile === "success"
                ? "Профиль успешно обновлен"
                : "Ошибка при обновлении профиля!!!"}
            </span>
          )}
          {showSaveButton ? (
            <button
              type="submit"
              onSubmit={handleSubmit}
              className={`profile__save ${
                !isValid ? "profile__save_disabled" : ""
              }`}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className="profile__register"
              onClick={handleShowSaveButton}
            >
              Редактировать
            </button>
          )}

          <Link to="/" className="profile__exit" onClick={handleSignOut}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}
