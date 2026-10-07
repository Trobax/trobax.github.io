import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/ui/timeline";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* NOTE: no `overflow-x-hidden` here — an overflow ancestor turns into a
       scroll container and silently breaks the pinned timeline. Horizontal
       overflow is clipped on <body> with `overflow-x: clip` instead. */
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
