import React from 'react';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import { Trophy, Award, Gamepad2, Flag } from 'lucide-react';
import './Credentials.css';

export const Achievements: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy size={18} className="text-accent" />;
      case 1:
        return <Flag size={18} className="text-accent" />;
      case 2:
        return <Award size={18} className="text-accent" />;
      case 3:
        return <Gamepad2 size={18} className="text-accent" />;
      default:
        return <Award size={18} className="text-accent" />;
    }
  };

  return (
    <section id="achievements" className="editorial-section achievements-section" aria-label="Achievements">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="credentials-header-block">
          <span className="section-meta-label">08 / ACHIEVEMENTS</span>
          <h2 className="editorial-heading-lg">
            HONORS &amp;<br />RECOGNITION.
          </h2>
        </div>

        {/* Editorial Achievements Grid */}
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="achievement-card-block border-subtle-box" data-cursor-text="VIEW">
              <div className="achieve-card-header">
                {getIcon(idx)}
                <span className="achieve-category">{item.context}</span>
              </div>
              <h3 className="achieve-title">{item.title}</h3>
              <p className="achieve-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
