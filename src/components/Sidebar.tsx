"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import {
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  BookIcon,
  CameraIcon,
  MoonIcon,
  SunIcon,
} from "./icons";

const navItems = [
  { id: "about", href: "/#about", label: "About", Icon: UserIcon },
  { id: "experience", href: "/#experience", label: "Experience", Icon: BriefcaseIcon },
  { id: "projects", href: "/#projects", label: "Projects", Icon: FolderIcon },
  { id: "publications", href: "/#publications", label: "Research", Icon: BookIcon },
  { id: "photos", href: "/photos", label: "Digital Photography", Icon: CameraIcon },
];

// The section ids on the home page, in document order.
const homeSections = ["about", "experience", "projects", "publications"];

export default function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  // Active nav state. On /photos it's fixed; on the home page a scroll-spy
  // observer moves it as each section passes the middle of the viewport.
  useEffect(() => {
    if (pathname.startsWith("/photos")) {
      setActiveId("photos");
      return;
    }
    if (pathname !== "/") {
      setActiveId("");
      return;
    }

    setActiveId("about");
    const visible = new Set<string>();
    const els = homeSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Pick the first section (in document order) currently crossing the band.
        const current = homeSections.find((id) => visible.has(id));
        if (current) setActiveId(current);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function toggleTheme(e: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const nowLight = !root.classList.contains("light");

    const applyTheme = () => {
      root.classList.toggle("light", nowLight);
      try {
        localStorage.setItem("theme", nowLight ? "light" : "dark");
      } catch {}
      setIsLight(nowLight);
    };

    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      }
    ).startViewTransition;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // No View Transitions support (or reduced motion): switch instantly.
    if (!startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    // Reveal origin follows the toggle: the button's center on desktop
    // (bottom-left of the rail), and the top-right corner on small screens
    // where the rail collapses into a top bar and the toggle sits top-right.
    const topBar = window.matchMedia("(max-width: 760px)").matches;
    let x: number;
    let y: number;
    if (topBar) {
      x = window.innerWidth;
      y = 0;
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }
    // Distance to the farthest corner (tiny margin so the corner pixel is
    // covered). Linear easing below reaches this exactly at the animation end,
    // so the reveal animates at a steady pace all the way through — no dead
    // time, no decelerating tail.
    const endRadius =
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      ) * 1.02;

    const transition = startViewTransition.call(document, applyTheme);
    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "linear",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }

  // Smooth-scroll to a section when the rail is clicked on the home page.
  function handleNavClick(
    e: MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) {
    if (!href.startsWith("/#") || pathname !== "/") return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", href);
    setActiveId(id);
  }

  return (
    <nav className="rail" aria-label="Primary">
      {navItems.map(({ id, href, label, Icon }) => {
        const active = id === activeId;
        return (
          <Link
            key={id}
            href={href}
            onClick={(e) => handleNavClick(e, id, href)}
            className={`rail-btn${active ? " active" : ""}`}
            data-label={label}
            aria-label={label}
            aria-current={active ? "page" : undefined}
          >
            <Icon aria-hidden />
          </Link>
        );
      })}

      <span className="rail-spacer" />

      <button
        type="button"
        className="rail-btn"
        onClick={toggleTheme}
        data-label={mounted && isLight ? "Dark mode" : "Light mode"}
        aria-label="Toggle color theme"
      >
        {mounted && isLight ? <MoonIcon aria-hidden /> : <SunIcon aria-hidden />}
      </button>
    </nav>
  );
}
