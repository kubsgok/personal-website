"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  CameraIcon,
  MoonIcon,
  SunIcon,
} from "./icons";

const navItems = [
  { href: "/", label: "Home", Icon: HomeIcon, match: (p: string) => p === "/" },
  { href: "/#about", label: "About", Icon: UserIcon },
  { href: "/#experience", label: "Experience", Icon: BriefcaseIcon },
  { href: "/#projects", label: "Projects", Icon: FolderIcon },
  {
    href: "/photos",
    label: "Photography",
    Icon: CameraIcon,
    match: (p: string) => p.startsWith("/photos"),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggleTheme() {
    const nowLight = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", nowLight);
    try {
      localStorage.setItem("theme", nowLight ? "light" : "dark");
    } catch {}
    setIsLight(nowLight);
  }

  return (
    <nav className="rail" aria-label="Primary">
      {navItems.map(({ href, label, Icon, match }) => {
        const active = match ? match(pathname) : false;
        return (
          <Link
            key={href}
            href={href}
            className={`rail-btn${active ? " active" : ""}`}
            data-label={label}
            aria-label={label}
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
