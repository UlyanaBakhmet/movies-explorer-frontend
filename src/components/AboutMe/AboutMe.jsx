import photo from "../../images/avatar.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section-header">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__name">Ульяна</h3>
          <p className="about-me__information">Разработчик, 31 год</p>
          <p className="about-me__story">
            Я живу в Санкт-Петербурге, закончила математический факультет
            ПетрГУ. По специальности не работала, была занята совершенно в
            другой сфере. Во время пандемии, когда все сидели дома, от скуки
            начала интересоваться веб-разработкой, спустя некоторое время
            оказалась на Яндекс.Практикуме. Хотелось бы и дальше развиваться в
            данном направлении.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/UlyanaBakhmet"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}
