import React from 'react';
import HeroScene from './HeroScene';
import MagneticButton from '../common/MagneticButton';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToExplore = () => {
    const nextSection = document.getElementById('profile');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-wrapper" aria-label="Hero Section">
      {/* 3D Kinetic Neural Constellation Canvas */}
      <HeroScene />

      <div className="hero-content">
        {/* Top Meta Bar */}
        <div className="hero-top-meta">
          <div className="meta-left">
            <span className="meta-name">MRIDUL VIJAY</span>
            <span className="meta-separator">//</span>
            <span className="meta-sub">FRONT-END &amp; AI DEVELOPER</span>
          </div>
          <div className="meta-right">
            <span>JAIPUR, INDIA · 2026</span>
          </div>
        </div>

        {/* Central Modern Display Headline */}
        <div className="hero-center-typography">
          <div className="hero-status-pill">
            <span className="status-ping-dot" />
            <Sparkles size={13} className="status-sparkle" />
            <span className="status-pill-text">ENGINEERING WITH PRODUCT INTENT</span>
          </div>

          <h1 className="hero-main-title">
            <span className="hero-title-line">BUILDING HIGH-PERFORMANCE</span>
            <span className="hero-title-line text-silver-gradient">WEB EXPERIENCES &amp;</span>
            <span className="hero-title-line accent-gradient-word">AI-ASSISTED PRODUCTS.</span>
          </h1>

          <p className="hero-supporting">
            Front-End Developer and AI-Assisted Web Developer focused on turning ideas into fast,
            scalable, and user-centered digital systems.
          </p>

          <div className="hero-discipline-strip">
            <span className="discipline-tag">MODERN FRONTEND</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">AI WORKFLOWS</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">SYSTEMS &amp; SEO</span>
            <span className="discipline-dot">·</span>
            <span className="discipline-tag">PRODUCT UX</span>
          </div>
        </div>

        {/* Bottom Actions & Scroll Indicator */}
        <div className="hero-bottom-actions">
          <div className="hero-cta-group">
            <MagneticButton
              variant="primary"
              onClick={scrollToExplore}
              className="hero-explore-btn"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown size={14} />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume-btn"
            >
              <FileText size={14} />
              <span>RESUME (2026)</span>
            </MagneticButton>
          </div>

          <div
            className="hero-scroll-indicator"
            onClick={scrollToExplore}
            role="button"
            tabIndex={0}
            data-interactive="true"
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
