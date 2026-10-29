import React, { useState } from 'react';
import MagneticButton from '../common/MagneticButton';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify the project subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Form submission via verified mailto protocol with pre-filled metadata
    try {
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ form: 'Could not open mail client automatically. Please email directly below.' });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="editorial-section contact-section" aria-label="Contact Mridul Vijay">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="contact-header-block">
          <span className="section-meta-label">10 / CONTACT</span>
          <h2 className="editorial-heading-lg">
            HAVE AN IDEA?<br />
            LET'S BUILD IT.
          </h2>
        </div>

        <div className="contact-content-grid">
          {/* Contact Details & Socials Column */}
          <div className="contact-details-column">
            <p className="contact-intro-text">
              Whether it's a website, digital product, frontend experience or experimental AI system,
              I'm interested in turning meaningful ideas into working products.
            </p>

            <div className="contact-info-cards-stack">
              {/* Email Card with Quick Copy */}
              <div className="contact-info-card border-subtle-box">
                <div className="info-card-left">
                  <Mail size={18} className="text-accent" />
                  <div>
                    <span className="info-card-label">DIRECT EMAIL:</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="info-card-value">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  data-interactive="true"
                >
                  {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-info-card border-subtle-box">
                <div className="info-card-left">
                  <MapPin size={18} className="text-accent" />
                  <div>
                    <span className="info-card-label">LOCATION:</span>
                    <span className="info-card-value">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exact Social Links */}
            <div className="contact-social-section">
              <span className="social-section-title">VERIFIED DIRECT PROFILES:</span>
              <div className="social-links-row">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-badge border-subtle-box"
                  data-interactive="true"
                >
                  <GithubIcon size={16} />
                  <span>GitHub / Mridulvijay1234</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-badge border-subtle-box"
                  data-interactive="true"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn / mridul-vijay</span>
                </a>
              </div>
            </div>
          </div>

          {/* Functional Contact Form Column */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="editorial-contact-form border-subtle-box" noValidate>
              <h3 className="form-title">TRANSMIT INQUIRY</h3>

              {errors.form && (
                <div className="form-error-banner">
                  <AlertCircle size={15} />
                  <span>{errors.form}</span>
                </div>
              )}

              {submitSuccess ? (
                <div className="form-success-banner">
                  <CheckCircle2 size={24} className="text-accent" />
                  <div>
                    <h4>CLIENT DISPATCH INITIATED</h4>
                    <p>Your mail application has been prepared with your inquiry. You can also email directly to {PERSONAL_INFO.email}.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="reset-form-btn"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-field-group">
                    <label htmlFor="contact-name" className="field-label">
                      NAME <span className="field-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="field-label">
                      EMAIL ADDRESS <span className="field-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-subject" className="field-label">
                      PROJECT / SUBJECT <span className="field-required">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className={`form-input ${errors.subject ? 'has-error' : ''}`}
                      placeholder="Frontend Architecture / Product Spikes"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-message" className="field-label">
                      MESSAGE <span className="field-required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                      placeholder="Briefly describe the project, requirements, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <div className="form-submit-row">
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="contact-submit-btn"
                    >
                      <span>{isSubmitting ? 'PREPARING TRANSMISSION...' : 'SEND MESSAGE'}</span>
                      <Send size={14} />
                    </MagneticButton>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
