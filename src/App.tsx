import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import IntroLoader from './components/intro/IntroLoader';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import PersonalStatement from './components/sections/PersonalStatement';
import Projects from './components/sections/Projects';
import CaseStudies from './components/sections/CaseStudies';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import Capabilities from './components/sections/Capabilities';
import AIWorkflow from './components/sections/AIWorkflow';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer';

export const App: React.FC = () => {
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize Lenis Smooth Scroll with reduced motion consideration
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Track Active Section on Scroll
  useEffect(() => {
    const sectionIds = ['hero', 'profile', 'projects', 'case-studies', 'experience', 'capabilities', 'ai-engineering', 'education', 'achievements', 'certifications', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Intro Loader Animation */}
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      {/* Restored Native Hardware Cursor with 0ms latency */}

      {/* Floating Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* 00 / Hero with ThreeUI Bestsellers Book Showcase */}
        <Hero />

        {/* 01 / Personal Statement & Value Propositions */}
        <PersonalStatement />

        {/* 02 / Selected Work */}
        <Projects />

        {/* 03 / Case Studies */}
        <CaseStudies />

        {/* 04 / Experience Timeline */}
        <ExperienceTimeline />

        {/* 05 / Capabilities & Skills */}
        <Capabilities />

        {/* 06 / AI + Engineering Workflow */}
        <AIWorkflow />

        {/* 07 / Education */}
        <Education />

        {/* 08 / Achievements */}
        <Achievements />

        {/* 09 / Certifications */}
        <Certifications />

        {/* 10 / About */}
        <About />

        {/* 11 / Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
