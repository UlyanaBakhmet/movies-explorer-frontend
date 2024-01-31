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
  setOkMessage,
  updateProfile,
  setUpdateProfile,
  okMessage,
  isLoading
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
    setUpdateProfile('');
    setOkMessage("");
}, [setUpdateProfile, setOkMessage]);

  React.useEffect(() => {
    setValues({
      name: currentUserValues.name,
      email: currentUserValues.email,
    });
    setIsValid(true);
}, [currentUserValues, setValues, setIsValid]);

  React.useEffect(() => {
    if (isCurrentUserValues) {
      setIsValid(false);
    }
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    setUpdateProfile('')
    if (!isCurrentUserValues) {
      onUpdateUser({ name: values.name, email: values.email });
    } else {
      return;
    }
    if (!isLoading) {
    setShowSaveButton(false);
    }
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
            disabled={!showSaveButton && !updateProfile}
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
            disabled={!showSaveButton && !updateProfile}
            placeholder="Ваш e-mail"
          />
        </fieldset>
        <span className={`profile__input-error profile__input-error_active`}>
          {emailValidator(values.email).error}
        </span>
        <div className="profile__buttons-cover">
          {showSaveButton || isLoading || updateProfile ? (
            <>
            <span
              className='profile__update-message profile__error-text'>
                {updateProfile}
            </span>
            <button
              type="submit"
              onSubmit={handleSubmit}
              disabled={!isValid || isLoading}
              className={`profile__save ${
                !isValid || isLoading ? "profile__save_disabled" : ""
              }`}
            >
              Сохранить
            </button>
          </>
          ) : (
            <>
            <span
              className='profile__update-message profile__success-message'>
                {okMessage}
            </span>
            <button
              type="button"
              className="profile__register"
              onClick={handleShowSaveButton}
            >
              Редактировать
            </button>
            </>
          )}
          <Link to="/" className="profile__exit" onClick={handleSignOut}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}
