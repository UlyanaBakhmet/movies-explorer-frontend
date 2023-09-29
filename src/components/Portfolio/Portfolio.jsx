import React from "react";
import "./Portfolio.css";
import PortfolioItems from "./PortfolioItems/PortfolioItems";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <PortfolioItems title={'Статичный сайт'} url={'https://github.com/UlyanaBakhmet/how-to-learn'} />
        <PortfolioItems title={'Адаптивный сайт'} url={'https://github.com/UlyanaBakhmet/russian-travel'} />
        <PortfolioItems title={'Одностраничное приложение'} url={'https://github.com/UlyanaBakhmet/react-mesto-api-full-gha'} />
      </ul>
    </section>
  );
}