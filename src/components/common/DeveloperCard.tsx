import React, { useRef, useState } from 'react';
import { MapPin, Compass, Terminal, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import './DeveloperCard.css';

interface DeveloperCardProps {
  className?: string;
  showDetails?: boolean;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ className = '', showDetails = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    card.style.setProperty('--card-rotate-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--card-rotate-y', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--card-glare-x', `${glareX.toFixed(1)}%`);
    card.style.setProperty('--card-glare-y', `${glareY.toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--card-rotate-x', '0deg');
    card.style.setProperty('--card-rotate-y', '0deg');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`developer-card-wrapper ${isHovered ? 'is-active' : ''} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow Halo */}
        <div className="card-ambient-glow" />

        {/* 3D Tilt Container */}
        <div className="card-3d-surface">
          {/* Top Status Header */}
          <div className="card-top-bar">
            <div className="card-id-badge">
              <span className="id-icon"><Sparkles size={12} /></span>
              <span className="id-text">MRIDUL VIJAY // DEV-ID 2026</span>
            </div>
            <div className="card-live-status">
              <span className="status-ping" />
              <span className="status-label">ACTIVE</span>
            </div>
          </div>

          {/* Portrait Image Container */}
          <div 
            className="portrait-image-frame"
            onClick={() => setIsModalOpen(true)}
            title="Click to view full HD portrait"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
          >
            <img
              src="/assets/mridul-portrait.jpg"
              alt="Mridul Vijay — Front-End & AI-Assisted Developer Portrait"
              className="portrait-img"
              loading="eager"
            />

            {/* Holographic Sheen & Scanline Overlay */}
            <div className="card-holographic-sheen" />
            <div className="card-scanline" />

            {/* Floating Role Pill on Image */}
            <div className="floating-role-tag">
              <span className="role-dot" />
              <span>FRONT-END &amp; AI BUILDER</span>
            </div>

            {/* Click to expand hint */}
            <div className="expand-hint-badge">
              <ExternalLink size={12} />
              <span>VIEW HD</span>
            </div>
          </div>

          {/* Bottom Dossier Specs (if enabled) */}
          {showDetails && (
            <div className="card-details-panel">
              <div className="details-header">
                <span className="developer-name">MRIDUL VIJAY</span>
                <span className="verified-seal">
                  <ShieldCheck size={13} className="text-accent" />
                  <span>VERIFIED PROFILE</span>
                </span>
              </div>

              <div className="details-grid">
                <div className="spec-item">
                  <span className="spec-label">
                    <MapPin size={11} /> LOCATION
                  </span>
                  <span className="spec-value">Jaipur, India</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    <Compass size={11} /> DEGREE
                  </span>
                  <span className="spec-value">B.Tech CSE (7.9 CGPA)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    <Terminal size={11} /> FOCUS
                  </span>
                  <span className="spec-value">React 19 · AI Workflows</span>
                </div>
              </div>

              <div className="card-status-footer">
                <span className="footer-status-pill">AVAILABLE FOR HIGH-IMPACT ROLES</span>
                <span className="footer-code-tag">MV-2026-STABLE</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen HD Modal View */}
      {isModalOpen && (
        <div 
          className="portrait-modal-backdrop" 
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="High-Definition Developer Portrait"
        >
          <div className="portrait-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close portrait view"
            >
              ✕
            </button>
            <div className="modal-image-wrapper">
              <img
                src="/assets/mridul-portrait.jpg"
                alt="Mridul Vijay Studio Portrait"
                className="modal-full-img"
              />
              <div className="modal-caption-bar">
                <div>
                  <h4 className="modal-name">MRIDUL VIJAY</h4>
                  <p className="modal-sub">Front-End Developer | AI-Assisted Web Developer | Jaipur, India</p>
                </div>
                <span className="modal-tag">EDITORIAL STUDIO EDITION // 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperCard;
