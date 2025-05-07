import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      {/* <Encryption /> */}
      <Projects />
    </main>
  );
}
