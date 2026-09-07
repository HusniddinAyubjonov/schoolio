import { useEffect, useRef, useState } from "react";

const supported =
  typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";

/**
 * Возвращает [ref, inView]. inView становится true, когда элемент впервые
 * появляется во вьюпорте (наблюдение затем отключается — анимация одноразовая).
 *
 * Подстраховки, чтобы контент никогда не «завис» скрытым:
 *  - если IntersectionObserver недоступен — сразу true;
 *  - если элемент уже виден на момент монтирования — true;
 *  - аварийный таймаут: показать через 2s, даже если наблюдатель молчит.
 */
export const useInView = ({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
} = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(!supported);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supported || inView) return;

    const reveal = () => setInView(true);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);

    const fallback = window.setTimeout(reveal, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
};
