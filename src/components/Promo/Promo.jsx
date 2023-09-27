import React from "react";
import promoImage from "../../images/promoImage.svg";
import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__paragraph">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="/#about-project" className="promo__link">
          Узнать больше
        </a>
      </div>
      <img className="promo__logo" src={promoImage} alt="Логотип" />
    </section>
  );
}
