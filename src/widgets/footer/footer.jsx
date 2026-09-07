import { Reveal } from "@/shared/ui/reveal";

const navLinks = [
  { label: "Shop", href: "#", active: false },
  { label: "Blog", href: "#", active: false },
  { label: "About", href: "#", active: true },
  { label: "Privacy Policy", href: "/cookie-policy", active: false },
];

const socials = [
  {
    label: "YouTube",
    href: "#",
    accent: false,
    path: "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z",
  },
  {
    label: "Instagram",
    href: "#",
    accent: true,
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6Zm6.8-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
  {
    label: "Facebook",
    href: "#",
    accent: false,
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.300000000000001c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "TikTok",
    href: "#",
    accent: false,
    path: "M16 3c.3 2.1 1.5 3.8 3.5 4.2v2.8c-1.3.1-2.5-.3-3.6-.9v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 2 2.7V3H16Z",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__card">
        <span className="footer__planet" aria-hidden="true" />

        <Reveal className="footer__main">
          <span className="footer__logo">
            <img
              src="/images/brand/logo-white.svg"
              alt="Schoolio"
              width="184"
              height="34"
            />
          </span>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.active ? "is-active" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d={s.path}
                      fill={s.accent ? "#ffcc00" : "currentColor"}
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="footer__bottom" delay={120}>
          <p className="footer__copy">
            © 2023 Schoolio Learning Corp. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
};
