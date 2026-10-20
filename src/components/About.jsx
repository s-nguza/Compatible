import officePhoto from '../assets/woodmead-office.jpg';

const pills = [
  { label: 'Technology', color: 'var(--purple)' },
  { label: 'Innovation', color: 'var(--magenta)' },
  { label: 'People', color: 'var(--orange)' },
];

export default function About() {
  return (
    <section id="about" className="section container about">
      <img
        src={officePhoto}
        alt="Compatible Automotive sign at 8 Saddle Drive, Woodmead Office Park"
        className="about__photo"
        loading="lazy"
      />
      <div className="about__copy">
        <span className="eyebrow">Who we are</span>
        <h2>Software know-how with a passion for the motor trade.</h2>
        <p className="muted">
          Founded in 1989, Compatible Automotive is a leading supplier of information technology
          across the African continent. We pair powerful dealer management and marketing software
          with an experienced, motivated team — so your dealership can reach global standards.
        </p>
        <div className="pills">
          {pills.map((p) => (
            <span key={p.label}>
              <i className="dot" style={{ background: p.color }} />
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
