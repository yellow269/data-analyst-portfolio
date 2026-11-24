import { Suspense } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ContactFallback() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            Get In Touch
          </span>
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Available for freelance projects, consulting engagements, and remote full-time roles.
            Based in Mossel Bay, South Africa (GMT+2) — timezone flexible for international clients.
          </p>
        </div>
        <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto animate-pulse">
          <div className="h-8 bg-navy-800 rounded w-3/4 mx-auto mb-4" />
          <div className="h-4 bg-navy-800 rounded w-full mb-2" />
          <div className="h-4 bg-navy-800 rounded w-5/6 mx-auto mb-2" />
          <div className="h-4 bg-navy-800 rounded w-4/6 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Suspense fallback={<ContactFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}