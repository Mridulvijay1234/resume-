import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';
import './Credentials.css';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="editorial-section certifications-section" aria-label="Certifications">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="credentials-header-block">
          <span className="section-meta-label">09 / CERTIFICATIONS</span>
          <h2 className="editorial-heading-lg">
            ACCREDITED<br />TRAINING.
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="cert-card-block border-subtle-box" data-cursor-text="VIEW">
              <div className="cert-card-top">
                <Award size={18} className="text-accent" />
                <span className="cert-year-badge">{cert.year}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.grade && (
                <div className="cert-grade-row">
                  <CheckCircle size={14} className="text-accent" />
                  <span className="cert-grade-text">Score Achieved: {cert.grade}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
