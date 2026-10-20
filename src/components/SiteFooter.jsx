import { Link } from 'react-router-dom';
import { Headphones, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';
import { departments } from '../data/departments.js';

const departmentLabels = {
  dms: 'Dealer Management',
  workshop: 'Workshop Solutions',
  digital: 'Digital',
  crm: 'CRM',
};

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'Who we are', to: '/#about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = ['Privacy policy (POPIA)', 'PAIA manual', 'Terms of use'];

// variant="light" (careers) or "dark" (other pages): dark swaps the logo for a text wordmark
// and uses a single-line yellow support button.
export default function SiteFooter({ variant = 'light' }) {
  const dark = variant === 'dark';

  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" aria-label="Compatible Automotive home">
              {dark ? (
                <span className="site-footer__wordlogo">
                  <strong>Compatible</strong> Automotive
                </span>
              ) : (
                <img src={logo} alt="Compatible Automotive" className="site-footer__logo" />
              )}
            </Link>
            <p>
              Dealer management, workshop, digital and CRM solutions for dealerships across
              Africa — delivered through technology, innovation and people since 1989.
            </p>
            {dark ? (
              <Link to="/contact?topic=support#message" className="btn btn--yellow support-btn--dark">
                <Headphones size={18} strokeWidth={2.2} /> Open a support ticket
              </Link>
            ) : (
              <Link to="/contact?topic=support#message" className="support-btn">
                <span className="support-btn__icon">
                  <Headphones size={18} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>Need support?</strong>
                  <small>Open a ticket with our team</small>
                </span>
              </Link>
            )}
            <div className="socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>

          <nav aria-label="Products">
            <h4>Products</h4>
            <ul>
              {departments.map((d) => (
                <li key={d.id}>
                  <Link to={`/products#dept-${d.id}`}>
                    <i className="dot" style={{ background: d.color }} />
                    {departmentLabels[d.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Get in touch</h4>
            <address>
              <span>8 Saddle Drive, Woodmead Office Park, Woodmead, Sandton</span>
              <a href="tel:+27115182000" className="site-footer__phone">+27 11 518 2000</a>
              <a href="mailto:info@compatible.co.za">info@compatible.co.za</a>
              <a href="mailto:careers@compatible.co.za">careers@compatible.co.za</a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Compatible Automotive. All rights reserved.</span>
          <div className="site-footer__legal">
            {legalLinks.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
            <button
              type="button"
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top <ArrowUp size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
