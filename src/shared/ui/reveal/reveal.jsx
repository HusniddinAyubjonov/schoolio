import { useInView } from "@/shared/lib";

/**
 * Обёртка «появление при скролле». Ставит класс .reveal и, когда элемент
 * попадает во вьюпорт, добавляет .reveal--in (см. reveal.css).
 *
 * props:
 *   as       — тег/компонент (по умолчанию "div")
 *   delay    — задержка анимации, мс (для каскада)
 *   variant  — "up" | "left" | "right" | "zoom" (по умолчанию "up")
 */
export const Reveal = ({
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
  children,
  ...rest
}) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "reveal--in" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
