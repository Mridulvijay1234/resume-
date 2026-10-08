import React, { useState } from 'react';
import { AI_WORKFLOW_STAGES } from '../../data/portfolioData';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import './AIWorkflow.css';

export const AIWorkflow: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(3); // Default 'BUILD'
  const activeStage = AI_WORKFLOW_STAGES[activeStageIndex];

  return (
    <section id="ai-engineering" className="editorial-section ai-workflow-section" aria-label="AI and Engineering Workflow">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="ai-workflow-header-block">
          <span className="section-meta-label">06 / AI + ENGINEERING</span>
          <h2 className="editorial-heading-lg">
            I DON'T JUST<br />
            USE AI.<br />
            I BUILD WITH IT.
          </h2>
          <p className="ai-manifesto-text">
            AI has become part of my development workflow—from research and ideation to prototyping,
            implementation, debugging and iteration. The objective is not to replace engineering judgment.
            It is to accelerate it.
          </p>
        </div>

        {/* 8-Stage Interactive Pipeline */}
        <div className="pipeline-interactive-strip">
          <div className="pipeline-track">
            {AI_WORKFLOW_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPassed = idx < activeStageIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  className={`pipeline-node-btn ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => setActiveStageIndex(idx)}
                  data-interactive="true"
                >
                  <div className="node-indicator-bar" />
                  <span className="node-step-num">{stage.step}</span>
                  <span className="node-step-title">{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Dossier */}
        <div className="workflow-dossier-card border-subtle-box">
          <div className="workflow-dossier-top">
            <div className="stage-meta-badge">
              <Sparkles size={14} className="text-accent" />
              <span>PHASE {activeStage.step} // 08</span>
            </div>
            <span className="stage-focus-tag">{activeStage.focus}</span>
          </div>

          <div className="workflow-dossier-body">
            <div className="stage-title-wrap">
              <h3 className="stage-name">{activeStage.title}</h3>
              <p className="stage-summary">{activeStage.description}</p>
            </div>

            <div className="stage-principles-box">
              <span className="principles-label">HUMAN GOVERNANCE CRITERIA:</span>
              <ul className="principles-list">
                <li className="principle-item">
                  <CheckCircle2 size={15} className="text-accent" />
                  <span>Architecture verification before implementation</span>
                </li>
                <li className="principle-item">
                  <CheckCircle2 size={15} className="text-accent" />
                  <span>Zero hallucinatory code accepted without strict testing</span>
                </li>
                <li className="principle-item">
                  <CheckCircle2 size={15} className="text-accent" />
                  <span>High-velocity iteration paired with structural rigor</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="workflow-controls-bar">
            <button
              type="button"
              className="stage-nav-arrow"
              disabled={activeStageIndex === 0}
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
            >
              PREVIOUS PHASE
            </button>
            <div className="stage-counter-display">
              {activeStageIndex + 1} / {AI_WORKFLOW_STAGES.length}
            </div>
            <button
              type="button"
              className="stage-nav-arrow"
              disabled={activeStageIndex === AI_WORKFLOW_STAGES.length - 1}
              onClick={() => setActiveStageIndex((prev) => Math.min(AI_WORKFLOW_STAGES.length - 1, prev + 1))}
            >
              <span>NEXT PHASE</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;
