import type { Metadata } from "next";
import { Inter, Lora, Newsreader } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { profile } from "@/data/site";

// Body prose uses Lora (warm serif); Inter is kept for small UI labels/tooltips.
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}'s Portfolio`,
  description: `${profile.name} is a CS major who builds. Projects, experience, and photography.`,
};

// Sets the theme before first paint so there's no flash. Dark is the default;
// only a stored "light" preference switches it.
const themeInit = `
try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Sidebar />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
