import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PowerBIProjects from "./components/PowerBIProjects";
import SQLProjects from "./components/SQLProjects";
import PythonProjects from "./components/PythonProjects";
import ExcelProjects from "./components/ExcelProjects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PowerBIProjects />
        <SQLProjects />
        <PythonProjects />
        <ExcelProjects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}