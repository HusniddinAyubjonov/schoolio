import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/shared/ui/reveal";
import { useInView } from "@/shared/lib";
import { testimonials } from "./testimonials-data.js";

const AUTOPLAY_MS = 7000;

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [trackRef, trackIn] = useInView();
  const count = testimonials.length;

  const go = useCallback(
    (next) => setActive(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || window.innerWidth >= 1024) return;

    const timer = setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [active, paused, go]);

  return (
    <section
      className="testimonials"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonials__inner">
        <Reveal as="h2" className="testimonials__title">
          Loved by learners everywhere
        </Reveal>

        <div className="testimonials__viewport">
          <button
            type="button"
            className="testimonials__arrow"
            onClick={() => go(active - 1)}
            aria-label="Предыдущий отзыв"
          >
            ‹
          </button>

          <div
            ref={trackRef}
            className={`testimonials__track ${trackIn ? "is-in" : ""}`}
          >
            {testimonials.map((item, index) => (
              <article
                key={item.id}
                className={`t-row ${index % 2 === 1 ? "t-row--flip" : ""} ${
                  index === active ? "t-row--active" : ""
                }`}
                style={{ "--card": item.card, "--tone": item.tone }}
                aria-hidden={index !== active}
              >
                <div className="t-row__photo">
                  <img
                    src={item.image}
                    alt={item.author}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  <span className="t-row__mark" aria-hidden="true">
                    &ldquo;
                  </span>
                </div>

                <div className="t-row__quote">
                  <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                  <p className="t-row__author">&mdash; {item.author}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="testimonials__arrow"
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
              className={`testimonials__dot ${
                index === active ? "testimonials__dot--active" : ""
              }`}
              style={{ "--tone": item.tone }}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
