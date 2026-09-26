import { projects, type Project } from "@/data/site";
import {
  PlantIcon,
  ChartIcon,
  PawIcon,
  CodeIcon,
  DumbbellIcon,
  DatabaseIcon,
  UsersIcon,
  GithubIcon,
  ExternalIcon,
} from "./icons";

const thumbIcons = {
  plant: PlantIcon,
  chart: ChartIcon,
  paw: PawIcon,
  code: CodeIcon,
  dumbbell: DumbbellIcon,
  database: DatabaseIcon,
  users: UsersIcon,
};

const linkIcons = {
  github: GithubIcon,
  external: ExternalIcon,
};

function Card({ project }: { project: Project }) {
  const Thumb = thumbIcons[project.icon];
  return (
    <article className="project-card">
      <div className="project-thumb">
        {project.image ? (
          // A screenshot thumbnail overrides the icon glyph.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-thumb-img"
            style={
              project.imagePosition
                ? { objectPosition: project.imagePosition }
                : undefined
            }
          />
        ) : (
          <Thumb aria-hidden />
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => {
            const LinkIcon = linkIcons[link.icon];
            return (
              <a
                key={link.label}
                className="project-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon aria-hidden /> {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Projects</p>
      <h2 className="section-title">Things I&apos;ve built</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <Card project={p} key={p.title} />
        ))}
      </div>
    </section>
  );
}
