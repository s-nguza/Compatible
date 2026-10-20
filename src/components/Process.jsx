const steps = [
  { n: '01', title: 'Discover', text: "We learn your dealership's processes and goals.", color: 'var(--purple)' },
  { n: '02', title: 'Tailor', text: 'We configure the platform around your departments.', color: 'var(--magenta)' },
  { n: '03', title: 'Go live', text: 'Training and migration with our consultants on hand.', color: 'var(--orange)' },
  { n: '04', title: 'Grow', text: 'Ongoing support and insights to optimise your return.', color: 'var(--yellow)' },
];

export default function Process() {
  return (
    <section className="section section--process container">
      <h2 className="process__title">A seamless transition from conception to realisation.</h2>
      <ol className="process">
        {steps.map((s) => (
          <li key={s.n} style={{ '--step': s.color }}>
            <span className="process__num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
