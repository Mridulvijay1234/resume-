import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/portfolioData';
import { CheckCircle2, ChevronRight, Layers, Cpu, Globe } from 'lucide-react';
import './CaseStudies.css';

export const CaseStudies: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  const getCaseIcon = (id: string) => {
    switch (id) {
      case 'case-clear-kun':
        return <Globe size={18} />;
      case 'case-jarvis':
        return <Cpu size={18} />;
      case 'case-cgi':
        return <Layers size={18} />;
      default:
        return null;
    }
  };

  return (
    <section id="case-studies" className="editorial-section case-studies-section" aria-label="Case Studies">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="case-studies-header-block">
          <span className="section-meta-label">03 / CASE STUDIES</span>
          <h2 className="editorial-heading-lg">
            FROM IDEA<br />TO SYSTEM.
          </h2>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="case-tabs-strip">
          {CASE_STUDIES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`case-tab-item ${item.id === selectedCaseId ? 'is-active' : ''}`}
              onClick={() => setSelectedCaseId(item.id)}
              data-interactive="true"
            >
              <div className="case-tab-indicator">
                {getCaseIcon(item.id)}
                <span className="case-tab-num">{item.number}</span>
              </div>
              <span className="case-tab-title">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Case Study Dossier */}
        <div className="case-dossier-card border-subtle-box">
          <div className="dossier-header">
            <div>
              <span className="dossier-tag">{activeCase.category}</span>
              <h3 className="dossier-heading">{activeCase.title}</h3>
            </div>
            <div className="dossier-num-watermark">{activeCase.number}</div>
          </div>

          <div className="dossier-content-grid">
            {/* The Problem */}
            <div className="dossier-quadrant problem-quadrant">
              <span className="quadrant-label">01 // THE CHALLENGE</span>
              <p className="quadrant-text">{activeCase.problem}</p>
            </div>

            {/* The Approach */}
            <div className="dossier-quadrant approach-quadrant">
              <span className="quadrant-label">02 // ARCHITECTURAL APPROACH</span>
              <ul className="approach-list">
                {activeCase.approach.map((step, idx) => (
                  <li key={idx} className="approach-item">
                    <ChevronRight size={14} className="approach-icon" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Outcome */}
            <div className="dossier-quadrant outcome-quadrant">
              <span className="quadrant-label">03 // ENGINEERING OUTCOME</span>
              <div className="outcome-box">
                <CheckCircle2 size={18} className="outcome-icon" />
                <p className="outcome-text">{activeCase.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
