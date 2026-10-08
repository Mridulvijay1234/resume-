import React from 'react';
import { VALUE_PROPOSITIONS } from '../../data/portfolioData';
import './PersonalStatement.css';

export const PersonalStatement: React.FC = () => {
  return (
    <section id="profile" className="editorial-section personal-statement-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="statement-header-block">
          <span className="section-meta-label">01 / PROFILE</span>
          <h2 className="editorial-heading-lg statement-heading">
            ENGINEERING<br />
            WITH<br />
            PRODUCT INTENT.
          </h2>
        </div>

        {/* Narrative Copy */}
        <div className="statement-narrative-grid">
          <div className="statement-lead-column">
            <div className="statement-author-pill">
              <img 
                src="/assets/mridul-portrait.jpg" 
                alt="Mridul Vijay" 
                className="author-avatar" 
              />
              <div className="author-info">
                <span className="author-name">MRIDUL VIJAY</span>
                <span className="author-title">Front-End &amp; AI Product Builder</span>
              </div>
              <span className="author-status-dot" title="Available for roles" />
            </div>
            <p className="statement-lead-text">
              I build digital experiences where engineering, design and product thinking meet.
            </p>
          </div>
          <div className="statement-body-column">
            <p className="statement-body-text">
              My work spans responsive frontend development, full-stack web platforms, AI-assisted software development, SEO, backend architecture and experimental AI systems.
            </p>
            <p className="statement-body-text">
              I use modern AI-assisted workflows to accelerate research, prototyping, coding, debugging and iteration while maintaining control over architecture, implementation quality and user experience.
            </p>
          </div>
        </div>

        {/* Value Proposition: Three Editorial Blocks */}
        <div className="value-propositions-grid">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div key={prop.number} className="value-card-block border-subtle-box" data-cursor-text="EXP">
              <div className="value-card-top">
                <span className="value-number">{prop.number}</span>
                <div className="value-card-line" />
              </div>
              <h3 className="value-title">{prop.title}</h3>
              <p className="value-description">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalStatement;
