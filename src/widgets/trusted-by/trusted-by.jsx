/**
 * "Trusted by ..." — логотипы партнёров.
 * Мобайл: длинный заголовок + сетка логотипов на светлом фоне.
 * Десктоп: персиковый фон, короткий заголовок "Trusted industry partners",
 * фото слева + сетка логотипов справа (как в макете).
 * Ассеты — public/images/partners/ (выгружены из Figma).
 */
const logos = [
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
      <div className="trusted__inner">
        <p className="trusted__title trusted__title--long">
          Trusted by families, teachers, schools, and companies
        </p>
        <p className="trusted__title trusted__title--short">
          Trusted industry partners
        </p>

        <div className="trusted__content">
          <div className="trusted__photo">
            <img
              src="/images/partners/photo.jpg"
              alt="Students learning together"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = "none";
              }}
            />
          </div>

          <ul className="trusted__grid">
            {logos.map((logo) => (
              <li key={logo.src} className="trusted__logo">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
