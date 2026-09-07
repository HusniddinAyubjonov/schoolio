import { Reveal } from "@/shared/ui/reveal";

/**
 * Универсальная секция по макету: (эйбрау) + большой заголовок + (подзаголовок)
 * + список пунктов с разделителями слева и произвольный медиа-слот справа.
 *
 * props:
 *   id          — якорь секции
 *   bg          — цвет фоновой панели
 *   flush       — true = панель во всю ширину без скругления (как #e0a179 в макете)
 *   eyebrow / eyebrowColor
 *   title / subtitle
 *   points      — массив строк
 *   divider     — цвет линий между пунктами
 *   media       — JSX справа
 *   reverse     — поменять стороны (медиа слева)
 */
export const FeatureSection = ({
  id,
  bg,
  flush = false,
  eyebrow,
  eyebrowColor = "#d97139",
  title,
  subtitle,
  points = [],
  divider = "#cdbfe6",
  media,
  reverse = false,
}) => {
  return (
    <section
      className={`feature-section ${flush ? "feature-section--flush" : ""}`}
      id={id}
      style={{ "--fs-bg": bg, "--fs-divider": divider }}
    >
      <div className="feature-section__inner">
        <Reveal className="feature-section__head">
          {eyebrow && (
            <p className="feature-section__eyebrow" style={{ color: eyebrowColor }}>
              {eyebrow}
            </p>
          )}
          <h2 className="feature-section__title">{title}</h2>
          {subtitle && (
            <p className="feature-section__subtitle">{subtitle}</p>
          )}
        </Reveal>

        <div
          className={`feature-section__cols ${
            reverse ? "feature-section__cols--reverse" : ""
          }`}
        >
          <Reveal
            as="ul"
            className="feature-section__list"
            variant={reverse ? "right" : "left"}
          >
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </Reveal>

          {media && (
            <Reveal
              className="feature-section__media"
              variant={reverse ? "left" : "right"}
              delay={80}
            >
              {media}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
