import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  Box,
  Megaphone,
  Headphones,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

function Card({ icon: Icon, color, iconColor = '#fff', title, children, className = '' }) {
  return (
    <article className={`card ${className}`}>
      <span className="card__icon" style={{ background: color, color: iconColor }}>
        <Icon size={16} strokeWidth={2.2} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section id="solutions" className="section container">
      <div className="section__head section__head--end">
        <div>
          <span className="eyebrow">What we do</span>
          <h2>One platform for every department on the floor.</h2>
        </div>
        <p className="muted">Tailored solutions, built around how your dealership actually works.</p>
      </div>

      <div className="services">
        <article className="card card--feature span-2">
          <span className="card__icon card__icon--lg" style={{ background: 'var(--yellow)', color: 'var(--navy)' }}>
            <LayoutGrid size={20} strokeWidth={2.2} />
          </span>
          <h3>Dealership Management System</h3>
          <p>
            A central hub with real-time updates, so sales, service, parts and finance work in
            harmony — with fewer errors and less double capture.
          </p>
          <div className="tags">
            {['Sales', 'Service', 'Parts', 'Finance'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </article>

        <Card icon={Users} color="var(--purple)" title="Predictive CRM">
          Track every interaction, manage leads and build offers from real customer history.
        </Card>
        <Card icon={Box} color="var(--magenta)" title="Inventory management">
          Live stock levels, streamlined ordering and better forecasting.
        </Card>
        <Card icon={Megaphone} color="var(--orange)" iconColor="var(--navy)" title="Digital marketing">
          SEO and targeted campaigns that bring buyers to your showroom.
        </Card>
        <Card icon={Headphones} color="var(--yellow)" iconColor="var(--navy)" title="Responsive support">
          Support portals and fast response times that keep you running.
        </Card>
        <Card icon={MessageSquare} color="var(--navy-2)" title="Customer feedback & insights" className="span-2">
          Collect and analyse what customers say, then turn it into improvements that exceed
          expectations.
        </Card>

        <article className="card card--cta">
          <h3>Not sure where to start?</h3>
          <Link to="/contact?topic=demo#message">
            Book a walkthrough <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </article>
      </div>
    </section>
  );
}
