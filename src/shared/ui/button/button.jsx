export const Button = ({
  children,
  onClick,
  type = "button",
  size = "md", // "md" | "sm"
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${size} ${className}`}
      onClick={onClick}
    >
      <span className="btn__label">{children}</span>
    </button>
  );
};
