import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import Footer from '../components/Footer.jsx';
import DepartmentCards from '../components/DepartmentCards.jsx';
import TitanDevices from '../components/TitanDevices.jsx';
import MotorDXDevices from '../components/MotorDXDevices.jsx';
import ServiceIQDevices from '../components/ServiceIQDevices.jsx';
import { departments } from '../data/departments.js';

const footerLinks = [
  { label: 'Products', to: '/products' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
];

// Products with an illustrated device mock-up; the rest show a screenshot placeholder.
const illustrations = {
  titan: { Component: TitanDevices, panel: 'devices-panel' },
  motordx: { Component: MotorDXDevices, panel: 'devices-panel devices-panel--navy' },
  serviceiq: { Component: ServiceIQDevices, panel: 'devices-panel' },
};

const article = (name) => (/^[aeiou]/i.test(name) ? 'an' : 'a');

function ProductRow({ product, dept, mediaFirst }) {
  const illustration = illustrations[product.id];

  return (
    <article id={product.id} className={`prod-row ${mediaFirst ? 'prod-row--media-first' : ''}`}>
      <div className="prod-row__copy">
        <div className="prod-row__flag">
          <span
            className="prod-row__tag"
            style={{ background: dept.tagBg ?? dept.color, color: dept.tagText }}
          >
            {product.tag ?? dept.tag}
          </span>
          <span>{product.category}</span>
        </div>
        <h3>{product.name}</h3>
        <p className="muted">{product.text}</p>
        <ul className="prod-row__chips">
          {product.features.map((f, i) => (
            <li key={`${f}-${i}`}>{f}</li>
          ))}
        </ul>
        <div className="hero__actions">
          <Link to="/contact?topic=demo#message" className="btn btn--magenta">
            Book {article(product.name)} {product.name} demo
          </Link>
          <a href="#" className="btn btn--light">Download brochure</a>
        </div>
      </div>
      {illustration ? (
        <div className={`prod-row__media ${illustration.panel}`}>
          <illustration.Component />
        </div>
      ) : (
        <div className="prod-row__media" style={{ background: dept.media, color: dept.mediaText }}>
          [{product.name} screenshot]
        </div>
      )}
    </article>
  );
}

export default function Products() {
  return (
    <>
      <SiteHeader />
      <header className="hero-wrap hero-wrap--products">
        <HeroVideo start="workshop" />
        <section className="container page-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <span>Products</span>
          </nav>
          <h1>
            Software for every department of the{' '}
            <span className="text-yellow">modern dealership.</span>
          </h1>
          <p>
            Eleven products across four departments — implemented, trained and supported by our
            team in Johannesburg.
          </p>
        </section>
      </header>

      <main>
        <div className="container dept-cards-wrap">
          <DepartmentCards variant="products" />
        </div>

        {departments.map((d, i) => (
          <section
            key={d.id}
            id={`dept-${d.id}`}
            className={`dept ${i % 2 === 1 ? 'dept--soft' : ''}`}
            style={{ '--accent': d.color, '--accent-ink': d.ink }}
          >
            <div className="container">
              <header className="dept__head">
                <div>
                  <span className="dept__eyebrow">
                    Department <b>{d.number}</b>
                  </span>
                  <h2>{d.title}</h2>
                </div>
                <p className="muted">{d.intro}</p>
              </header>
              {d.products.map((p, j) => (
                <ProductRow key={p.id} product={p} dept={d} mediaFirst={j % 2 === 1} />
              ))}
            </div>
          </section>
        ))}

        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>
                Not sure which products fit your <span className="text-yellow">dealership?</span>
              </h2>
              <p>Our consultants will map the right setup for your brand, size and market.</p>
            </div>
            <div className="cta-band__actions">
              <Link to="/contact#message" className="btn btn--magenta">Talk to a consultant</Link>
              <a href="tel:+27115182000" className="btn btn--outline">+27 11 518 2000</a>
            </div>
          </div>
        </section>
      </main>

      <Footer links={footerLinks} />
    </>
  );
}
