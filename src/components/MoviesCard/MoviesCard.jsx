import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({
  movie,
  isSavedMovies,
  handleToogleButton,
  checkIsMovieSaved
}) {
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isSavedMovies) {
      if (checkIsMovieSaved(movie)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    }
  }, [checkIsMovieSaved, movie, isSavedMovies]);

  function calcTime(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  const handleToogleClick = (evt) => {
    handleToogleButton(evt, movie, setIsSaved, isSaved);
  };


  return (
    <li className="movies-card">
      <div className="movies-card__paragraph">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{calcTime(movie.duration)}</p>
      </div>
      <a
        className="movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          alt={movie.nameRU}
          src={
            isSavedMovies
              ? movie.image
              : "https://api.nomoreparties.co" + movie.image.url
          }
        />
      </a>
      {pathname === "/saved-movies" ? (
        <button
          className={"movies-card__button movies-card__button_type_delete"}
          type="button"
          onClick={handleToogleClick}
        >
          &#10006;
        </button>
      ) : (
        <>
          {isSaved ? (
            <button
              className={"movies-card__button movies-card__button_type_saved"}
              type="button"
              onClick={handleToogleClick}
            >
              &#10003;
            </button>
          ) : (
            <button
              className={"movies-card__button movies-card__button_type_add"}
              type="button"
              onClick={handleToogleClick}
            >
              Сохранить
            </button>
          )}
        </>
      )}
    </li>
  );
}
