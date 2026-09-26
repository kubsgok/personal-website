"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { FileIcon, CloseIcon, ExternalIcon } from "./icons";

// The Resume chip stays a real link (so cmd/middle-click still opens a new tab),
// but a plain left-click opens the PDF in an on-page modal instead of navigating.
export default function ResumeChip({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Play the exit animation, then unmount.
  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 190);
  }, []);

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setClosing(false);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <a
        className="chip"
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        aria-haspopup="dialog"
      >
        <FileIcon aria-hidden /> Resume
      </a>

      {open && (
        <div
          className={`resume-modal${closing ? " closing" : ""}`}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
        >
          <div className="resume-panel" onClick={(e) => e.stopPropagation()}>
            <div className="resume-panel-head">
              <span className="resume-panel-title">Resume</span>
              <div className="resume-panel-actions">
                <a
                  className="resume-action"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalIcon aria-hidden /> Open in new tab
                </a>
                <button
                  type="button"
                  className="resume-close"
                  onClick={close}
                  aria-label="Close"
                >
                  <CloseIcon aria-hidden />
                </button>
              </div>
            </div>
            <iframe src={href} title="Resume" className="resume-frame" />
          </div>
        </div>
      )}
    </>
  );
}
