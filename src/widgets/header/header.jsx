import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/button";
import { scrollToId } from "@/shared/lib";

const helpLinks = [
  { label: "Как начать работу", href: "#" },
  { label: "Частые вопросы", href: "#" },
  { label: "Написать в поддержку", href: "#" },
];

export const Header = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const helpRef = useRef(null);

  // закрыть попап "Get help" по клику вне или по Esc
  useEffect(() => {
    const onClickOutside = (e) => {
      if (helpRef.current && !helpRef.current.contains(e.target)) {
        setHelpOpen(false);
      }
    };
    const onEscape = (e) => {
      if (e.key === "Escape") setHelpOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__announce">
        <span>Not sure where to start?</span>

        <div className="header__help" ref={helpRef}>
          <button
            type="button"
            className="header__help-trigger"
            onClick={() => setHelpOpen((v) => !v)}
            aria-expanded={helpOpen}
          >
            Get help
          </button>

          {helpOpen && (
            <div className="header__help-popover" role="menu">
              {helpLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="header__help-link"
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="header__nav">
        <span className="header__logo">
          <img src="/images/brand/logo.svg" alt="Schoolio" width="120" height="23" />
        </span>

        <nav
          className={`header__links ${menuOpen ? "header__links--open" : ""}`}
        >
          <a href="#" onClick={() => setMenuOpen(false)}>
            Bookstore
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Sign up
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Log in
          </a>

          <Button
            size="sm"
            className="header__cta"
            onClick={() => {
              setMenuOpen(false);
              scrollToId("trial");
            }}
          >
            Get Started
          </Button>
        </nav>

        <button
          type="button"
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
