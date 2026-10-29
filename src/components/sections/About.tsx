import React from 'react';
import MagneticButton from '../common/MagneticButton';
import DeveloperCard from '../common/DeveloperCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FileText } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="editorial-section about-section" aria-label="About Mridul Vijay">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="about-header-block">
          <span className="section-meta-label">09 / ABOUT</span>
          <h2 className="editorial-heading-lg">
            A DEVELOPER<br />
            BETWEEN CODE<br />
            AND PRODUCT.
          </h2>
        </div>

        {/* Narrative & Profile Dossier Grid */}
        <div className="about-narrative-grid">
          {/* Main Narrative Column */}
          <div className="about-story-column">
            <p className="about-lead-paragraph">
              I'm a Computer Science Engineering student and developer from Jaipur, India,
              interested in the intersection of frontend engineering, AI-assisted development and digital products.
            </p>
            <p className="about-body-paragraph">
              I enjoy taking an idea that starts as a rough concept and turning it into something structured,
              functional and visually refined.
            </p>
            <p className="about-body-paragraph">
              My interests span frontend development, AI systems, product engineering, SEO, backend architecture
              and experimental software projects.
            </p>

            <div className="about-cta-row">
              <MagneticButton
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="about-resume-btn"
              >
                <FileText size={14} />
                <span>DOWNLOAD RESUME (2026)</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="secondary"
              >
                <span>GET IN TOUCH</span>
              </MagneticButton>
            </div>
          </div>

          {/* Interactive 3D Developer Portrait & Dossier Card */}
          <div className="about-card-container">
            <DeveloperCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
