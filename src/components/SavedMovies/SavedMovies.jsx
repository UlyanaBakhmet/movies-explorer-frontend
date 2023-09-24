import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}
