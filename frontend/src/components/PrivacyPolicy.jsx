import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  UserCheck,
  PhoneCall,
  Share2,
  Lock,
  Globe,
  Clock,
  AlertCircle,
  RefreshCw,
  Mail,
  Phone,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowUp
} from 'lucide-react';
import './PrivacyPolicy.css';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Privacy Policy – Chaw Momos | Official Privacy & Data Protection';
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'section-1', num: '01', title: 'Information We Collect' },
    { id: 'section-2', num: '02', title: 'How We Use Your Information' },
    { id: 'section-3', num: '03', title: 'Communication & Consent' },
    { id: 'section-4', num: '04', title: 'Sharing of Information' },
    { id: 'section-5', num: '05', title: 'Data Security' },
    { id: 'section-6', num: '06', title: 'Third-Party Platforms' },
    { id: 'section-7', num: '07', title: 'Data Retention' },
    { id: 'section-8', num: '08', title: 'Your Rights & Choices' },
    { id: 'section-9', num: '09', title: 'Children’s Privacy' },
    { id: 'section-10', num: '10', title: 'Changes to This Policy' },
    { id: 'section-11', num: '11', title: 'Contact Us & Grievances' },
  ];

  return (
    <div className="cm-privacy-page">
      <div className="cm-container">
        {/* Top Breadcrumbs & Back Bar */}
        <div className="cm-privacy-topbar">
          <div className="cm-privacy-topbar-inner">
            <nav className="cm-privacy-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/" className="cm-privacy-breadcrumb-link">Home</Link>
              <span className="cm-privacy-breadcrumb-sep">/</span>
              <span className="cm-privacy-breadcrumb-current">Legal & Compliance</span>
              <span className="cm-privacy-breadcrumb-sep">/</span>
              <span className="cm-privacy-breadcrumb-current">Privacy Policy</span>
            </nav>

            <Link to="/" className="cm-privacy-back-btn">
              <ArrowLeft size={15} /> Back to Website
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <header className="cm-privacy-header">
          <div className="cm-privacy-badge-wrap">
            <ShieldCheck size={16} /> Official Legal Policy
          </div>

          <h1 className="cm-privacy-title">
            Privacy Policy – <span>Chaw Momos</span>
          </h1>

          <div className="cm-privacy-meta-row">
            <div className="cm-privacy-meta-pill">
              <Clock size={14} style={{ color: '#ffb703' }} />
              <span>Last Updated: <strong>September 2026</strong></span>
            </div>
            <div className="cm-privacy-meta-pill">
              <Globe size={14} style={{ color: '#ffb703' }} />
              <span>Entity: <strong>Chaw Momos</strong></span>
            </div>
            <div className="cm-privacy-meta-pill">
              <ShieldAlert size={14} style={{ color: '#ffb703' }} />
              <span>Applies to: <strong>Website, Meta/Facebook Forms & Ads</strong></span>
            </div>
          </div>

          <div className="cm-privacy-intro-text">
            <p style={{ marginBottom: '12px' }}>
              <strong>Chaw Momos</strong> (“we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you provide to us.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect information submitted through our website, social media pages, Meta/Facebook Instant Forms, advertisements, and other communication channels.
            </p>
          </div>
        </header>

        {/* Quick Jump Navigation */}
        <div className="cm-privacy-quickjump">
          <div className="cm-privacy-quickjump-title">
            <FileText size={16} /> Table of Contents / Quick Jump
          </div>
          <div className="cm-privacy-quickjump-grid">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sec.id);
                }}
                className="cm-privacy-jump-link"
              >
                <span className="cm-privacy-jump-num">{sec.num}</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <main className="cm-privacy-content">
          {/* Section 1 */}
          <section id="section-1" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">01</div>
              <h2 className="cm-privacy-card-title">Information We Collect</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                When you contact us or submit an inquiry through our website, franchise application forms, social media campaigns, or Meta/Facebook Instant Lead Forms, we may collect the following details:
              </p>

              <div className="cm-privacy-list">
                {[
                  'Full name',
                  'Phone number / WhatsApp contact',
                  'Email address',
                  'City / geographic location',
                  'Preferred franchise location',
                  'Investment budget & capability range',
                  'Business experience & current occupation',
                  'Any other information you voluntarily provide in notes or query fields',
                ].map((item, idx) => (
                  <div key={idx} className="cm-privacy-list-item">
                    <CheckCircle2 size={16} className="cm-privacy-list-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="cm-privacy-callout">
                <strong>Data Minimization Principle:</strong> We only collect information that is strictly necessary to evaluate your inquiry, assist with franchise opportunities, or fulfill your customer request.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">02</div>
              <h2 className="cm-privacy-card-title">How We Use Your Information</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>We may use your information for legitimate business and franchise operations, including to:</p>

              <div className="cm-privacy-list">
                {[
                  'Respond to your franchise or business inquiry promptly',
                  'Provide franchise information, investment details, financial projections, and related prospectus materials',
                  'Contact you regarding Chaw Momos franchise partnership opportunities',
                  'Understand your business requirements and preferred operational location',
                  'Schedule discovery calls, meetings, or headquarters visits with our franchise team',
                  'Provide customer support, resolve queries, and cater to feedback',
                  'Improve our culinary services, café customer experience, marketing campaigns, and franchise offerings',
                ].map((item, idx) => (
                  <div key={idx} className="cm-privacy-list-item">
                    <CheckCircle2 size={16} className="cm-privacy-list-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">03</div>
              <h2 className="cm-privacy-card-title">Communication & Consent</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                By submitting your information through our website forms, Meta/Facebook Instant Forms, or advertisements, you agree that <strong>Chaw Momos</strong> or its authorized representatives may contact you through:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', margin: '18px 0' }}>
                {[
                  { title: 'Phone Calls', desc: 'Direct discovery consultation' },
                  { title: 'SMS', desc: 'Alerts & confirmations' },
                  { title: 'WhatsApp', desc: 'Prospectus & instant chat' },
                  { title: 'Email', desc: 'Official documentation' }
                ].map((channel, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,183,3,0.2)', padding: '12px 14px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffb703' }}>{channel.title}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>{channel.desc}</div>
                  </div>
                ))}
              </div>

              <p>
                This communication is strictly regarding your inquiry and related franchise opportunities.
              </p>

              <div className="cm-privacy-callout">
                <strong>Opt-Out Right:</strong> You may request that we stop contacting you at any time. To unsubscribe, simply reply “STOP” on WhatsApp/SMS or send an email to <a href="mailto:academyqsr@gmail.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>academyqsr@gmail.com</a>.
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">04</div>
              <h2 className="cm-privacy-card-title">Sharing of Information</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#ffb703' }}>
                We do NOT sell, rent, or trade your personal information.
              </p>
              <p>
                Your information may be shared strictly on a need-to-know basis with authorized employees, franchise directors, representatives, trusted service providers, or business partners where reasonably necessary to respond to your inquiry or provide requested services.
              </p>
              <p>
                We may also disclose information where required by applicable law, governmental regulation, court order, or legal processes to protect our rights, prevent fraud, or ensure public safety.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">05</div>
              <h2 className="cm-privacy-card-title">Data Security</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                We take reasonable administrative, technical, and organizational measures to protect your personal information from unauthorized access, misuse, alteration, disclosure, or loss. These measures include secure servers, restricted administrative access, and SSL encryption for transmitted web forms.
              </p>
              <div className="cm-privacy-callout">
                <strong>Electronic Transmission Notice:</strong> While we implement industry-standard safeguards, please note that no method of electronic transmission over the internet or method of electronic storage can be guaranteed to be 100% secure.
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">06</div>
              <h2 className="cm-privacy-card-title">Third-Party Platforms (Meta / Facebook / Instagram)</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                If you submit your information through third-party platforms such as Meta, Facebook Instant Forms, Instagram lead campaigns, or linked external portals, your information is processed securely in accordance with our advertising setup and is also subject to the privacy policies and terms of service of those respective platforms.
              </p>
              <p>
                We encourage you to review the privacy settings and policies of any third-party service provider you use to interact with our brand.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">07</div>
              <h2 className="cm-privacy-card-title">Data Retention</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                We retain your information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with our legal obligations, resolve disputes, and maintain appropriate commercial business records.
              </p>
              <p>
                When your personal information is no longer needed, we securely delete or anonymize it in accordance with applicable retention policies.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">08</div>
              <h2 className="cm-privacy-card-title">Your Rights</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>You have full control over your personal information. You may contact us at any time to:</p>

              <div className="cm-privacy-list">
                {[
                  'Request information about the personal data we hold about you (Right to Access)',
                  'Request correction or update of inaccurate or incomplete information (Right to Rectification)',
                  'Request deletion or erasure of your information, where legally applicable (Right to Erasure)',
                  'Withdraw your consent for future communications and marketing follow-ups (Right to Withdraw Consent)',
                ].map((item, idx) => (
                  <div key={idx} className="cm-privacy-list-item">
                    <UserCheck size={16} className="cm-privacy-list-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">09</div>
              <h2 className="cm-privacy-card-title">Children’s Privacy</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                Our services, commercial activities, and franchise inquiry processes are strictly intended for adults (individuals aged 18 and above). We do not knowingly collect personal information from children.
              </p>
              <p>
                If we discover that personal data from a child under legal age has been inadvertently collected, we will take immediate steps to delete such data from our records.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="cm-privacy-card">
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">10</div>
              <h2 className="cm-privacy-card-title">Changes to This Privacy Policy</h2>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                We may update this Privacy Policy from time to time to reflect modifications in our business practices, operational standards, regulatory guidelines, or statutory requirements.
              </p>
              <p>
                Any changes will be posted directly on our applicable website or page with an updated <strong>“Last Updated”</strong> date at the top of this document. We encourage you to review this page periodically to remain informed.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="cm-privacy-card" style={{ borderColor: 'rgba(255,183,3,0.4)', background: 'rgba(25, 12, 7, 0.95)' }}>
            <div className="cm-privacy-card-header">
              <div className="cm-privacy-card-idx">11</div>
              <div>
                <h2 className="cm-privacy-card-title">Contact Us</h2>
                <span style={{ fontSize: '12px', color: '#ffb703', fontWeight: 700 }}>Data Protection & Legal Desk</span>
              </div>
            </div>
            <div className="cm-privacy-card-body">
              <p>
                If you have questions about this Privacy Policy, wish to exercise any of your data rights, or want to request access, correction, or deletion of your information, please contact our team:
              </p>

              <div className="cm-privacy-contact-grid">
                <div className="cm-privacy-contact-item">
                  <div className="cm-privacy-contact-icon">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="cm-privacy-contact-label">Official Website</div>
                    <div className="cm-privacy-contact-value">chawmomos.com</div>
                    <div className="cm-privacy-contact-sub">Also: chawmmomos.com</div>
                  </div>
                </div>

                <a href="mailto:academyqsr@gmail.com" className="cm-privacy-contact-item">
                  <div className="cm-privacy-contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="cm-privacy-contact-label">Official Email</div>
                    <div className="cm-privacy-contact-value">academyqsr@gmail.com</div>
                    <div className="cm-privacy-contact-sub">Click to send direct email →</div>
                  </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=919780524008&text=Hi%20Chaw%20Momos%20Team%2C%20I%20have%20an%20inquiry%20regarding%20Privacy%20Policy%20and%20Franchise." target="_blank" rel="noopener noreferrer" className="cm-privacy-contact-item">
                  <div className="cm-privacy-contact-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="cm-privacy-contact-label">Official Phone & WhatsApp</div>
                    <div className="cm-privacy-contact-value">+91 97805 24008</div>
                    <div className="cm-privacy-contact-sub">Direct WhatsApp Support →</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Consent Statement Card */}
          <div className="cm-privacy-consent-box">
            <h3 className="cm-privacy-consent-title">
              <ShieldCheck size={22} style={{ color: '#ffb703' }} /> Consent & Acknowledgement
            </h3>
            <p className="cm-privacy-consent-text">
              By submitting your information through our forms (Website, Meta/Facebook Instant Forms, or Advertisements), you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described above.
            </p>
            <div className="cm-privacy-consent-actions">
              <Link to="/" className="cm-privacy-btn-primary">
                <ArrowLeft size={16} /> Return to Home
              </Link>
              <a href="/#franchise" className="cm-privacy-btn-secondary">
                Franchise Opportunities <ChevronRight size={16} />
              </a>
              <button onClick={scrollToTop} className="cm-privacy-btn-secondary" aria-label="Scroll back to top">
                <ArrowUp size={16} /> Back to Top
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
