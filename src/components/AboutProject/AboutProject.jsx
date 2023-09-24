import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-header">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__text">
          <h3 className="about-project__header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text">
          <h3 className="about-project__header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time">
        <div className="about-project__time-backend">
          <div className="about-project__time-week-one">1 неделя</div>
          <div className="about-project__time-course-name">Back-end</div>
        </div>
        <div className="about-project__time-frontend">
          <div className="about-project__time-week-four">4 недели</div>
          <div className="about-project__time-course-name">Front-end</div>
        </div>
      </div>
    </section>
  );
}
