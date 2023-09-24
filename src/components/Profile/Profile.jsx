import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__header">Привет, Ульяна!</h2>
      <form className="profile__form" noValidate>
        <label className="profile__input-container" htmlFor="name">
          <span className="profile__input-paragraph">Имя</span>
          <input
            className="profile__input"
            name="name"
            id="name"
            type="name"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            defaultValue="Ульяна"
            placeholder="Ваше имя"
            required
          />
        </label>
        <label className="profile__input-container" htmlFor="email">
          <span className="profile__input-paragraph">E-mail</span>
          <input
            className="profile__input"
            name="email"
            id="email"
            type="email"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            defaultValue="kotic@yandex.ru"
            placeholder="Ваш e-mail"
            required
          />
        </label>
      </form>
      <div className="profile__buttons">
        <button className="profile__edit">Редактировать</button>
        <Link to="/signin" className="profile__exit">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}
