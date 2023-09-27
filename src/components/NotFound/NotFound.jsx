import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <section className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__paragraph">Страница не найдена</p>
        <button className="notfound__button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </section>
  );
}
