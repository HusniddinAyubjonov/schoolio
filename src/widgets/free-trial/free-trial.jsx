import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/reveal";

/**
 * КАРТИНКИ — public/images/free/:
 *   fire.png      основной значок огня
 *   squiggle.png  жёлтые завитки над огнём (справа сверху)
 *   marks.png     три коротких штриха внизу слева, ЗА пределами карточки
 *
 * Кнопка "Get Started" открывает модалку записи на пробный период
 * (react-responsive-modal).
 */

const benefits = [
  "Truly secular, inclusive, and diversity driven",
  "Easy to use, easy to teach",
  "All core subjects from one place, in uniform format",
  "Customizable to your unique learners' needs",
  "Wide range of topics to choose from",
];

export const FreeTrial = ({ id = "trial" }) => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeModal = () => {
    setOpen(false);
    // сбрасываем "успех" после закрытия, чтобы при повторном открытии была форма
    setTimeout(() => setSent(false), 250);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="free-trial" id={id || undefined}>
      <Reveal className="free-trial__card" variant="zoom">
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
            <Button onClick={() => setOpen(true)}>Get Started</Button>
          </div>
        </div>

        <img
          src="/images/free/fire.png"
          alt=""
          className="free-trial__fire"
          aria-hidden="true"
        />
      </Reveal>

      <Modal
        open={open}
        onClose={closeModal}
        center
        classNames={{
          overlay: "trial-modal__overlay",
          modal: "trial-modal",
          closeButton: "trial-modal__close",
        }}
        aria-labelledby="trial-modal-title"
      >
        {sent ? (
          <div className="trial-modal__done">
            <span className="trial-modal__emoji" aria-hidden="true">
              🎉
            </span>
            <h3 id="trial-modal-title">You&rsquo;re all set!</h3>
            <p>
              Check your inbox — your 7-day free trial is on its way. No charge
              until it ends.
            </p>
            <Button onClick={closeModal}>Done</Button>
          </div>
        ) : (
          <form className="trial-modal__form" onSubmit={handleSubmit}>
            <h3 id="trial-modal-title">Start your 7-day free trial</h3>
            <p>Full access to every subject. No credit card required.</p>

            <label className="trial-modal__field">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                required
                autoFocus
                placeholder="you@example.com"
              />
            </label>

            <Button type="submit" className="trial-modal__submit">
              Get Started
            </Button>

            <p className="trial-modal__fineprint">
              By continuing you agree to the Terms and Privacy Policy.
            </p>
          </form>
        )}
      </Modal>
    </section>
  );
};
