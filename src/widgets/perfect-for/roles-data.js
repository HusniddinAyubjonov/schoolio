/**
 * Пять блоков "Perfect for ..." по макету.
 * КАРТИНКИ (по желанию) — public/images/roles/:
 *   homeschooling.png  мама обнимает дочку, фиолетовый градиент
 *   supplementary.png  мальчик за партой, тёплый фон
 *   teachers.png       учитель в голубой рубашке, оранжевый градиент
 *   tutors.png         женщина в наушниках, зелёный градиент
 *   institutions.png   кампус/здание школы, синее небо
 * Если файла нет — показывается цветная подложка с дудлом (см. RoleArt).
 */
export const roles = [
  {
    id: "homeschooling",
    eyebrow: "Perfect for",
    title: "Homeschooling",
    tone: "purple",
    doodle: "crown",
    image: "/images/roles/homeschooling.png",
    points: [
      "All of your secular curriculum needs in one place, choose online or offline",
      "365 days a year 1:1 homeschooling support",
      "Fully customizable lesson planning to fit your needs",
      "Organize an entire year of learning with one click",
    ],
    cta: "Get Started as a Homeschooler",
  },
  {
    id: "supplementary",
    eyebrow: "Perfect for",
    title: "Supplementary",
    tone: "coral",
    doodle: "wrench",
    image: "/images/roles/supplementary.png",
    points: [
      "Catch up on any subject and grade in one place",
      "Learn on the go, whether you are traveling or sick",
      "Check your child's understanding with quizzes and gap assessments",
      "Go above and beyond with a library of interest-based electives",
    ],
    cta: "Get Started as a Supplementary",
  },
  {
    id: "teachers",
    eyebrow: "Perfect for",
    title: "Teachers",
    tone: "orange",
    doodle: "plane",
    image: "/images/roles/teachers.png",
    points: [
      "The one-stop-shop platform for tutoring needs",
      "Assessments and progress tracking",
      "Continued learning between tutoring sessions",
      "Boost parent happiness with clear progress updates and helpful resources for learning at home",
    ],
    cta: "Get Started as a Teacher",
  },
  {
    id: "tutors",
    eyebrow: "Perfect for",
    title: "Tutors",
    tone: "green",
    doodle: "calendar",
    image: "/images/roles/tutors.png",
    points: [
      "Tailored and differentiated learning per student",
      "Assessments and progress tracking",
      "Perfect for IEP and ESL students",
      "Increase parent satisfaction with progress transparency and at-home resources",
    ],
    cta: "Get Started as a Tutor",
  },
  {
    id: "institutions",
    eyebrow: "Perfect for",
    title: "Institutions",
    tone: "blue",
    doodle: "arch",
    image: "/images/roles/institutions.png",
    points: [
      "Unlock school wide SEL and academic analytics by grade, subject, and class",
      "Supporting teachers with access to supplementary interest-based curriculum",
      "Help students catch up or get ahead with tailored and differentiated lesson plans",
      "Reach more students where they are by combining offline and online learning",
    ],
    cta: "Get Started as an Institution",
  },
];
