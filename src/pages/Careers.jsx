import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

const CAREERS_EMAIL = 'careers@compatible.co.za';
const applyHref = (subject) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`;

const reasons = [
  {
    title: 'Technology',
    text: 'Work hands-on with Titan DMS, CitNOW and the tools dealerships run on every day.',
    color: 'var(--purple)',
  },
  {
    title: 'Innovation',
    text: 'Help dealerships across Sub-Saharan Africa adopt new ways of working.',
    color: 'var(--magenta)',
  },
  {
    title: 'People',
    text: 'Learn from consultants who have supported the industry since 1989.',
    color: 'var(--orange)',
  },
];

const roles = [
  {
    id: 'dms-consultant-support',
    title: 'DMS Consultant Support',
    tags: ['Implementation', 'Full-time', 'Woodmead, Johannesburg'],
    intro:
      'Join our implementation team and help dealerships across Sub-Saharan Africa deploy and get the most out of their DMS.',
    duties: [
      'Handle customer calls and emails professionally',
      'Provide product information and help customers decide',
      'Resolve complaints with empathy',
      'Keep customer data accurate and up to date',
      'Work with the team on complex issues',
      'Travel when required',
    ],
    requirements: [
      'Fluent English (Afrikaans preferred)',
      'Excellent written and verbal communication',
      'Microsoft Office proficiency',
      'Strong attention to detail',
      'Motor industry or accounting knowledge is a bonus',
    ],
  },
  {
    id: 'intern-dms-consultant',
    title: 'Intern DMS Consultant',
    tags: ['Support & Migration', '6-month internship', 'Woodmead, Johannesburg'],
    intro: '[Add a one- or two-sentence summary of the internship.]',
    duties: ['[Responsibility]', '[Responsibility]', '[Responsibility]'],
    requirements: ['[Requirement]', '[Requirement]', '[Requirement]'],
  },
  {
    id: 'junior-technical-administrator',
    title: 'Junior Technical Administrator',
    tags: ['Technical', 'Full-time', 'Woodmead, Johannesburg'],
    intro: '[Add a one- or two-sentence summary of the role.]',
    duties: ['[Responsibility]', '[Responsibility]', '[Responsibility]'],
    requirements: ['[Requirement]', '[Requirement]', '[Requirement]'],
  },
];

const steps = [
  {
    title: 'Choose a role',
    text: 'Read the details above and pick the role that fits you.',
    color: 'var(--purple)',
  },
  {
    title: 'Send your CV',
    text: (
      <>
        Email your CV and a cover letter to{' '}
        <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>, with the role in the subject line.
      </>
    ),
    color: 'var(--magenta)',
  },
  {
    title: 'Meet the team',
    text: 'Shortlisted candidates are invited to interview with our team.',
    color: 'var(--orange)',
    numberColor: 'var(--ink)',
  },
];

function RoleCard({ role, open, onToggle }) {
  const bodyId = `${role.id}-details`;

  return (
    <article className={`vacancy ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="vacancy__head"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
      >
        <span>
          <span className="vacancy__title">{role.title}</span>
          <span className="vacancy__tags">
            {role.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
        </span>
        <span className="vacancy__toggle" aria-hidden="true">
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
      </button>

      {open && (
        <div id={bodyId} className="vacancy__body">
          <p className="muted">{role.intro}</p>
          <div className="vacancy__cols">
            <div>
              <h4>What you'll do</h4>
              <ul>
                {role.duties.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>What you'll need</h4>
              <ul>
                {role.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="vacancy__apply">
            <a href={applyHref(`Application: ${role.title}`)} className="btn btn--magenta">
              Apply for this role
            </a>
            <span>Send your CV and cover letter to {CAREERS_EMAIL}</span>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Careers() {
  const [openRole, setOpenRole] = useState(roles[0].id);

  return (
    <>
      <SiteHeader />
      <header className="hero-wrap">
        <HeroVideo start="mechanic" />
        <section className="container page-hero careers-hero">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link> / <span>Careers</span>
            </nav>
            <h1>
              Help drive change in <span className="text-yellow">African automotive.</span>
            </h1>
            <p>
              Join a team that pairs deep software knowledge with a passion for the motor trade —
              supporting dealerships across the continent from our Woodmead office.
            </p>
            <div className="hero__actions">
              <a href="#roles" className="btn btn--magenta">See open roles</a>
              <a href="#apply" className="btn btn--outline">How to apply</a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section container why">
          <span className="eyebrow">Why Compatible</span>
          <h2>Grow your career where tech meets the motor trade.</h2>
          <div className="why__grid">
            {reasons.map((r) => (
              <article key={r.title} className="why__card" style={{ '--accent': r.color }}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roles" className="vacancies">
          <div className="container vacancies__inner">
            <span className="eyebrow">Open roles</span>
            <div className="vacancies__head">
              <h2>Current vacancies</h2>
              <span className="vacancies__count">{roles.length} open positions</span>
            </div>
            <div className="vacancies__list">
              {roles.map((r) => (
                <RoleCard
                  key={r.id}
                  role={r}
                  open={openRole === r.id}
                  onToggle={() => setOpenRole(openRole === r.id ? null : r.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="section container apply">
          <div>
            <span className="eyebrow">How to apply</span>
            <h2>Three simple steps.</h2>
          </div>
          <ol className="apply__steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span
                  className="apply__num"
                  style={{ background: s.color, color: s.numberColor ?? '#fff' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="container general-cta-wrap">
          <div className="general-cta">
            <div>
              <h2>Don't see the right role?</h2>
              <p>Send us your CV anyway — we'll keep it on file for future opportunities.</p>
            </div>
            <a href={applyHref('General application')} className="btn btn--yellow">
              Send a general application
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
