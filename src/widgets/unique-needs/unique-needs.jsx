import { FeatureSection } from "@/shared/ui/feature-section";
import "./unique-needs.css";

const points = [
  "Bite-sized learning sessions for maximum engagement and attention",
  "Audio, video, and printable available",
  "Activity variety",
  "Mix-and-match grade levels",
  "Choose digital or handwritten practice",
  "Custom scheduling",
];

export const UniqueNeeds = () => (
  <FeatureSection
    id="unique-needs"
    bg="#e0a179"
    flush
    title="Have a Unique Needs Learner?"
    subtitle="Experience the #1 best program for neurodivergent students! Designed with uniqueness in mind!"
    points={points}
    divider="rgba(255, 255, 255, 0.55)"
    media={
      <div className="unique-needs__frame">
        <span className="unique-needs__doodle" aria-hidden="true" />
        <img
          src="/images/features/unique-needs.jpg"
          alt="A learner working through a lesson"
          loading="lazy"
        />
      </div>
    }
  />
);
