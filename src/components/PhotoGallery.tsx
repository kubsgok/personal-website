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

  return (
    <>
      <div className="masonry">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            className="masonry-item"
            onClick={() => setOpen(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            {/* Plain <img> so placeholder (picsum) images work with no config.
                Swap src values in src/data/site.ts for your own photos. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.caption}
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />
          </button>
        ))}
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
            alt={photos[open].caption}
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
          <p className="lightbox-caption">
            {open + 1} / {photos.length} · {photos[open].caption}
          </p>
        </div>
      )}
    </>
  );
}
