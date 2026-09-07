/**
 * Логотип-стена "Trusted by ...".
 * Логотипы выгружены из Figma в public/images/partners/ (logo-01..logo-12.png).
 * Первые три — American Express, Google, edinno; остальные подписей в макете
 * не имеют, поэтому alt — общий.
 */
const partners = [
  { src: "/images/partners/logo-01.png", alt: "American Express" },
  { src: "/images/partners/logo-02.png", alt: "Google" },
  { src: "/images/partners/logo-03.png", alt: "edinno" },
  { src: "/images/partners/logo-04.png", alt: "Partner logo" },
  { src: "/images/partners/logo-05.png", alt: "Partner logo" },
  { src: "/images/partners/logo-06.png", alt: "Partner logo" },
  { src: "/images/partners/logo-07.png", alt: "Partner logo" },
  { src: "/images/partners/logo-08.png", alt: "Partner logo" },
  { src: "/images/partners/logo-09.png", alt: "Partner logo" },
  { src: "/images/partners/logo-10.png", alt: "Partner logo" },
  { src: "/images/partners/logo-11.png", alt: "Partner logo" },
  { src: "/images/partners/logo-12.png", alt: "Partner logo" },
];

export const TrustedBy = () => {
  return (
    <section className="trusted" id="trusted-by">
      <h2 className="trusted__title">
        Trusted by families, teachers, schools, and companies
      </h2>

      <ul className="trusted__grid">
        {partners.map((logo) => (
          <li key={logo.src} className="trusted__logo">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
};
