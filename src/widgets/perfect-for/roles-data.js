/**
 * Секция "Perfect for ..." — по макету пять блоков в одном разделе,
 * заголовок "Perfect for" показывается ОДИН раз сверху.
 * Порядок и цвета — как на десктоп-макете.
 *
 * Фото — public/images/roles/*.jpg (выгружены из Figma).
 * Градиент-подложка под фото повторяет заливку карточки в макете.
 */
export const roles = [
  {
    id: "homeschooling",
    title: "Homeschooling",
    tone: "#5e328b",
    gradient: "linear-gradient(128deg, #6a3e97 0%, #62b6f6 94%)",
    doodle: "crown",
    image: "/images/roles/homeschooling.jpg",
    points: [
      "All of your secular curriculum needs in one place, choose online or offline",
      "365 days a year 1:1 homeschooling support",
      "Fully customizable lesson planning to your needs",
      "Organize an entire year of learning with one click",
    ],
    cta: "Get Started as a Homeschooler",
  },
  {
    id: "supplementary",
    title: "Supplementary",
    tone: "#9b2222",
    gradient: "linear-gradient(128deg, #6a3e97 0%, #62b6f6 94%)",
    doodle: "wrench",
    image: "/images/roles/supplementary.jpg",
    points: [
      "Catch up on any subject and grade in one place",
      "Learn on the go, whether you are traveling or sick",
      "Check your child’s understanding with quizzes and gap assessments",
      "Go above and beyond with a library of interest-based electives",
    ],
    cta: "Get Started as a Supplementary",
  },
  {
    id: "tutors",
    title: "Tutors",
    tone: "#d97139",
    gradient: "radial-gradient(circle at 28% 26%, #ffde14 0%, #c453ff 100%)",
    doodle: "plane",
    image: "/images/roles/tutors.jpg",
    points: [
      "The one-stop-shop platform for tutoring needs",
      "Assessments and progress tracking",
      "Continued learning between tutoring sessions",
      "Boost parent happiness with clear progress updates and helpful resources for learning at home",
    ],
    cta: "Get Started as a Tutor",
  },
  {
    id: "teachers",
    title: "Teachers",
    tone: "#68aa30",
    gradient: "radial-gradient(circle at 28% 26%, #91d758 0%, #5769bc 100%)",
    doodle: "calendar",
    image: "/images/roles/teachers.jpg",
    points: [
      "Tailored and differentiated learning per student",
      "Assessments and progress tracking",
      "Perfect for IEP and ESL students",
      "Increase parent satisfaction with progress transparency and at-home resources",
    ],
    cta: "Get Started as a Teacher",
  },
  {
    id: "institutions",
    title: "Institutions",
    tone: "#3d6fb1",
    gradient: "radial-gradient(circle at 28% 26%, #93e0ff 0%, #54a3c2 100%)",
    doodle: "arch",
    image: "/images/roles/institutions.jpg",
    points: [
      "Unlock school wide SEL and academic analytics by grade, subject, and class",
      "Supporting teachers with access to supplementary interest-based curriculum",
      "Help students catch up or get ahead with tailored and differentiated lesson plans",
      "Reach more students where they are by combining offline and online learning",
    ],
    cta: "Get Started as an Institution",
  },
];
