import { Link } from 'react-router-dom';

const defaultLinks = [
  { label: 'Solutions', to: '/#solutions' },
  { label: 'Who we are', to: '/#about' },
  { label: 'Careers', to: '/careers' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
];

export default function Footer({ links = defaultLinks }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <strong>Compatible Automotive</strong>
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              {l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
            </li>
          ))}
        </ul>
        <span>© 2026 Compatible Automotive</span>
      </div>
    </footer>
  );
}
