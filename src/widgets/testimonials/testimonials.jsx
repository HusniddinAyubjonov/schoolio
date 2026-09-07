import { useCallback, useEffect, useState } from "react";
import { testimonials } from "./testimonials-data.js";

const AUTOPLAY_MS = 7000;

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (next) => setActive(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [active, paused, go]);

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-roledescription="carousel"
      aria-label="Отзывы"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="testimonials__title">Loved by learners everywhere</h2>

      <div className="testimonials__viewport">
        <button
          type="button"
          className="testimonials__arrow testimonials__arrow--prev"
          onClick={() => go(active - 1)}
          aria-label="Предыдущий отзыв"
        >
          ‹
        </button>

        <div className="testimonials__track">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className={`t-card t-card--${item.tone} ${
                index === active ? "t-card--active" : ""
              }`}
              aria-hidden={index !== active}
            >
              <div className={`t-card__art t-card__art--${item.tone}`}>
                <span className="t-card__avatar" aria-hidden="true">
                  {item.author.charAt(0)}
                </span>
                <span className="t-card__mark" aria-hidden="true">
                  &ldquo;
                </span>
              </div>

              <blockquote className="t-card__quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <p className="t-card__author">
                &mdash; {item.author}
                <span className="t-card__role">{item.role}</span>
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="testimonials__arrow testimonials__arrow--next"
          onClick={() => go(active + 1)}
          aria-label="Следующий отзыв"
        >
          ›
        </button>
      </div>

      <div className="testimonials__dots" role="tablist">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Отзыв ${index + 1}`}
            className={`testimonials__dot testimonials__dot--${item.tone} ${
              index === active ? "testimonials__dot--active" : ""
            }`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
};
