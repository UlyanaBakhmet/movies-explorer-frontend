import React from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-2);
  return (
    <section className="notfound">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
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
