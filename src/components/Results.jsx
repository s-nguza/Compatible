import { useEffect, useRef, useState } from 'react';
import { Globe, CarFront, Ticket, Handshake, HandHeart } from 'lucide-react';

const results = [
  { icon: Globe, value: 16, suffix: '+', label: 'Countries', color: 'var(--purple)' },
  { icon: CarFront, value: 564, suffix: '+', label: 'Dealer locations', color: 'var(--magenta)' },
  { icon: Ticket, value: 465894, suffix: '+', label: 'Support tickets closed', color: 'var(--orange)' },
  { icon: Handshake, value: 22, suffix: '+', label: 'Global partners', color: 'var(--yellow)' },
  { icon: HandHeart, value: 92, suffix: '%', label: 'Customer satisfaction', color: 'var(--magenta)' },
];

const DURATION = 1800;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts from 0 up to `target` each time `runId` changes (0 = not started yet).
function useCountUp(target, runId) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (runId === 0) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      setValue(Math.round(target * easeOutCubic(t)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, runId]);

  return value;
}

function ResultCard({ icon: Icon, value, suffix, label, color, visible }) {
  // First run starts when the section scrolls into view; each hover replays it.
  const [runId, setRunId] = useState(0);
  const count = useCountUp(value, runId);

  useEffect(() => {
    if (visible) setRunId((n) => (n === 0 ? 1 : n));
  }, [visible]);

  return (
    <li
      className="result"
      style={{ '--accent': color }}
      onMouseEnter={() => visible && setRunId((n) => n + 1)}
    >
      <Icon className="result__icon" size={36} strokeWidth={1.6} aria-hidden="true" />
      <strong className="result__value" aria-label={`${value.toLocaleString('en-US')}${suffix}`}>
        <span aria-hidden="true">{count.toLocaleString('en-US')}</span>
        <sup aria-hidden="true">{suffix}</sup>
      </strong>
      <span className="result__label">{label}</span>
    </li>
  );
}

export default function Results() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="results" ref={ref}>
      <div className="container">
        <h2>
          Our results speak for <span className="text-yellow">themselves.</span>
        </h2>
        <ul className="results__grid">
          {results.map((r) => (
            <ResultCard key={r.label} {...r} visible={visible} />
          ))}
        </ul>
      </div>
    </section>
  );
}
