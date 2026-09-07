/**
 * Отзывы для карусели "Loved by learners everywhere".
 * Фото выгружены из Figma в public/images/testimonials/.
 * Если картинка не загрузится — в карточке остаётся цветной аватар с инициалом.
 * Порядок цветов совпадает с точками пагинации в макете: blue / green / purple / pink.
 */
export const testimonials = [
  {
    id: "sierra",
    tone: "blue",
    image: "/images/testimonials/sierra.jpg",
    quote:
      "Schoolio is the best program available. It meets my curriculum requirements and makes learning fun. I would highly recommend it.",
    author: "Sierra A.",
    role: "Homeschooling parent",
  },
  {
    id: "marcus",
    tone: "green",
    image: "/images/testimonials/marcus.jpg",
    quote:
      "The curriculum is easy to follow and makes the homeschooling experience an enjoyable one for the whole family.",
    author: "Marcus T.",
    role: "Parent of two",
  },
  {
    id: "priya",
    tone: "purple",
    image: "/images/testimonials/priya.jpg",
    quote:
      "My kids actually ask to do their lessons now. The bite-sized content and progress tracking keep them motivated every day.",
    author: "Priya N.",
    role: "Supplementary user",
  },
  {
    id: "dana",
    tone: "pink",
    image: "/images/testimonials/dana.jpg",
    quote:
      "As a tutor, having assessments, lesson plans, and progress reports in one place has saved me hours every single week.",
    author: "Dana R.",
    role: "Independent tutor",
  },
];
