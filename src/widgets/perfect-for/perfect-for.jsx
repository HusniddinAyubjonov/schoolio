import { Button } from "@/shared/ui/button";
import { scrollToId } from "@/shared/lib";
import { roles } from "./roles-data.js";
import { RoleArt } from "./role-art.jsx";

export const PerfectFor = () => {
  return (
    <section className="perfect-for" id="perfect-for">
      {roles.map((role) => (
        <article
          key={role.id}
          className={`role role--${role.tone}`}
          id={`perfect-for-${role.id}`}
        >
          <header className="role__head">
            {role.eyebrow && <p className="role__eyebrow">{role.eyebrow}</p>}
            <h2 className="role__title">{role.title}</h2>
          </header>

          <RoleArt
            tone={role.tone}
            doodle={role.doodle}
            image={role.image}
            alt={role.title}
          />

          <ul className="role__list">
            {role.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Button
            className={`role__cta role__cta--${role.tone}`}
            onClick={() => scrollToId("trial")}
          >
            {role.cta}
          </Button>
        </article>
      ))}
    </section>
  );
};
