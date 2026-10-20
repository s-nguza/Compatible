import { Link } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';
import bmw from '../assets/brands/bmw.webp';

// Quotes are DRAFTS written for each customer to review — they are not real statements yet.
// Once a customer approves (or edits) their wording, update the quote and delete 'draft: true'.
// Figures in [brackets] must be replaced with the customer's real numbers.
const testimonials = [
  {
    customer: 'BMW',
    logo: bmw,
    product: 'CitNOW',
    productLink: '/products#citnow',
    color: 'var(--orange)',
    tagText: 'var(--ink)',
    quote:
      'Since rolling out CitNOW in our workshop, customers can see exactly what their vehicle needs before they approve the work. Approval of recommended work is up [x]%, and our service advisors spend far less time on the phone explaining.',
    draft: true,
    person: '[Full name]',
    role: '[Job title]',
  },
  {
    customer: 'Meyers Motors',
    initials: 'MM',
    product: 'Titan DMS',
    productLink: '/products#titan',
    color: 'var(--yellow)',
    tagText: 'var(--ink)',
    quote:
      'Titan DMS brought sales, workshop, parts and accounting into one system. Month-end used to take [x] days — now our figures are there in real time, and the Compatible team in Woodmead is always a phone call away.',
    draft: true,
    person: '[Full name]',
    role: '[Job title]',
  },
  {
    customer: 'Bidvest McCarthy',
    initials: 'BM',
    product: 'CRM',
    productLink: '/products#dept-crm',
    color: 'var(--purple)',
    tagText: '#fff',
    quote:
      "The CRM gives our teams one view of every customer, so follow-ups happen on time and leads don't slip through the cracks. We're seeing more customers come back to us for their next service and their next vehicle.",
    draft: true,
    person: '[Full name]',
    role: '[Job title]',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section container testimonials">
      <div className="section__head section__head--end">
        <div>
          <span className="eyebrow">Customer stories</span>
          <h2>Trusted by dealerships across Africa.</h2>
        </div>
        <p className="muted">
          Hear from the dealer groups and brands that run their business on our platforms.
        </p>
      </div>

      <ul className="testimonials__grid">
        {testimonials.map((t) => (
          <li key={t.customer} className="testimonial" style={{ '--accent': t.color }}>
            <div className="testimonial__top">
              <Quote className="testimonial__mark" size={36} strokeWidth={2} aria-hidden="true" />
              <Link
                to={t.productLink}
                className="testimonial__product"
                style={{ background: t.color, color: t.tagText }}
              >
                {t.product}
              </Link>
            </div>

            {t.draft && <span className="testimonial__draft">Draft — awaiting customer approval</span>}
            <blockquote>{t.quote}</blockquote>

            <figure className="testimonial__who">
              {t.logo ? (
                <img src={t.logo} alt="" className="testimonial__avatar testimonial__avatar--logo" />
              ) : (
                <span className="testimonial__avatar" aria-hidden="true">{t.initials}</span>
              )}
              <figcaption>
                <strong>{t.customer}</strong>
                <span>
                  {t.person} · {t.role}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <Link to="/contact#message" className="text-link testimonials__cta">
        Become our next success story <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </section>
  );
}
