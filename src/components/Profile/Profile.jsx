import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import AuthInput from "../AuthInput/AuthInput";

export default function Profile({ toggleMenu }) {
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    toggleMenu();
    navigate("/", { replace: true });
  }

  return (
    <section className="profile">
      <h1 className="profile__header">Привет, Виталий!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <AuthInput
            labelClassName="profile__label"
            labelText="Имя"
            type="text"
            id="name"
            inputClassName="profile__input"
            minLength="2"
            maxLength="30"
            placeholder="Ваше имя"
            defaultValue="Виталий"
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <AuthInput
            labelClassName="profile__label"
            labelText="E-mail"
            type="text"
            id="email"
            inputClassName="profile__input"
            minLength="2"
            maxLength="30"
            placeholder="Ваш e-mail"
            defaultValue="pochta@yandex.ru"
          />
        </fieldset>
        {editProfile ? (
          <button
            className="profile__button profile__button_type_save"
            type="submit"
            onClick={() => setEditProfile(false)}
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              className="profile__button profile__button_type_edit"
              type="button"
              onClick={() => setEditProfile(true)}
            >
              Редактировать
            </button>
            <button
              className="profile__button profile__button_type_logout"
              type="button"
              onClick={logOut}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </form>
    </section>
  );
}
