// ---------------------------------------------------------------------------
// Site content. Everything a first-time visitor reads lives here so you can
// edit words and links without touching the components. Swap the placeholder
// copy, links, and images for the real thing.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Kabir Goklani",
  // The big serif line on the homepage. The part in <accent> renders green.
  headlineLead: "Kabir Goklani is a",
  headlineAccent: "CS major who builds.",
  bio: [
    "Welcome to my corner of the web, where I write about the things I build and the photos I take along the way.",
    "I'm a computer science student focused on full-stack and mobile development — turning rough ideas into things people can actually use.",
  ],
  facts: [
    "B.S. Computer Science",
    "Building Acorn, a habit-tracking mobile app",
    "Interested in product, design & photography",
  ],
  // Quick-link chips in the hero. Replace href values with your real links.
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    resume: "/resume.pdf",
    email: "kabir.goklani@gmail.com",
  },
};

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    org: "Acme Corp",
    dates: "Summer 2025",
    description:
      "Built internal tooling in React and Go; shipped a dashboard used by 40+ people across the team.",
  },
  {
    role: "Teaching Assistant, Data Structures",
    org: "University",
    dates: "2024 – 2025",
    description:
      "Led weekly lab sections and held office hours for 60 students learning algorithms and data structures.",
  },
  {
    role: "B.S. Computer Science",
    org: "University",
    dates: "2023 – 2027 (expected)",
    description: "Coursework across systems, algorithms, and human–computer interaction.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // The little glyph shown on the card thumbnail. See ProjectIcon in Projects.tsx.
  icon: "plant" | "chart" | "paw" | "code";
  links: { label: string; href: string; icon: "github" | "external" }[];
};

export const projects: Project[] = [
  {
    title: "Acorn",
    description:
      "A habit-tracking app that grows a personal forest as you build streaks. Full stack, offline sync, and a drag-and-drop forest grid.",
    tags: ["React Native", "Expo", "Supabase"],
    icon: "plant",
    links: [
      { label: "Code", href: "https://github.com/", icon: "github" },
      { label: "Demo", href: "#", icon: "external" },
    ],
  },
  {
    title: "MediPet",
    description:
      "A playful medication-reminder app where caring for a virtual pet keeps you on track with your own routine.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: "paw",
    links: [{ label: "Code", href: "https://github.com/", icon: "github" }],
  },
  {
    title: "Stocketa",
    description:
      "A clean portfolio tracker with delightful charts and a focus on calm, glanceable design.",
    tags: ["Next.js", "TypeScript"],
    icon: "chart",
    links: [
      { label: "Code", href: "https://github.com/", icon: "github" },
      { label: "Live", href: "#", icon: "external" },
    ],
  },
  {
    title: "Another Project",
    description:
      "Short one-line description of what it is and what you built. Add or remove projects by editing src/data/site.ts.",
    tags: ["Python", "FastAPI"],
    icon: "code",
    links: [{ label: "Code", href: "https://github.com/", icon: "github" }],
  },
];

export type Photo = {
  // Placeholder images come from picsum.photos so the gallery looks real.
  // Replace `src` with your own image paths in /public (e.g. "/photos/japan-01.jpg").
  src: string;
  width: number;
  height: number;
  caption: string;
};

// A seeded picsum URL gives a stable image at a chosen aspect ratio.
const seed = (s: string, w: number, h: number) =>
  `https://picsum.photos/seed/${s}/${w}/${h}`;

export const photos: Photo[] = [
  { src: seed("kg-a", 800, 1000), width: 800, height: 1000, caption: "Placeholder — replace with your own" },
  { src: seed("kg-b", 900, 600), width: 900, height: 600, caption: "Placeholder — replace with your own" },
  { src: seed("kg-c", 800, 1100), width: 800, height: 1100, caption: "Placeholder — replace with your own" },
  { src: seed("kg-d", 900, 700), width: 900, height: 700, caption: "Placeholder — replace with your own" },
  { src: seed("kg-e", 800, 800), width: 800, height: 800, caption: "Placeholder — replace with your own" },
  { src: seed("kg-f", 900, 1200), width: 900, height: 1200, caption: "Placeholder — replace with your own" },
  { src: seed("kg-g", 900, 600), width: 900, height: 600, caption: "Placeholder — replace with your own" },
  { src: seed("kg-h", 800, 950), width: 800, height: 950, caption: "Placeholder — replace with your own" },
  { src: seed("kg-i", 900, 640), width: 900, height: 640, caption: "Placeholder — replace with your own" },
  { src: seed("kg-j", 800, 1050), width: 800, height: 1050, caption: "Placeholder — replace with your own" },
  { src: seed("kg-k", 900, 700), width: 900, height: 700, caption: "Placeholder — replace with your own" },
  { src: seed("kg-l", 800, 900), width: 800, height: 900, caption: "Placeholder — replace with your own" },
];
