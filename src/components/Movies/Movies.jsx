import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";

export default function Movies({
  movies,
  getInitialMovies,
  setMovies,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const isSavedMovies = false;

  useEffect(() => {
    if (localStorage.getItem("searchInputValue") !== null) {
      setSearchInputValue(localStorage.getItem("searchInputValue"));
    }
    if (localStorage.getItem("isShortMovie") !== null) {
      if (localStorage.getItem("isShortMovie") === "true") {
        setIsShortMovie(true);
      } else {
        setIsShortMovie(false);
      }
    }
    if (localStorage.getItem("allMovies") !== null) {
      setMovies(JSON.parse(localStorage.getItem("allMovies")));
    }
  }, [setMovies]);

  function handleSearchMovies(movies, movieSearch, isShortMovie) {
    let searchMovies;
    searchMovies = movies.filter((movie) => {
      const lowerCaseQuery = movieSearch.toLowerCase();
      const lowerCaseNameRU = movie.nameRU.toLowerCase();
      return (
        lowerCaseNameRU.includes(lowerCaseQuery) &&
        (!isShortMovie || movie.duration < 40)
      );
    });
    if (searchMovies.length === 0) {
      return "Ничего не найдено";
    } else {
      return searchMovies;
    }
  }

  const renderMovies = useMemo(() => {
    if (searchInputValue.length === 0) {
      return [];
    }
    return handleSearchMovies(movies, searchInputValue, isShortMovie);
  }, [movies, searchInputValue, isShortMovie]);

  const findMovie = (keyWord) => {
    if (movies.length < 1) {
      getInitialMovies(setPreloader);
    }
    setSearchInputValue(keyWord);
    localStorage.setItem("searchInputValue", keyWord);
  };

  const checkIsMovieSaved = useCallback(
    (movie) => {
      return savedMovies.some((item) => {
        return item.nameRU === movie.nameRU;
      });
    },
    [savedMovies]
  );

  const findSaveMovie = useCallback(
    (movie, isSaved) => {
      if (isSaved) {
        return savedMovies.find((item) => {
          return item.nameRU === movie.nameRU;
        });
      }
    },
    [savedMovies]
  );

  const handleSaveTextInInput = (setValues) => {
    if (localStorage.getItem("searchInputValue") !== null) {
      setValues((prev) => ({
        ...prev,
        movie: localStorage.getItem("searchInputValue"),
      }));
    }
  };

  function handleToogleButton(evt, movie, setIsSaved, isSaved) {
    evt.preventDefault();
    if (!isSaved) {
      handleSaveMovie(movie, setIsSaved);
    } else {
      const deletedMovie = findSaveMovie(movie, isSaved);
      handleDeleteMovie(deletedMovie, setIsSaved);
    }
  }

  return (
    <section className="movies">
      <Helmet>
        <title>Фильмы</title>
      </Helmet>
      <SearchForm
        findMovie={findMovie}
        handleSaveTextInInput={handleSaveTextInInput}
        isShortMovie={isShortMovie}
        setIsShortMovie={setIsShortMovie}
        isSavedMovies={isSavedMovies}
      />
      <Preloader isVisible={preloader} />
      <MoviesCardList
        movies={renderMovies}
        searchInputValue={searchInputValue}
        isSavedMovies={isSavedMovies}
        checkIsMovieSaved={checkIsMovieSaved}
        handleToogleButton={handleToogleButton}
      />
    </section>
  );
}
