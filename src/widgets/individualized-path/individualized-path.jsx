import { FeatureSection } from "@/shared/ui/feature-section";
import "./individualized-path.css";

const points = [
  "Perfect for ESL and IEP learners",
  "Assign individualized catch up and enrichment lessons",
  "Match curriculum based on interest and proficiency",
  "Create custom lessons from scratch unique to your learner",
];

const kids = [
  { src: "/images/features/path-kid-2.jpg", alt: "Learner" },
  { src: "/images/features/path-kid-3.jpg", alt: "Learner" },
  { src: "/images/features/path-kid-1.jpg", alt: "Learner" },
  { src: "/images/features/path-kid-4.jpg", alt: "Learner" },
];

const tags = [
  { label: "Biology", color: "#5e328b" },
  { label: "Writing", color: "#dec31d" },
  { label: "Fraction", color: "#3d6fb1" },
  { label: "Poetry", color: "#72bfde" },
  { label: "Music", color: "#85bc57" },
  { label: "Art", color: "#d97139" },
  { label: "Physics", color: "#d13636" },
];

const Collage = () => (
  <div className="path-collage">
    <div className="path-collage__grid">
      {kids.map((kid, i) => (
        <img
          key={kid.src}
          src={kid.src}
          alt={kid.alt}
          loading="lazy"
          className={`path-collage__photo path-collage__photo--${i + 1}`}
        />
      ))}
    </div>

    <ul className="path-collage__tags">
      {tags.map((tag) => (
        <li key={tag.label} style={{ color: tag.color }}>
          <span className="path-collage__dot" aria-hidden="true" />
          {tag.label}
        </li>
      ))}
    </ul>
  </div>
);

export const IndividualizedPath = () => (
  <FeatureSection
    id="individualized-path"
    bg="#f0f6ff"
    eyebrow="Every child is unique, give them a truly..."
    title="Individualized Learning Path"
    points={points}
    divider="#bcd0ec"
    media={<Collage />}
  />
);
