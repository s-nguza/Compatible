import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { departments } from '../data/departments.js';

const ADDRESS = '8 Saddle Drive, Woodmead Office Park, Van Reenens Avenue, Woodmead, Sandton';
const mapsQuery = encodeURIComponent(ADDRESS);

const topics = [
  { id: 'demo', label: 'Book a demo' },
  { id: 'product', label: 'Product question' },
  { id: 'support', label: 'Support' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'other', label: 'Something else' },
];

const quickLinks = [
  {
    title: 'Book a demo',
    text: 'See Titan DMS and our other products in action.',
    cta: 'Fill in the form',
    to: '/contact?topic=demo#message',
    color: 'var(--magenta)',
    ink: 'var(--magenta)',
  },
  {
    title: 'Client support',
    text: 'Already a client? Log an issue with our support team.',
    cta: 'Open a ticket',
    to: '/contact?topic=support#message',
    color: 'var(--yellow)',
    ink: '#9a6a00',
  },
  {
    title: 'Call us',
    text: 'Speak to our Woodmead office during business hours.',
    cta: '+27 11 518 2000',
    href: 'tel:+27115182000',
    color: 'var(--orange)',
    ink: '#c4500f',
  },
  {
    title: 'Careers',
    text: 'Looking to join the team? See current vacancies.',
    cta: 'View open roles',
    to: '/careers#roles',
    color: 'var(--purple)',
    ink: 'var(--purple)',
  },
];

const directContacts = [
  { label: 'General enquiries', value: 'info@compatible.co.za', href: 'mailto:info@compatible.co.za' },
  { label: 'Phone', value: '+27 11 518 2000', href: 'tel:+27115182000' },
  { label: 'Careers', value: 'careers@compatible.co.za', href: 'mailto:careers@compatible.co.za' },
  { label: 'Office hours', value: '[Mon–Fri, 08:00–17:00 — please confirm]' },
];

const isTopic = (id) => topics.some((t) => t.id === id);

function ContactForm() {
  const [params] = useSearchParams();
  const requested = params.get('topic');
  const [topic, setTopic] = useState(isTopic(requested) ? requested : 'demo');
  const [sent, setSent] = useState(false);

  // Links such as "Open a ticket" arrive with ?topic=support — follow them even when already on the page.
  useEffect(() => {
    if (isTopic(requested)) setTopic(requested);
  }, [requested]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet: the form only confirms on screen. Hook this up to email or a CRM endpoint.
    setSent(true);
    e.target.reset();
  };

  return (
    <form id="message" className="contact-form" onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <p className="muted">Tell us a little about your dealership and what you need.</p>

      <fieldset className="contact-form__topics">
        <legend>What can we help with?</legend>
        <div>
          {topics.map((t) => (
            <label key={t.id} className={`chip ${topic === t.id ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="topic"
                value={t.id}
                checked={topic === t.id}
                onChange={() => setTopic(t.id)}
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="contact-form__grid">
        <label>
          Full name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Dealership or company
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="span-2">
          Department of interest
          <select name="department" defaultValue="">
            <option value="">Not sure yet</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>{d.title}</option>
            ))}
          </select>
        </label>
        <label className="span-2">
          Message
          <textarea name="message" rows="5" />
        </label>
      </div>

      <label className="contact-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree that Compatible Automotive may use these details to respond to my enquiry, in
          line with the <a href="#">privacy policy</a>.
        </span>
      </label>

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--magenta">Send message</button>
        {sent && (
          <span className="contact-form__sent" role="status">
            Thanks — we'll be in touch shortly.
          </span>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <header className="hero-wrap hero-wrap--contact">
        <HeroVideo start="interior" />
        <section className="container page-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <span>Contact</span>
          </nav>
          <h1>
            Let’s talk about your <span className="text-yellow">dealership.</span>
          </h1>
          <p>
            Book a demo, ask about a product or get support — our team in Woodmead, Johannesburg
            is here to help.
          </p>
        </section>
      </header>

      <main>
        <div className="container contact-cards-wrap">
          <ul className="contact-cards">
            {quickLinks.map((q) => (
              <li
                key={q.title}
                className="contact-card"
                style={{ '--accent': q.color, '--accent-ink': q.ink }}
              >
                <h3>{q.title}</h3>
                <p>{q.text}</p>
                {q.to ? (
                  <Link to={q.to}>{q.cta}</Link>
                ) : (
                  <a href={q.href}>{q.cta}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <section className="container contact-main">
          <ContactForm />

          <aside className="contact-side">
            <div className="office-card">
              <iframe
                title="Map showing 8 Saddle Drive, Woodmead"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="office-card__body">
                <h3>Visit our office</h3>
                <p>
                  8 Saddle Drive, Woodmead Office Park
                  <br />
                  Van Reenens Avenue, Woodmead, Sandton
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Get directions <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            <div className="direct-card">
              <h3>Reach us directly</h3>
              <dl>
                {directContacts.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>{c.href ? <a href={c.href}>{c.value}</a> : c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter variant="dark" />
    </>
  );
}
