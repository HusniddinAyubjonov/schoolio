import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Button } from "@/shared/ui/button";

/**
 * Модалка входа / регистрации (react-responsive-modal).
 *
 * props:
 *   mode      — "login" | "signup" | null (null = закрыта)
 *   onClose   — закрыть
 *   onModeChange — переключить между login/signup (для ссылки внизу формы)
 *
 * Бэкенда нет: сабмит просто показывает экран-заглушку об успехе.
 */
const copy = {
  login: {
    title: "Log in to Schoolio",
    submit: "Log in",
    switchText: "New here?",
    switchCta: "Create an account",
    switchTo: "signup",
    done: "Welcome back! You're now logged in.",
  },
  signup: {
    title: "Create your account",
    submit: "Sign up",
    switchText: "Already have an account?",
    switchCta: "Log in",
    switchTo: "login",
    done: "Account created — check your email to confirm.",
  },
};

export const AuthModal = ({ mode, onClose, onModeChange }) => {
  const [sent, setSent] = useState(false);
  const [prevMode, setPrevMode] = useState(mode);
  const open = mode === "login" || mode === "signup";

  // сбрасываем экран успеха, когда модалку открывают заново или меняют режим
  if (mode !== prevMode) {
    setPrevMode(mode);
    setSent(false);
  }

  const t = copy[mode] ?? copy.login;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{
        overlay: "auth-modal__overlay",
        modal: "auth-modal",
        closeButton: "auth-modal__close",
      }}
      aria-labelledby="auth-modal-title"
    >
      {sent ? (
        <div className="auth-modal__done">
          <span className="auth-modal__emoji" aria-hidden="true">
            🎉
          </span>
          <h3 id="auth-modal-title">Done!</h3>
          <p>{t.done}</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      ) : (
        <form className="auth-modal__form" onSubmit={handleSubmit}>
          <h3 id="auth-modal-title">{t.title}</h3>

          {mode === "signup" && (
            <label className="auth-modal__field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Alex Parker" />
            </label>
          )}

          <label className="auth-modal__field">
            <span>Email address</span>
            <input
              type="email"
              name="email"
              required
              autoFocus
              placeholder="you@example.com"
            />
          </label>

          <label className="auth-modal__field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              placeholder="At least 6 characters"
            />
          </label>

          <Button type="submit" className="auth-modal__submit">
            {t.submit}
          </Button>

          <p className="auth-modal__switch">
            {t.switchText}{" "}
            <button
              type="button"
              className="auth-modal__switch-btn"
              onClick={() => onModeChange(t.switchTo)}
            >
              {t.switchCta}
            </button>
          </p>
        </form>
      )}
    </Modal>
  );
};
