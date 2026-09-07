import { FeatureSection } from "@/shared/ui/feature-section";
import "./library-grows.css";

const points = [
  "Access thousands of lessons across core subjects: Math, Language, Science, and Social Studies",
  "Flexible scheduling and curriculum based on your learner’s progress and understanding level",
  "Increase engagement with interest-based electives and live classes",
  "Gap assessment that continuously helps you improve content delivery",
];

export const LibraryGrows = () => (
  <FeatureSection
    id="library-grows"
    bg="#fcf1eb"
    title="A Library That Grows With Your Learner"
    points={points}
    divider="#ecd6c8"
    media={
      <div className="library-grows__frame">
        <img
          src="/images/features/library.jpg"
          alt="Schoolio lesson library"
          loading="lazy"
        />
      </div>
    }
  />
);
