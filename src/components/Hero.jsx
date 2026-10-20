import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero__grid">
        <div className="hero__copy">
          <span className="badge">Dealer technology across Africa · Since 1989</span>
          <h1>
            Driving change in <span className="text-yellow">African automotive.</span>
          </h1>
          <p>
            Dealer management, predictive CRM and digital marketing on one integrated
            platform — delivered through technology, innovation and people.
          </p>
          <div className="hero__actions">
            <Link to="/contact#message" className="btn btn--magenta">Talk to our team</Link>
            <Link to="/products" className="btn btn--outline">Explore our products</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
