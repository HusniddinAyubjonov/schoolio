import { useEffect, useRef, useState } from "react";

const hasWindow = typeof window !== "undefined";
const hasIO = hasWindow && typeof IntersectionObserver !== "undefined";

/**
 * Возвращает [ref, inView]. inView становится true, когда элемент реально
 * доскроллили до вьюпорта — тогда и проигрывается анимация появления.
 *
 * Триггеры: IntersectionObserver + запасная проверка на scroll/resize
 * (на случай, если IO по какой-то причине не сработал). Никаких таймеров,
 * которые показывали бы блок ещё до того, как до него доскроллят.
 */
export const useInView = ({ offset = 0.12 } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(!hasWindow);

  useEffect(() => {
    const el = ref.current;
    if (inView || !el || !hasWindow) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      cleanup();
      setInView(true);
    };

    const check = () => {
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * (1 - offset);
      if (rect.top < trigger && rect.bottom > 0) reveal();
    };

    let observer;
    if (hasIO) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) reveal();
        },
        { threshold: 0, rootMargin: `0px 0px -${Math.round(offset * 100)}% 0px` },
      );
      observer.observe(el);
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    function cleanup() {
      observer?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    // первичная проверка (элемент уже во вьюпорте на момент монтирования)
    check();

    return cleanup;
  }, [inView, offset]);

  return [ref, inView];
};
