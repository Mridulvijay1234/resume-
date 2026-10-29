import React from 'react';
import Scene from './HeroScene';
import MagneticButton from '../common/MagneticButton';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDown, Mail, FileText, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToExplore = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-wrapper" aria-label="Hero Section">
      {/* ThreeUI Bestsellers Book Showcase Foundation */}
      <Scene />

      {/* Atmospheric Vignette & Depth Scrim */}
      <div className="scene-overlay-gradient" />

      <div className="hero-content">
        {/* Top Editorial Meta Bar */}
        <div className="hero-top-meta">
          <div className="meta-left">
            <span className="meta-name">MRIDUL VIJAY</span>
            <span className="meta-separator">//</span>
            <span className="meta-sub">FRONT-END DEVELOPER | AI-ASSISTED WEB DEVELOPER | PRODUCT BUILDER</span>
          </div>
          <div className="meta-right">
            <span>Jaipur, India · Building for the Web · AI-Assisted Development</span>
          </div>
        </div>

        {/* Central Editorial Display Headline */}
        <div className="hero-center-typography">
          <div className="hero-status-pill">
            <span className="status-ping-dot" />
            <Sparkles size={13} className="status-sparkle" />
            <span className="status-pill-text">ENGINEERING WITH PRODUCT INTENT</span>
          </div>

          <h1 className="hero-main-title">
            <span className="hero-title-line">BUILDING</span>
            <span className="hero-title-line">HIGH-PERFORMANCE</span>
            <span className="hero-title-line text-silver-gradient">WEB EXPERIENCES</span>
            <span className="hero-title-line">&amp; AI-ASSISTED</span>
            <span className="hero-title-line accent-gradient-word">DIGITAL PRODUCTS.</span>
          </h1>

          <p className="hero-supporting">
            Front-End Developer and AI-Assisted Web Developer focused on turning ideas into fast, scalable and user-focused digital products.
          </p>

          <div className="hero-discipline-strip">
            <span className="discipline-tag">FRONTEND ENGINEERING</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">AI-ASSISTED WORKFLOWS</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">PRODUCT THINKING</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">PERFORMANCE &amp; SEO</span>
          </div>
        </div>

        {/* Bottom Actions with 3 Verified CTAs & Scroll Indicator */}
        <div className="hero-bottom-actions">
          <div className="hero-cta-group">
            <MagneticButton
              variant="primary"
              href="#projects"
              onClick={scrollToExplore}
              className="hero-explore-btn"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown size={14} />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              href="#contact"
              onClick={scrollToContact}
              className="hero-contact-btn"
            >
              <Mail size={14} />
              <span>LET'S WORK TOGETHER</span>
            </MagneticButton>

            <MagneticButton
              variant="outline"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hero-resume-btn"
            >
              <FileText size={14} />
              <span>DOWNLOAD RESUME</span>
            </MagneticButton>
          </div>

          <div
            className="hero-scroll-indicator"
            onClick={scrollToExplore}
            role="button"
            tabIndex={0}
            data-interactive="true"
            aria-label="Scroll to discover selected work"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="scroll-line-animation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
