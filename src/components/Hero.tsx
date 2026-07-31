import { profile } from "@/data/site";
import { GithubIcon, LinkedinIcon, FileIcon, MailIcon } from "./icons";

// Initials fallback shown until you drop a real photo into /public/portrait.jpg
// (then uncomment the <img> below).
function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Hero() {
  const { name, headlineLead, headlineAccent, bio, facts, links } = profile;

  return (
    <section id="about" className="section hero">
      <div>
        <h1 className="hero-headline">
          {headlineLead} <span className="accent">{headlineAccent}</span>
        </h1>

        {bio.map((p, i) => (
          <p key={i} className="hero-bio">
            {p}
          </p>
        ))}

        <ul className="facts">
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="chips">
          <a className="chip" href={links.github} target="_blank" rel="noreferrer">
            <GithubIcon aria-hidden /> GitHub
          </a>
          <a className="chip" href={links.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon aria-hidden /> LinkedIn
          </a>
          <a className="chip" href={links.resume} target="_blank" rel="noreferrer">
            <FileIcon aria-hidden /> Resume
          </a>
          <a className="chip" href={`mailto:${links.email}`}>
            <MailIcon aria-hidden /> Email
          </a>
        </div>
      </div>

      <div className="portrait" aria-hidden>
        {/* Drop a photo at /public/portrait.jpg and swap the initials for:
            <img src="/portrait.jpg" alt="Portrait of ${name}" /> */}
        {initials(name)}
      </div>
    </section>
  );
}
