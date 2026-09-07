/**
 * КАРТИНКИ — public/images/education/:
 *   student-girl.png   девочка с ноутбуком (крой по фигуре, прозрачный фон)
 *   student-boy.png    мальчик с ноутбуком, 525×514
 *
 * Доdoodle-иконки (блокнот и шапочка) оставил как встроенный SVG —
 * это просто пара линий, перерисовать в коде быстрее, чем экспортировать.
 * Если всё же хочешь скачать оригиналы из Figma — положи их в ту же
 * папку (например doodle-notepad.svg / doodle-cap.svg) и замени
 * <svg>...</svg> на <img src="/images/education/doodle-notepad.svg" />.
 */
import { Reveal } from "@/shared/ui/reveal";

const features = [
  "Increase confidence in learners",
  "Spark curiosity and find unique passions",
  "Fit for your learners' needs and interests",
  "Comprehensive, up-to-date curriculum",
];

export const EducationJourney = () => {
  return (
    <section className="education-journey">
      <span className="education-journey__sparkles" aria-hidden="true">
        ✦ ✧
      </span>

      <Reveal as="h2" className="education-journey__title">
        Enrich Your Child's Education Journey
      </Reveal>

      <Reveal className="education-journey__content" delay={100}>
        <div className="education-journey__photo education-journey__photo--girl">
          <img src="/images/education/girl.png" alt="Ученица с ноутбуком" />

          <svg
            className="education-journey__doodle education-journey__doodle--notepad"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="6"
              y="6"
              width="22"
              height="28"
              rx="2"
              stroke="#6fcf97"
              strokeWidth="2"
            />
            <line
              x1="11"
              y1="14"
              x2="23"
              y2="14"
              stroke="#6fcf97"
              strokeWidth="2"
            />
            <line
              x1="11"
              y1="20"
              x2="23"
              y2="20"
              stroke="#6fcf97"
              strokeWidth="2"
            />
            <line
              x1="24"
              y1="4"
              x2="34"
              y2="14"
              stroke="#f2874c"
              strokeWidth="2"
            />
          </svg>
        </div>

        <ul className="education-journey__list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="education-journey__photo education-journey__photo--boy">
          <img src="/images/education/boy.png" alt="Ученик с ноутбуком" />

          <svg
            className="education-journey__doodle education-journey__doodle--cap"
            viewBox="0 0 50 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M25 4 L45 14 L25 24 L5 14 Z"
              stroke="#f2874c"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line
              x1="38"
              y1="17"
              x2="38"
              y2="28"
              stroke="#f2874c"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Reveal>
    </section>
  );
};
