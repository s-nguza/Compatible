import { Link } from 'react-router-dom';
import { departments } from '../data/departments.js';

// variant="products": "01 · 3 products" + "View department" (jumps within /products)
// variant="home":     "Department 01"   + "View products"   (links to /products)
export default function DepartmentCards({ variant = 'products' }) {
  const onProducts = variant === 'products';

  return (
    <ul className="dept-cards">
      {departments.map((d) => (
        <li
          key={d.id}
          className="dept-card"
          style={{ '--accent': d.color, '--accent-ink': d.ink }}
        >
          <span className="dept-card__eyebrow">
            {onProducts
              ? `${d.number} · ${d.products.length} products`
              : `Department ${d.number}`}
          </span>
          <h3>{d.title}</h3>
          <ul className="dept-card__list">
            {d.products.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
          <Link to={`/products#dept-${d.id}`} className="dept-card__link">
            {onProducts ? 'View department' : 'View products'}
          </Link>
        </li>
      ))}
    </ul>
  );
}
