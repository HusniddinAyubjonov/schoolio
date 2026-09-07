import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { EducationJourney } from "@/widgets/education-journey";
import { AllInOneSolution } from "@/widgets/all-in-one-solution";
import { FreeTrial } from "@/widgets/free-trial";
import { Wellbeing } from "@/widgets/wellbeing";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <EducationJourney />
        <AllInOneSolution />
        <FreeTrial />
        <Wellbeing />
      </main>
    </div>
  );
};

