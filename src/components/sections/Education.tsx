import React from 'react';
import { EDUCATION_LIST } from '../../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';
import './Credentials.css';

export const Education: React.FC = () => {
  return (
    <section id="education" className="editorial-section education-section" aria-label="Education">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="credentials-header-block">
          <span className="section-meta-label">07 / EDUCATION</span>
          <h2 className="editorial-heading-lg">
            THE<br />FOUNDATION.
          </h2>
        </div>

        {/* Stacked Editorial Entries */}
        <div className="education-stack">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="education-card-entry border-subtle-box" data-cursor-text="VIEW">
              <div className="edu-top-row">
                <div className="edu-institution-wrap">
                  <GraduationCap size={18} className="text-accent" />
                  <h3 className="edu-institution-name">{edu.institution}</h3>
                </div>
                <span className="edu-period-badge">{edu.period}</span>
              </div>

              <div className="edu-details-row">
                <span className="edu-credential">{edu.credential}</span>
                <div className="edu-meta-right">
                  {edu.grade && <span className="edu-grade-pill">{edu.grade}</span>}
                  {edu.location && (
                    <span className="edu-location">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
