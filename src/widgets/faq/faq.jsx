import { useId, useState } from "react";
import { Reveal } from "@/shared/ui/reveal";
import { faqGroups } from "./faq-data.js";

const FaqQuestion = ({ item }) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={`faq-q ${open ? "faq-q--open" : ""}`}>
      <button
        type="button"
        className="faq-q__trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.q}</span>
        <span className="faq-q__chevron" aria-hidden="true" />
      </button>
      <div id={id} className="faq-q__collapse" role="region">
        <div className="faq-q__panel">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqGroup = ({ group, open, onToggle }) => {
  const id = useId();

  return (
    <div className={`faq-group ${open ? "faq-group--open" : ""}`}>
      <button
        type="button"
        className="faq-group__trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{group.title}</span>
        <span className="faq-group__chevron" aria-hidden="true" />
      </button>
      <div id={id} className="faq-group__collapse">
        <div className="faq-group__panel">
          {group.items.map((item) => (
            <FaqQuestion key={item.q} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Faq = () => {
  const [openGroup, setOpenGroup] = useState(faqGroups[1]?.id ?? null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <Reveal as="h2" className="faq__title">
          FAQ
        </Reveal>

        <div className="faq__list">
          {faqGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 70}>
              <FaqGroup
                group={group}
                open={openGroup === group.id}
                onToggle={() =>
                  setOpenGroup((cur) => (cur === group.id ? null : group.id))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
