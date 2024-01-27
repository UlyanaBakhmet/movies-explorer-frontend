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
  serverError,
  setOkMessage,
}) {
  const currentUserValues = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useFormAndValidation();
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showSaveButton, setShowSaveButton] = React.useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
    setShowSaveButton(false);
    setShowSuccessMessage(true);
  }

  function handleShowSaveButton(evt) {
    evt.preventDefault();
    setShowSaveButton(true);
    setShowSuccessMessage(false);
  }

  React.useEffect(() => {
    setValues(currentUserValues);
  }, [currentUserValues, setValues]);

  return (
    <section className="profile">
      <Helmet>
        <title>Аккаунт</title>
      </Helmet>
      <h1 className="profile__header">Привет, {currentUserValues.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
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
          {setOkMessage ? (
            <span
              className={`profile__success-message ${
                showSuccessMessage ? "" : "profile__success-message_disabled"
              }`}
            >
              Обновление данных прошло успешно!
            </span>
          ) : (
            <span
              className={`profile__error-text ${
                serverError ? "" : "profile__error-text_disabled"
              }`}
            >
              При обновлении профиля произошла ошибка.
            </span>
          )}

          {showSaveButton ? (
            <button
              type="submit"
              onSubmit={handleSubmit}
              className={`profile__save ${
                (values.name === currentUserValues.name &&
                  values.email === currentUserValues.email) ||
                !nameValidator(values.name).activeButton ||
                !emailValidator(values.email).activeButton
                  ? "profile__save_disabled"
                  : ""
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
