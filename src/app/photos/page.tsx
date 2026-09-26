import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `Digital Photography — ${profile.name}`,
  description: "A gallery of photos.",
};

export default function PhotosPage() {
  return (
    <main className="container-wide">
      <p className="eyebrow">Digital Photography</p>
      <h1 className="section-title">My Viewfinder</h1>
      <p className="photos-intro">
        Places I&apos;ve been and things worth stopping for. Click any photo to view
        it full-size.
      </p>
      <PhotoGallery />
    </main>
  );
}
