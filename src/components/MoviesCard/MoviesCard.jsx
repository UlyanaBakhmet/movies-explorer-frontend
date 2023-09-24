import { useState } from "react";
import { useLocation } from "react-router-dom";
import movieImg from "../../images/movieImg.jpg";
import "./MoviesCard.css";

export default function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();

  return (
    <li className="movies-card">
      <div className="movies-card__paragraph">
        <h2 className="movies-card__title">Война и мир</h2>
        <p className="movies-card__duration">394м</p>
      </div>
      <img
        className="movies-card__image"
        src={movieImg}
        alt={`Постер фильма`}
      />
      {pathname === "/saved-movies" ? (
        <button
          className={"movies-card__button movies-card__button_type_delete"}
          type="button"
        >
          &#10006;
        </button>
      ) : (
        <>
          {isSaved ? (
            <button
              className={"movies-card__button movies-card__button_type_saved"}
              type="button"
              onClick={() => setIsSaved(false)}
            >
              &#10003;
            </button>
          ) : (
            <button
              className={"movies-card__button movies-card__button_type_add"}
              type="button"
              onClick={() => setIsSaved(true)}
            >
              Сохранить
            </button>
          )}
        </>
      )}
    </li>
  );
}
