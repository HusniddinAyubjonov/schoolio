import { FeatureSection } from "@/shared/ui/feature-section";
import "./flexible-style.css";

const points = [
  "Print-and-go curriculum books",
  "Tablet-friendly annotatable lessons and worksheets",
  "Add your own videos and worksheets",
  "Switch up your learning, from the park bench to a long road trip, with you anywhere you go!",
];

export const FlexibleStyle = () => (
  <FeatureSection
    id="flexible-style"
    bg="#f5ffe0"
    title={
      <>
        Flexible to Your Style:
        <br />
        Online, Offline, or Hybrid
      </>
    }
    points={points}
    divider="#d6e6bb"
    media={
      <div className="flexible-media">
        <img
          src="/images/features/flexible-1.jpg"
          alt="Learning outdoors"
          loading="lazy"
          className="flexible-media__back"
        />
        <img
          src="/images/features/flexible-2.jpg"
          alt="Learning at home"
          loading="lazy"
          className="flexible-media__front"
        />
      </div>
    }
  />
);
