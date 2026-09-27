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
    "Hi! Welcome to my corner of the web, a place where I share what I'm learning, the things I build, and some of my favorite shots from my Canon PowerShot S95!",
  ],
  facts: [
    "B.S. in CS & Cognitive Brain Science at Tufts University, minor in Economics",
    "Building Acorn, a gamified habit tracker for medication management",
    "Interested in software, product & digital photography",
  ],
  // Quick-link chips in the hero. Replace href values with your real links.
  links: {
    github: "https://github.com/kubsgok",
    linkedin: "https://linkedin.com/in/kabir-goklani",
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
    org: "athenahealth",
    dates: "June 2026 - August 2026",
    description:
      "Built Existing Order Alert, a React micro-frontend that surfaces a patient's outstanding and recently-resulted lab orders right where providers place new ones, cutting redundant lab and imaging orders across a platform used by 160K+ providers.",
  },
  {
    role: "Web Development Intern",
    org: "Twimbit",
    dates: "June 2025 - August 2025",
    description:
      "Built customer-facing event pages and payment modals, and led the internal research that made Webflow the team's primary no-code framework.",
  },
  {
    role: "Software Engineer Intern",
    org: "Teamie",
    dates: "September 2023 - December 2023",
    description:
      "Built a certificate builder with React and the Polotno SDK for Teamie's edtech platform, letting educators issue certificates in minutes; 50+ schools adopted it within three months.",
  },
  {
    role: "Data Science Intern",
    org: "CUSMAT Technologies",
    dates: "June 2023 - July 2023",
    description:
      "Analyzed VR mining-simulation data in Python to surface operator error patterns, identifying three recurring mistakes behind a 15% higher failure rate that guided a redesign of the training modules.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // The little glyph shown on the card thumbnail. See ProjectIcon in Projects.tsx.
  icon: "plant" | "chart" | "paw" | "code" | "dumbbell" | "database" | "users";
  // Optional screenshot (path in /public) used as the thumbnail instead of the icon.
  image?: string;
  // Optional CSS object-position for the thumbnail crop (e.g. "left", "top").
  imagePosition?: string;
  links: { label: string; href: string; icon: "github" | "external" }[];
};

export const projects: Project[] = [
  {
    title: "Acorn",
    description:
      "A medication tracker that turns adherence into a daily ritual: log your doses, keep a streak, and spend earned acorns furnishing a cozy room with a squirrel companion.",
    tags: ["React Native", "Expo", "Supabase"],
    icon: "plant",
    image: "/projects/acorn.png",
    imagePosition: "center top",
    links: [
      { label: "Code", href: "https://github.com/kubsgok/acorn", icon: "github" },
      { label: "Live", href: "https://acorn-mgc.expo.app/", icon: "external" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=pbiAwnFswRU", icon: "external" },
    ],
  },
  {
    title: "FlowCode",
    description:
      "A coding-practice platform powered by the Claude API, with adaptive hints and difficulty that adapts to how you're doing.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"],
    icon: "code",
    image: "/projects/flowcode.png",
    links: [
      { label: "Code", href: "https://github.com/kubsgok/flowcode", icon: "github" },
      { label: "Live", href: "https://flowcode-dm84.onrender.com/", icon: "external" },
    ],
  },
  {
    title: "FitWise",
    description:
      "An AI fitness trainer that uses your webcam to count reps and correct your form in real time, with a voice coach powered by Gemini and ElevenLabs.",
    tags: ["Next.js", "Python", "MediaPipe", "Gemini"],
    icon: "dumbbell",
    image: "/projects/fitwise.png",
    links: [
      { label: "Code", href: "https://github.com/kubsgok/FitWise", icon: "github" },
      { label: "Devpost", href: "https://devpost.com/software/fitwise", icon: "external" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=hcIM5p1gJec", icon: "external" },
    ],
  },
  {
    title: "Film Society Database System",
    description:
      "A full-stack portal and database system that helps school chapters of film honor societies manage their members and records in one place.",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    icon: "database",
    image: "/projects/film-society.png",
    imagePosition: "left top",
    links: [
      {
        label: "Code",
        href: "https://github.com/kubsgok/Film-Society-Database-System",
        icon: "github",
      },
    ],
  },
  {
    title: "CineLog",
    description:
      "A movie-logging web app for searching films, logging what you've watched with star ratings, and tracking your viewing stats.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
    icon: "chart",
    image: "/projects/cinelog.png",
    imagePosition: "center top",
    links: [
      { label: "Code", href: "https://github.com/kubsgok/cinelog", icon: "github" },
      { label: "Live", href: "https://cinelog-sigma-ten.vercel.app/", icon: "external" },
    ],
  },
  {
    title: "JumBuddy",
    description:
      "A social app for Tufts students to meet classmates through shared interests and classes, and post or join campus events. Built at JumboHack 2025.",
    tags: ["React Native", "Expo", "Airtable"],
    icon: "users",
    image: "/projects/jumbuddy.png",
    imagePosition: "center top",
    links: [
      { label: "Code", href: "https://github.com/rakshitranga/jumbuddy", icon: "github" },
      { label: "Devpost", href: "https://devpost.com/software/jumbuddy", icon: "external" },
      { label: "Demo", href: "https://youtube.com/shorts/69T6bRZ5KPg", icon: "external" },
    ],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href: string;
};

export const publications: Publication[] = [
  {
    title:
      "Comparing Demographic Representation in AI-Generated and Stock Images of Occupations",
    authors: "Goklani, K. & Flanagan, T.",
    venue: "Journal of Student Research",
    year: "2024",
    href: "https://www.researchgate.net/publication/389007689_Comparing_Demographic_Representation_in_AI-Generated_and_Stock_Images_of_Occupations",
  },
];

export type Photo = {
  // Files live in /public/photos. width/height are the image's real pixel
  // dimensions — the masonry uses them to lay tiles out correctly.
  src: string;
  width: number;
  height: number;
  caption: string; // optional — leave "" for no caption in the lightbox
};

// The first photo is featured as the large hero at the top of the gallery.
export const photos: Photo[] = [
  { src: "/photos/IMG_9737.JPG", width: 3648, height: 2736, caption: "Mount Asahidake, Hokkaido, Japan" },
  { src: "/photos/IMG_9805.JPG", width: 3648, height: 2736, caption: "Lake Shikotsu, Hokkaido, Japan" },
  { src: "/photos/IMG_9866.JPG", width: 3648, height: 2736, caption: "Some plane window view (idk where I took this tbh)" },
  { src: "/photos/IMG_9681.JPG", width: 3648, height: 2736, caption: "Cloudscape through the window in Hokkaido, Japan" },
  { src: "/photos/IMG_9552.JPG", width: 3648, height: 2736, caption: "Shibuya at night, Tokyo, Japan" },
  { src: "/photos/IMG_9475.JPG", width: 3648, height: 2736, caption: "Henderson Waves, Singapore" },
  { src: "/photos/IMG_2308.JPG", width: 3648, height: 2736, caption: "Game 7: Boston vs. Philly" },
  { src: "/photos/IMG_2542.JPG", width: 3648, height: 2736, caption: "Late-night excursion at Tufts" },
  { src: "/photos/IMG_0745.JPG", width: 3648, height: 2736, caption: "Middlesex Fells, Medford, MA" },
  { src: "/photos/IMG_2426.JPG", width: 3648, height: 2736, caption: "Wynwood Walls, Miami" },
];
