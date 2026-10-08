import React, { useState } from 'react';
import { CAPABILITIES } from '../../data/portfolioData';
import './Capabilities.css';

export const Capabilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...CAPABILITIES.map((c) => c.category)];

  const filteredGroups = activeCategory === 'ALL'
    ? CAPABILITIES
    : CAPABILITIES.filter((c) => c.category === activeCategory);

  return (
    <section id="capabilities" className="editorial-section capabilities-section" aria-label="Capabilities">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="capabilities-header-block">
          <span className="section-meta-label">05 / CAPABILITIES</span>
          <h2 className="editorial-heading-lg">
            TOOLS<br />
            OF THE TRADE.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="capabilities-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              data-interactive="true"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Flowing Typography Skill Clusters */}
        <div className="capabilities-grid-layout">
          {filteredGroups.map((group) => (
            <div key={group.category} className="capability-group-card border-subtle-box">
              <div className="group-card-header">
                <span className="group-category-title">{group.category}</span>
                <span className="group-count-pill">{group.skills.length}</span>
              </div>

              <div className="group-tags-flow">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge-tag"
                    data-interactive="true"
                  >
                    <span className="skill-dot" />
                    <span className="skill-name">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
