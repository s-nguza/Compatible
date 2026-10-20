import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { departments } from '../data/departments.js';

const links = [
  { label: 'Who we are', to: '/#about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname, hash } = useLocation();

  // Close on navigation, outside click and Escape.
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`menu ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`site-nav__link ${pathname === '/products' ? 'is-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        Products <ChevronDown size={16} strokeWidth={2.5} />
      </button>
      <div className="menu__panel">
        <ul>
          {departments.map((d) => (
            <li key={d.id}>
              <Link to={`/products#dept-${d.id}`}>
                <i className="dot" style={{ background: d.color }} />
                <span>
                  <strong>{d.title}</strong>
                  <small>{d.products.map((p) => p.name).join(' · ')}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/products" className="menu__all">View all products →</Link>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Dealer technology across Africa since 1989</span>
          <div className="topbar__links">
            <a href="tel:+27115182000">+27 11 518 2000</a>
            <a href="mailto:info@compatible.co.za">info@compatible.co.za</a>
            <Link to="/contact?topic=support#message" className="topbar__ticket">
              <span className="dot dot--yellow" /> Open a ticket
            </Link>
          </div>
        </div>
      </div>

      <header className="site-nav">
        <div className="container site-nav__inner">
          <Link to="/" className="logo" aria-label="Compatible Automotive home">
            <img src={logo} alt="Compatible Automotive" className="logo__img" />
          </Link>
          <nav className="site-nav__links" aria-label="Main">
            <NavLink to="/" end className="site-nav__link">Home</NavLink>
            <ProductsMenu />
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `site-nav__link ${isActive && !l.to.includes('#') ? 'is-active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact?topic=demo#message" className="btn btn--magenta site-nav__cta">Book a demo</Link>
        </div>
      </header>
    </>
  );
}
