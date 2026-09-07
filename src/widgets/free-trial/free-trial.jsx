import { useState } from "react";
import { Button } from "@/shared/ui/button";

/**
 * КАРТИНКИ — public/images/trial/:
 *   fire-icon.png     440×442  основной значок огня
 *   squiggle.svg      маленькие жёлтые завитки над огнём (справа сверху)
 *   dash-marks.svg    три коротких штриха внизу слева, ЗА пределами карточки
 */

const benefits = [
  "Truly secular, inclusive, and diversity driven",
  "Easy to use, easy to teach",
  "All core subjects from one place, in uniform format",
  "Customizable to your unique learners' needs",
  "Wide range of topics to choose from",
];

export const FreeTrial = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="free-trial" id="trial">
      <div className="free-trial__card">
        <img
          src="/images/free/squiggle.png"
          alt=""
          className="free-trial__squiggle"
          aria-hidden="true"
        />
        <img
          src="/images/free/marks.png"
          alt=""
          className="free-trial__dash-marks"
          aria-hidden="true"
        />

        <div className="free-trial__text">
          <h2 className="free-trial__title">Unlimited 7-day free trial</h2>

          <ul className="free-trial__list">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span className="free-trial__check" aria-hidden="true">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="free-trial__cta">
            <Button onClick={() => setSent(true)}>Get Started</Button>
            {sent && (
              <span className="free-trial__sent">Заявка отправлена! 🎉</span>
            )}
          </div>
        </div>

        <img
          src="/images/free/fire.png"
          alt=""
          className="free-trial__fire"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
