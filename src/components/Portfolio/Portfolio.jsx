import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <nav className="portfolio__container">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/UlyanaBakhmet/how-to-learn"
            >
              Статичный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/UlyanaBakhmet/russian-travel"
            >
              Адаптивный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/UlyanaBakhmet/react-mesto-api-full-gha"
            >
              Одностраничное приложение
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
