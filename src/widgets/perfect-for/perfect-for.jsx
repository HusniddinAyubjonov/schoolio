import { Button } from "@/shared/ui/button";
import { scrollToId } from "@/shared/lib";
import { roles } from "./roles-data.js";
import { RoleArt } from "./role-art.jsx";

export const PerfectFor = () => {
  return (
    <section className="perfect-for" id="perfect-for">
      <h2 className="perfect-for__title">Perfect for</h2>

      <div className="perfect-for__rows">
        {roles.map((role) => (
          <article
            key={role.id}
            className="role"
            id={`perfect-for-${role.id}`}
            style={{ "--tone": role.tone }}
          >
            <h3 className="role__title" style={{ color: role.tone }}>
              {role.title}
            </h3>

            <div className="role__cols">
              <RoleArt
                gradient={role.gradient}
                doodle={role.doodle}
                image={role.image}
                alt={role.title}
              />

              <div className="role__content">
                <ul className="role__list">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <Button
                  className="role__cta"
                  onClick={() => scrollToId("trial")}
                >
                  {role.cta}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
