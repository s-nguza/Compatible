import renault from '../assets/brands/renault.webp';
import kia from '../assets/brands/kia.webp';
import hyundai from '../assets/brands/hyundai.webp';
import bmw from '../assets/brands/bmw.webp';
import volvo from '../assets/brands/volvo.png';
import landrover from '../assets/brands/landrover.png';
import volkswagen from '../assets/brands/volkswagen.png';
import toyota from '../assets/brands/toyota.png';
import suzuki from '../assets/brands/suzuki.png';

// height = logo display height in px, tuned per logo shape so they look balanced.
const brands = [
  { name: 'Renault', src: renault, height: 48 },
  { name: 'Kia', src: kia, height: 26 },
  { name: 'Hyundai', src: hyundai, height: 16 },
  { name: 'BMW', src: bmw, height: 48 },
  { name: 'Volvo', src: volvo, height: 50 },
  { name: 'Land Rover', src: landrover, height: 40 },
  { name: 'Volkswagen', src: volkswagen, height: 48 },
  { name: 'Toyota', src: toyota, height: 30 },
  { name: 'Suzuki', src: suzuki, height: 24 },
];

export default function Brands() {
  return (
    <section id="partners" className="brands">
      <div className="container">
        <p className="brands__title">Some prestigious brands we work with</p>
        <ul className="brands__list">
          {brands.map((b) => (
            <li key={b.name}>
              <img src={b.src} alt={b.name} style={{ height: b.height }} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
