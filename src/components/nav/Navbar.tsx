import React, { useState, useEffect } from 'react';
import MagneticButton from '../common/MagneticButton';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#projects', id: 'projects' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`editorial-nav-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="editorial-nav-inner">
        {/* Brand Logo */}
        <a href="#hero" className="editorial-logo" data-interactive="true">
          <span className="logo-text">MRIDUL VIJAY</span>
          <span className="logo-dot" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    data-interactive="true"
                  >
                    <span className="nav-link-text">{link.label}</span>
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <MagneticButton
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="nav-resume-btn"
          >
            <span>RESUME</span>
            <ArrowUpRight size={13} />
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-drawer-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-resume-item">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-resume-link"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
