import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2 className="section-title">Where I&apos;ve been</h2>

      <div className="timeline">
        {experience.map((item) => (
          <div className="tl-item" key={item.role + item.org}>
            <div className="tl-head">
              <span>
                <span className="tl-role">{item.role}</span>{" "}
                <span className="tl-org">· {item.org}</span>
              </span>
              <span className="tl-dates">{item.dates}</span>
            </div>
            <p className="tl-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
