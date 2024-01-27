import React, { useCallback, useMemo, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

export default function SavedMovies({ savedMovies, handleDeleteMovie }) {
  const isSavedMovies = true;
  const [searchInputValueSavedMovies, setSearchInputValueSavedMovies] =
    useState("");
  const [isShortsSavedMovies, setIsShortsSavedMovies] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isShortsSavedMovies") !== null) {
      if (localStorage.getItem("isShortsSavedMovies") === "true") {
        setIsShortsSavedMovies(true);
      } else {
        setIsShortsSavedMovies(false);
      }
    }
  }, []);

  function handleSearchSavedMovies(
    savedMovies,
    movieSearchSavedMovies,
    isShortsSavedMovies
  ) {
    let searchMovies;
    searchMovies = savedMovies.filter((movie) => {
      const lowerCaseQuery = movieSearchSavedMovies.toLowerCase();
      const lowerCaseNameRU = movie.nameRU.toLowerCase();
      return (
        lowerCaseNameRU.includes(lowerCaseQuery) &&
        (!isShortsSavedMovies || movie.duration < 40)
      );
    });
    if (searchMovies.length === 0) {
      return "Ничего не найдено";
    } else {
      return searchMovies;
    }
  }

  const renderMovies = useMemo(() => {
    if (
      searchInputValueSavedMovies.length === 0 &&
      isShortsSavedMovies === false
    ) {
      return savedMovies;
    }
    return handleSearchSavedMovies(
      savedMovies,
      searchInputValueSavedMovies,
      isShortsSavedMovies
    );
  }, [savedMovies, searchInputValueSavedMovies, isShortsSavedMovies]);

  const findMovie = (keyWord) => {
    setSearchInputValueSavedMovies(keyWord);
  };

  const checkIsMovieSaved = useCallback(
    (movie) => {
      return savedMovies.some((item) => {
        return item.nameRU === movie.nameRU;
      });
    },
    [savedMovies]
  );

  const handleToogleClick = (evt, movie, setIsSaved) => {
    evt.preventDefault();
    handleDeleteMovie(movie, setIsSaved);
  };

  return (
    <main className="movies">
      <SearchForm
        findMovie={findMovie}
        isShortMovie={isShortsSavedMovies}
        setIsShortMovie={setIsShortsSavedMovies}
        isSavedMovies={isSavedMovies}
      />
      <MoviesCardList
        savedMovies={renderMovies}
        isSavedMovies={isSavedMovies}
        handleToogleButton={handleToogleClick}
        checkIsMovieSaved={checkIsMovieSaved}
      />
    </main>
  );
}
