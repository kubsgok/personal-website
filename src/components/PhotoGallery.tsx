"use client";

import { useCallback, useEffect, useState } from "react";
import { photos } from "@/data/site";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

export default function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const [hero, ...rest] = photos;

  return (
    <>
      {/* Featured hero (photos[0]), then the rest in a 3-column grid. */}
      <button
        className="photo-hero"
        onClick={() => setOpen(0)}
        aria-label="Open featured photo"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.src} alt={hero.caption || "Featured photograph"} />
      </button>

      <div className="photo-grid">
        {rest.map((photo, idx) => {
          const i = idx + 1;
          return (
            <button
              key={photo.src}
              className="photo-grid-item"
              onClick={() => setOpen(i)}
              aria-label={`Open photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.caption || `Photograph ${i + 1}`}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">
            <CloseIcon aria-hidden />
          </button>
          <button
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeftIcon aria-hidden />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[open].src}
            alt={photos[open].caption || `Photograph ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRightIcon aria-hidden />
          </button>
          <div className="lightbox-caption">
            {photos[open].caption && (
              <span className="lightbox-caption-text">
                {photos[open].caption}
              </span>
            )}
            <span className="lightbox-caption-count">
              {open + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
