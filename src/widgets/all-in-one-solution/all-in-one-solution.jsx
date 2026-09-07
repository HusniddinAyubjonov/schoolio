import { useState } from "react";
import { VideoModal } from "@/shared/ui/video-modal";
import { Reveal } from "@/shared/ui/reveal";

const points = [
  "Choose fully online or offline",
  "Plan an entire year of learning with one click",
  "Bite-sized multimedia content",
  "Daily comprehension practice and testing",
  "Mix-and-match subjects and grades",
];

export const AllInOneSolution = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="solution">
      <Reveal as="h2" className="solution__title">
        Your Complete All-In-One Solution
      </Reveal>

      <Reveal className="solution__content" delay={100}>
        <div className="solution__player-wrap">
          {/* молния — теперь нависает НАД картинкой, а не в углу секции */}
          <svg
            className="solution__thunder"
            viewBox="0 0 60 82"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M34 2 L6 46 H26 L20 80 L54 34 H32 Z"
              fill="#ffffff"
              stroke="#f2874c"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          {/* вся картинка кликабельна — играет роль превью видео */}
          <button
            type="button"
            className="solution__player"
            onClick={() => setVideoOpen(true)}
            aria-label="Открыть видео-урок Lesson 1 - The Sun and Air"
          >
            <div className="solution__player-topbar">
              <span className="solution__player-dot" />
              <span>Lesson 1 - The Sun and Air</span>
              <span>✕</span>
            </div>
            <div className="solution__player-screen">
              <span className="solution__player-play">▶</span>
            </div>
          </button>

          <span className="solution__swirl" aria-hidden="true">
            〜
          </span>
        </div>

        <ul className="solution__list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Reveal>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title="Lesson 1 - The Sun and Air"
      />
    </section>
  );
};
