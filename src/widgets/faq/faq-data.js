/**
 * Двухуровневый FAQ по макету: категория -> вопросы.
 * Тексты ответов частично реальные (из макета), частично дописаны по смыслу —
 * замените на финальные формулировки от контента.
 */
export const faqGroups = [
  {
    id: "pricing",
    title: "Pricing, Discounts, and Refunds",
    items: [
      {
        q: "How much does Schoolio cost?",
        a: "Pricing depends on the plan and number of learners. You can start with an unlimited 7-day free trial before choosing a monthly or yearly subscription.",
      },
      {
        q: "Do you offer discounts for multiple children?",
        a: "Yes. Family plans include reduced per-learner pricing, and institutions get custom volume pricing.",
      },
      {
        q: "What is your refund policy?",
        a: "If Schoolio isn't the right fit, contact support within 30 days of your first paid charge for a full refund.",
      },
    ],
  },
  {
    id: "signing-up",
    title: "Signing Up & Usage",
    items: [
      {
        q: "What are the subscription plans?",
        a: "Choose a plan by role — Homeschooler, Supplementary, Tutor, Teacher, or Institution — each with monthly and yearly billing.",
      },
      {
        q: "How does my student's work get graded?",
        a: "You will be responsible for grading your student's work using the answer keys provided with your curriculum available on the parent portal. A grading option will be available soon.",
      },
      {
        q: "Where do I need to live to use Schoolio?",
        a: "Schoolio is fully online and available worldwide. Curriculum is aligned to North American standards but works anywhere.",
      },
      {
        q: "What grade levels are available on the platform?",
        a: "Schoolio Digital covers grades 1 to 8 across all core subjects.",
      },
      {
        q: "What are the technology requirements to use the platform?",
        a: "Any modern browser on a laptop, desktop, or tablet with an internet connection. No installation required.",
      },
      {
        q: "Who is this platform for?",
        a: "Homeschooling families, parents supplementing school, tutors, classroom teachers, and institutions.",
      },
    ],
  },
  {
    id: "grading",
    title: "Grading & Scheduling",
    items: [
      {
        q: "Can I plan a whole year at once?",
        a: "Yes — you can organize an entire year of learning with one click and adjust the schedule any time.",
      },
      {
        q: "Does the platform track progress automatically?",
        a: "Completion, quiz scores, and time on task are tracked automatically and shown on your dashboard.",
      },
    ],
  },
  {
    id: "program-info",
    title: "Schoolio Program Information",
    items: [
      {
        q: "Is the curriculum secular?",
        a: "Yes. Schoolio is truly secular, inclusive, and diversity driven.",
      },
      {
        q: "How often is new content released?",
        a: "New topics and subjects are added regularly. We strive to have new releases as fast as we are able to.",
      },
      {
        q: "Can I use it alongside another curriculum?",
        a: "Absolutely. Many families use Schoolio to supplement or fill gaps in another program.",
      },
    ],
  },
  {
    id: "data-usage",
    title: "Data Usage",
    items: [
      {
        q: "How is my family's data protected?",
        a: "Student data is encrypted in transit and at rest, and is never sold to third parties.",
      },
      {
        q: "Can I export or delete my data?",
        a: "Yes. You can request an export or full deletion of your account data from the parent portal at any time.",
      },
    ],
  },
];
