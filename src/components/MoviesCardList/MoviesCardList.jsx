import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  MAX_WIDTH,
  MIN_WIDTH,
  CARDS_12,
  CARDS_8,
  CARDS_5,
  CARDS_3,
  CARDS_2,
  CARDS_1,
} from "../../utils/constants";
import "./MoviesCardList.css";

export default function MoviesCardList({
  movies,
  isSavedMovies,
  savedMovies,
  handleToogleButton,
  checkIsMovieSaved,
}) {
  const [listMoviesOnDisplay, setListMoviesOnDisplay] = useState(null);

  useEffect(() => {
    handleChangeDisplayWidth();
    window.addEventListener("resize", handleChangeDisplayWidth);

    return () => {
      window.removeEventListener("resize", handleChangeDisplayWidth);
    };
  }, []);

  function handleChangeDisplayWidth() {
    if (window.innerWidth > MAX_WIDTH) {
      setListMoviesOnDisplay(CARDS_12);
    } else if (window.innerWidth > MIN_WIDTH && window.innerWidth < MAX_WIDTH) {
      setListMoviesOnDisplay(CARDS_8);
    } else {
      setListMoviesOnDisplay(CARDS_5);
    }
  }

  function handleClickMoreButton() {
    if (window.innerWidth > MAX_WIDTH) {
      setListMoviesOnDisplay(listMoviesOnDisplay + CARDS_3);
    } else if (window.innerWidth > MIN_WIDTH && window.innerWidth < MAX_WIDTH) {
      setListMoviesOnDisplay(listMoviesOnDisplay + CARDS_2);
    } else {
      setListMoviesOnDisplay(listMoviesOnDisplay + CARDS_1);
    }
  }

  return (
    <section className="cardlist">
      <div className="cardlist__elements">
        {!isSavedMovies &&
          (Array.isArray(movies) ? (
            movies
              .slice(0, listMoviesOnDisplay)
              .map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  isSavedMovies={isSavedMovies}
                  handleToogleButton={handleToogleButton}
                  checkIsMovieSaved={checkIsMovieSaved}
                />
              ))
          ) : (
            <div className="cardlist__text">Ничего не найдено</div>
          ))}
        {isSavedMovies &&
          (Array.isArray(savedMovies) ? (
            savedMovies.map((savedMovie) => (
              <MoviesCard
                key={savedMovie._id}
                movie={savedMovie}
                isSavedMovies={isSavedMovies}
                handleToogleButton={handleToogleButton}
                checkIsMovieSaved={checkIsMovieSaved}
              />
            ))
          ) : (
            <div className="cardlist__text">Ничего не найдено</div>
          ))}
      </div>
      {!isSavedMovies &&
        movies.length > listMoviesOnDisplay &&
        Array.isArray(movies) && (
          <button
            onClick={handleClickMoreButton}
            className="cardlist__more-button"
            type="button"
          >
            Ещё
          </button>
        )}
    </section>
  );
}
