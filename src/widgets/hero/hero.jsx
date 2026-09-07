import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { VideoModal } from "@/shared/ui/video-modal";
import { Reveal } from "@/shared/ui/reveal";
import { scrollToId } from "@/shared/lib";

/**
 * КАРТИНКИ — положи файлы в public/images/hero/ (пути ниже уже рабочие):
 *
 *   dashboard-main.png       976×564   "Read and Represent Numbers to 1000"
 *   dashboard-topic.png      ~358×192  "Today's Topic / Energy Sources"
 *   dashboard-calendar.png   ~375×234  "Ashley's Calendar"
 *   dashboard-spelling.png   ~333×202  "Spelling Practice - start"
 *
 *   decor-telescope.svg      телескоп, левый верх
 *   decor-molecule.svg       днк/молекула, левый верх (ниже телескопа)
 *   decor-ruler.svg          линейка-треугольник, левый край середина
 *   decor-globe.svg          глобус, правый верх
 *   decor-note.svg           нотка, правый край (под глобусом)
 *   decor-pencil.svg         карандаш, правый край середина
 *
 * Позиции декора — это % от .hero__bg (левая/верхняя точка + ширина).
 * Подгони под свои иконки в hero.css, ищи блок ".hero__decor--*".
 */

export const Hero = () => {
  // какое видео сейчас открыто в модалке: "topic" | "spelling" | null
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="hero">
      {/* Слой фона: тут градиент + декоративные иконки, у него overflow:hidden
          и он заканчивается РАНЬШЕ низа секции (см. .hero__bg в css) —
          именно поэтому карточки ниже "вылезают" на белый фон */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/images/hero/telescope.png"
          alt=""
          className="hero__decor hero__decor--telescope"
        />
        <img
          src="/images/hero/molecule.png"
          alt=""
          className="hero__decor hero__decor--molecule"
        />
        <img
          src="/images/hero/ruler.png"
          alt=""
          className="hero__decor hero__decor--ruler"
        />
        <img
          src="/images/hero/globe.png"
          alt=""
          className="hero__decor hero__decor--globe"
        />
        <img
          src="/images/hero/note.svg"
          alt=""
          className="hero__decor hero__decor--note"
        />
        <img
          src="/images/hero/pencil.png"
          alt=""
          className="hero__decor hero__decor--pencil"
        />
      </div>

      <Reveal className="hero__content" variant="up">
        <p className="hero__eyebrow">School Your Way with</p>
        <h1 className="hero__title">
          Schoolio Digital <span className="hero__trademark">™</span>
        </h1>
        <p className="hero__subtitle">
          Unleash a personalized, all-in-one,
          <br />
          grade 1-8 learning platform.
        </p>

        <Button onClick={() => scrollToId("trial")}>Get Started</Button>
      </Reveal>

      {/* Композиция карточек — НЕ внутри .hero__bg, поэтому её низ
          спокойно перекрывает следующую (белую) секцию */}
      <Reveal className="hero__dashboard" variant="up" delay={140}>
        <img
          src="/images/hero/main.png"
          alt="Read and Represent Numbers to 1000"
          className="hero__img hero__img--main"
        />

        <button
          type="button"
          className="hero__card hero__card--topic"
          onClick={() => setActiveVideo("topic")}
        >
          <img
            src="/images/hero/topic.png"
            alt="Today's Topic: Energy Sources"
          />
          <span className="hero__play">▶</span>
        </button>

        <button
          type="button"
          className="hero__card hero__card--spelling"
          onClick={() => setActiveVideo("spelling")}
        >
          <img
            src="/images/hero/spelling.png"
            alt="Spelling Practice: Trace and Spell"
          />
        </button>

        <img
          src="/images/hero/calendar.png"
          alt="Ashley's Calendar"
          className="hero__img hero__img--calendar"
        />
      </Reveal>

      <VideoModal
        isOpen={activeVideo === "topic"}
        onClose={() => setActiveVideo(null)}
        title="Energy Sources"
      />
      <VideoModal
        isOpen={activeVideo === "spelling"}
        onClose={() => setActiveVideo(null)}
        title="Spelling Practice"
      />
    </section>
  );
};
