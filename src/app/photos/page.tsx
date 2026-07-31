import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `Photography — ${profile.name}`,
  description: "A gallery of photos.",
};

export default function PhotosPage() {
  return (
    <main className="container-wide">
      <p className="eyebrow">Photography</p>
      <h1 className="section-title">Through my lens</h1>
      <p className="photos-intro">
        A collection of moments I&apos;ve caught along the way. Click any photo to
        view it full-size, then use the arrow keys to move through the set.
      </p>
      <PhotoGallery />
    </main>
  );
}
