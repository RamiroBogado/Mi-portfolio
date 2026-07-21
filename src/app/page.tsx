import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
