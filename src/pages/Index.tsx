import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Differentiators from "@/components/portfolio/Differentiators";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Stats from "@/components/portfolio/Stats";
import Experience from "@/components/portfolio/Experience";
import Writing from "@/components/portfolio/Writing";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Differentiators />
        <Projects />
        <Skills />
        <Stats />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
