import React, { useEffect, useRef, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm({
  findMovie,
  handleSaveTextInInput,
  isShortMovie,
  setIsShortMovie,
  isSavedMovies
}) {
  const inputMovie = useRef();
  const [values, setValues] = useState({ movie: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!isSavedMovies) {
      handleSaveTextInInput(setValues);
    }
  }, [handleSaveTextInInput, isSavedMovies]);

  function onChange(evt) {
    const { name, value, validationMessage } = evt.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validationMessage,
    }));

    if (evt.target.closest("form").checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (values.movie.length === 0) {
      setErrors((prev) => ({
        ...prev,
        movie: "Введите ключевое слово",
      }));
      return;
    }
    findMovie(values.movie, setErrors);
  }

  function handleChangeCheckbox(evt) {
    if (evt.target.checked) {
      setIsShortMovie(true);
      findMovie(values.movie, setErrors);
      if (!isSavedMovies) {
        localStorage.setItem("isShortMovie", true);
      } else {
        localStorage.setItem("isShortsSavedMovies", true);
      }
    } else {
      setIsShortMovie(false);
      findMovie(values.movie, setErrors);
      if (!isSavedMovies) {
        localStorage.setItem("isShortMovie", false);
      } else {
        localStorage.setItem("isShortsSavedMovies", false);
      }
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <input
            ref={inputMovie}
            className={`search__input ${
              errors.movie?.length > 1 ? "search__input_type_error" : ""
            }`}
            name="movie"
            id="search-input"
            type="text"
            minLength="1"
            required
            placeholder="Фильм"
            value={values.movie || ""}
            onChange={onChange}
          />
          <span
            className={`search__input-error ${
              errors.movie?.length > 1 ? "search__input-error_active" : ""
            }`}
          >
            {errors.movie}
          </span>
          <button
            className={`search__button button__hover ${
              isValid ? "" : "search__button_disabled"
            }`}
            type="submit"
          >
            Поиск
          </button>
        </form>
        <FilterCheckbox
          onChange={handleChangeCheckbox}
          checked={isShortMovie}
        />
      </div>
    </section>
  );
}
