/**
 * Карточка-подложка секции: градиент из макета + фото + белый дудл-контур.
 * Фото кроется по центру; если не загрузилось — остаётся только градиент с дудлом.
 */
const doodles = {
  crown: (
    <path
      d="M8 40 L14 14 L26 30 L38 10 L50 30 L62 14 L68 40 Z M8 40 H68 V50 H8 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  ),
  wrench: (
    <path
      d="M46 8 a14 14 0 0 0 -18 18 L8 46 l12 12 l20 -20 a14 14 0 0 0 18 -18 l-9 9 l-9 -2 l-2 -9 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  ),
  plane: (
    <path
      d="M6 34 L62 10 L44 62 L34 40 Z M34 40 L62 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  ),
  calendar: (
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <rect x="10" y="14" width="48" height="44" rx="4" />
      <path d="M10 26 H58 M22 8 V18 M46 8 V18" />
      <path d="M20 38 H26 M32 38 H38 M44 38 H50 M20 48 H26 M32 48 H38" />
    </g>
  ),
  arch: (
    <path
      d="M8 58 C8 26 56 26 56 58 M2 58 H62 M16 58 C16 34 48 34 48 58"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  ),
};

export const RoleArt = ({ gradient, doodle, image, alt }) => {
  return (
    <div className="role__art" style={{ background: gradient }}>
      {image && (
        <img
          src={image}
          alt={alt}
          className="role__photo"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <svg
        className="role__doodle"
        viewBox="0 0 70 70"
        aria-hidden="true"
        focusable="false"
      >
        {doodles[doodle]}
      </svg>
    </div>
  );
};
