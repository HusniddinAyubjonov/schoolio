import { Button } from "@/shared/ui/button";
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
        <p className="quick-start__eyebrow">Feeling overwhelmed?</p>
        <h2 className="quick-start__title">Quickly start as a</h2>

        <div className="quick-start__roles">
          {startRoles.map((role) => (
            <Button
              key={role.label}
              className="quick-start__btn"
              onClick={() => scrollToId(role.target)}
            >
              {role.label}
            </Button>
          ))}
        </div>

        <p className="quick-start__help">
          Not Sure Where to Start?{" "}
          <a href="#faq" className="quick-start__help-link">
            Get Help
          </a>
        </p>
      </div>
    </section>
  );
};
