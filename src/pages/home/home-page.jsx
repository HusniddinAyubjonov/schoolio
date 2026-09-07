import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { EducationJourney } from "@/widgets/education-journey";
import { AllInOneSolution } from "@/widgets/all-in-one-solution";
import { Wellbeing } from "@/widgets/wellbeing";
import { PerfectFor } from "@/widgets/perfect-for";
import { TrustedBy } from "@/widgets/trusted-by";
import { Testimonials } from "@/widgets/testimonials";
import { FreeTrial } from "@/widgets/free-trial";
import { Faq } from "@/widgets/faq";
import { QuickStart } from "@/widgets/quick-start";
import { Footer } from "@/widgets/footer";

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
        <PerfectFor />
        <TrustedBy />
        <Testimonials />
        <FreeTrial id={null} />
        <Faq />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
};
