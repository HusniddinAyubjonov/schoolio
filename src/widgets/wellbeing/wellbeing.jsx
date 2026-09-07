import { useState } from "react";
import { Reveal } from "@/shared/ui/reveal";

/**
 * КАРТИНКИ — public/images/wellbeing/:
 *   dashboard-analytics.png   542×350  скриншот дешборда с оценками
 *   trophy.png                145×157  кубок (поворот уже в css, -17deg)
 */

const points = [
  "Insights into how your learner is feeling everyday with Schoolio's Vibe Check",
  "Track grades, assignments, and completion across all subjects",
  "Manage multiple learners and view progress at a glance from your dashboard",
  "Get personalized AI-driven content and lesson scheduling recommendations",
];

const moods = [
  { emoji: "😠", label: "Angry" },
  { emoji: "😕", label: "Confused" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😢", label: "Sad" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😐", label: "Silly" },
  { emoji: "🤔", label: "Curious" },
  { emoji: "😬", label: "Nervous" },
];

// простая реакция под выбранное настроение — логика на твой вкус,
// можно менять текст или вообще подставлять что-то другое
const responses = {
  Angry: "Дыши глубже — сейчас разберёмся вместе 💜",
  Confused: "Давай пройдёмся по теме ещё раз, не спеша",
  Calm: "Отличное состояние для учёбы!",
  Sad: "Ты не один — мы рядом",
  Excited: "Вот это энергия! Погнали учиться 🚀",
  Tired: "Может, сначала короткий перерыв?",
  Silly: "Любим хорошее настроение на уроке 😄",
  Curious: "Любопытство — лучший старт для урока",
  Nervous: "Всё получится, маленькими шагами",
};

export const Wellbeing = () => {
  const [mood, setMood] = useState(null);

  return (
    <section className="wellbeing">
      <Reveal as="h2" className="wellbeing__title">
        Where Academics And Well-Being Meet
      </Reveal>

      <Reveal className="wellbeing__content" delay={100}>
        <ul className="wellbeing__list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="wellbeing__dashboard-wrap">
          <img
            src="/images/wellbeing/dashboard.png"
            alt="Дашборд аналитики успеваемости"
            className="wellbeing__dashboard-img"
          />

          {/* кубок — сверху справа от картинки */}
          <img
            src="/images/wellbeing/trophy.png"
            alt=""
            aria-hidden="true"
            className="wellbeing__trophy"
          />

          <div className="wellbeing__mood">
            <p className="wellbeing__mood-greeting">
              Welcome back, Muhammed 👋
            </p>
            <p className="wellbeing__mood-question">How do you feel today?</p>

            <div className="wellbeing__emojis">
              {moods.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  className={`wellbeing__emoji ${mood === m.label ? "wellbeing__emoji--active" : ""}`}
                  onClick={() => setMood(m.label)}
                  aria-label={m.label}
                  aria-pressed={mood === m.label}
                >
                  {m.emoji}
                </button>
              ))}
            </div>

            {mood && (
              <p className="wellbeing__mood-response">{responses[mood]}</p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
