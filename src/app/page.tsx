import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Experience />
      <Projects />
      <Publications />
    </main>
  );
}
