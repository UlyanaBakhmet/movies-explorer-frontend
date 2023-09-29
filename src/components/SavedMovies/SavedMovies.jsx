import { Helmet } from 'react-helmet';
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <Helmet>
        <title>Сохраненные фильмы</title>
      </Helmet>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}
