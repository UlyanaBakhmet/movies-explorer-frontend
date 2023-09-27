import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container-paragraph">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container-links">
          <p className="footer__data">&copy; {new Date().getFullYear()}</p>
          <nav className="footer__nav">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/UlyanaBakhmet"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
