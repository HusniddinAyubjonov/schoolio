import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/reveal";
import { scrollToId } from "@/shared/lib";

const startRoles = [
  { label: "Parent", target: "perfect-for-homeschooling" },
  { label: "Teacher", target: "perfect-for-teachers" },
  { label: "Tutor", target: "perfect-for-tutors" },
  { label: "Institution", target: "perfect-for-institutions" },
];

export const QuickStart = () => {
  return (
    <section className="quick-start" id="quick-start">
      <div className="quick-start__inner">
        <Reveal as="p" className="quick-start__eyebrow">
          Feeling overwhelmed?
        </Reveal>
        <Reveal as="h2" className="quick-start__title" delay={60}>
          Quickly start as a
        </Reveal>

        <div className="quick-start__roles">
          {startRoles.map((role, index) => (
            <Reveal
              key={role.label}
              variant="zoom"
              delay={120 + index * 80}
              className="quick-start__btn-wrap"
            >
              <Button
                className="quick-start__btn"
                onClick={() => scrollToId(role.target)}
              >
                {role.label}
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="quick-start__help" delay={460}>
          Not Sure Where to Start?{" "}
          <a href="#faq" className="quick-start__help-link">
            Get Help
          </a>
        </Reveal>
      </div>
    </section>
  );
};
