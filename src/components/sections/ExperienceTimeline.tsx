import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';
import './ExperienceTimeline.css';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="editorial-section experience-section" aria-label="Experience">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="experience-header-block">
          <span className="section-meta-label">04 / EXPERIENCE</span>
          <h2 className="editorial-heading-lg">
            EXPERIENCE<br />
            THAT BUILT<br />
            THE FOUNDATION.
          </h2>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="experience-timeline-container">
          <div className="timeline-spine-line" />

          <div className="timeline-entries-list">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="timeline-entry-row" data-cursor-text="VIEW">
                {/* Period Column */}
                <div className="timeline-period-col">
                  <span className="period-badge">{exp.period}</span>
                </div>

                {/* Node Point */}
                <div className="timeline-node-pin">
                  <div className="node-outer-ring">
                    <div className="node-inner-core" />
                  </div>
                </div>

                {/* Content Dossier Column */}
                <div className="timeline-dossier-card border-subtle-box">
                  <div className="exp-card-header">
                    <div className="exp-company-wrap">
                      <Briefcase size={16} className="text-accent" />
                      <h3 className="exp-company-name">{exp.company}</h3>
                    </div>
                    <span className="exp-role-title">{exp.role}</span>
                  </div>

                  {exp.description && (
                    <p className="exp-description-text">{exp.description}</p>
                  )}

                  <div className="exp-highlights-wrap">
                    <span className="exp-highlights-heading">ENGINEERING FOCUS &amp; CONTRIBUTIONS:</span>
                    <ul className="exp-tags-cluster">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="exp-tag-pill">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
