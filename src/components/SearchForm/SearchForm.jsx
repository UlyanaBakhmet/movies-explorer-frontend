import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            minLength="2"
            required
          />
          <button className="search__button">Поиск</button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}
