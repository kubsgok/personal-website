import { profile } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import ResumeChip from "./ResumeChip";

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
          <ResumeChip href={links.resume} />
          <a className="chip" href={`mailto:${links.email}`}>
            <MailIcon aria-hidden /> Email
          </a>
        </div>
      </div>

      <div className="portrait">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.jpg" alt={`Portrait of ${name}`} />
      </div>
    </section>
  );
}
