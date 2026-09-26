import { publications } from "@/data/site";
import { ExternalIcon } from "./icons";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <p className="eyebrow">Research</p>
      <h2 className="section-title">Published work</h2>

      <div className="pub-list">
        {publications.map((pub) => (
          <a
            key={pub.title}
            className="pub-item"
            href={pub.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="pub-title">
              {pub.title}
              <ExternalIcon aria-hidden />
            </span>
            <span className="pub-meta">
              {pub.authors} · {pub.venue}, {pub.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
