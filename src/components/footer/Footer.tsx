import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        {/* Top Tier: Big Editorial Brand & Back to Top */}
        <div className="footer-top-tier">
          <div className="footer-brand-block">
            <h2 className="footer-brand-title">MRIDUL VIJAY</h2>
            <p className="footer-role-line">
              Front-End Developer · AI-Assisted Web Developer · Product Builder
            </p>
            <span className="footer-location-tag">JAIPUR / INDIA</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            data-interactive="true"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="back-to-top-icon-wrap">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

        {/* Bottom Tier: Verified Links & Copyright */}
        <div className="footer-bottom-tier">
          <div className="footer-links-group">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              data-interactive="true"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              data-interactive="true"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="footer-nav-link"
              data-interactive="true"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>

          <div className="footer-copyright-line">
            &copy; 2026 Mridul Vijay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
