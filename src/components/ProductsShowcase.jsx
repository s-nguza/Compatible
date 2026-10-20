import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DepartmentCards from './DepartmentCards.jsx';
import TitanDevices from './TitanDevices.jsx';

const modules = ['Showroom', 'Service', 'Parts', 'CRM', 'Accounting', 'Reports', 'eSign'];

export default function ProductsShowcase() {
  return (
    <section id="products" className="showcase">
      <div className="container">
        <div className="showcase__head">
          <div>
            <span className="eyebrow">Our products</span>
            <h2>Four departments. Eleven products. One partner.</h2>
          </div>
          <div className="showcase__intro">
            <p className="muted">
              Proven platforms, implemented and supported by our team in Johannesburg.
            </p>
            <Link to="/products" className="btn btn--navy">
              View all products <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <article className="titan-card">
          <div className="titan-card__copy">
            <div className="flag flag--dark">
              <span className="flag__pill">Flagship</span>
              <span>Dealer management system</span>
            </div>
            <h3>Titan DMS</h3>
            <p>
              A modern, cloud-based DMS that runs your whole dealership in one place — showroom,
              service, parts, CRM and accounting — on desktop and mobile.
            </p>
            <ul className="titan-card__chips">
              {modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link to="/contact?topic=demo#message" className="btn btn--magenta">Book a Titan demo</Link>
              <Link to="/products#titan" className="btn btn--outline">Explore modules</Link>
            </div>
          </div>
          <div className="titan-card__media devices-panel">
            <TitanDevices />
          </div>
        </article>

        <DepartmentCards variant="home" />
      </div>
    </section>
  );
}
