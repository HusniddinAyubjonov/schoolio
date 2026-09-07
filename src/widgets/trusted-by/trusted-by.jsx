/**
 * Логотип-стена "Trusted by ...".
 * Ассетов логотипов нет — показываем аккуратные текстовые плашки.
 * Когда появятся файлы, положи их в public/images/partners/ и заменить
 * <span> на <img src=... alt=... /> внутри .trusted__logo.
 */
const partners = [
  "American Express",
  "Google",
  "edinno.",
  "York University",
  "TMU",
  "York Catholic DSB",
  "Malden",
  "EdTech Hub",
  "Learning Corp",
];

export const TrustedBy = () => {
  return (
    <section className="trusted" id="trusted-by">
      <h2 className="trusted__title">
        Trusted by families, teachers, schools, and companies
      </h2>

      <ul className="trusted__grid">
        {partners.map((name) => (
          <li key={name} className="trusted__logo">
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
