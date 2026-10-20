// Illustrated ServiceIQ UI: service-lane offers and engagement on a laptop, the customer's offer on a phone.
// A stand-in until real product screenshots exist.

const ORANGE = '#f26b21';
const ORANGE_SOFT = '#fde4d4';
const NAVY = '#1f1a4a';
const INK = '#1f1d2b';
const MUTED = '#9b98ab';
const LINE = '#ecebf2';
const GREEN = '#1a9b5b';
const GREEN_SOFT = '#dff3e8';
const PURPLE_SOFT = '#ece4f6';
const PURPLE = '#8e2a8e';

const kpis = [
  { label: 'Offers sent', value: '38' },
  { label: 'Opened', value: '71%' },
  { label: 'Interested', value: '12' },
];

const funnel = [
  { label: 'Sent', value: 38 },
  { label: 'Opened', value: 27 },
  { label: 'Clicked', value: 19 },
  { label: 'Interested', value: 12 },
];

const STATUS = {
  interested: { text: 'Interested', fg: GREEN, bg: GREEN_SOFT },
  opened: { text: 'Opened', fg: PURPLE, bg: PURPLE_SOFT },
  sent: { text: 'Sent', fg: '#6b6884', bg: LINE },
};

const lane = [
  { name: 'T. Mokoena', car: 'Polo 1.0 TSI · 45 000 km', status: 'interested' },
  { name: 'L. Pillay', car: 'Ranger 2.0 · 90 000 km', status: 'opened' },
  { name: 'J. van Wyk', car: 'Corolla Cross · 30 000 km', status: 'sent' },
];

export default function ServiceIQDevices() {
  const max = funnel[0].value;

  return (
    <svg
      className="titan-devices"
      viewBox="0 0 640 440"
      role="img"
      aria-label="ServiceIQ service-lane offers and sales briefing on a laptop, and a customer offer on a mobile phone"
    >
      <defs>
        <filter id="siq-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#5a2100" floodOpacity="0.35" />
        </filter>
        <linearGradient id="siq-base" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d9d8e2" />
          <stop offset="1" stopColor="#a9a7b8" />
        </linearGradient>
        <clipPath id="siq-screen">
          <rect x="56" y="46" width="436" height="270" rx="4" />
        </clipPath>
        <clipPath id="siq-phone">
          <rect x="474" y="150" width="128" height="252" rx="16" />
        </clipPath>
      </defs>

      {/* ---------- Laptop ---------- */}
      <g filter="url(#siq-shadow)">
        <rect x="44" y="34" width="460" height="294" rx="16" fill="#18171f" />
        <path d="M14 330 h520 l-16 18 q-4 4 -12 4 h-464 q-8 0 -12 -4 z" fill="url(#siq-base)" />
        <rect x="232" y="330" width="84" height="5" rx="2.5" fill="#8f8da0" />
      </g>
      <circle cx="274" cy="40" r="2" fill="#3a3946" />

      <g clipPath="url(#siq-screen)" fontFamily="DM Sans, sans-serif">
        <rect x="56" y="46" width="436" height="270" fill="#f7f7fa" />

        {/* Top bar with wordmark */}
        <rect x="56" y="46" width="436" height="30" fill={NAVY} />
        <rect x="68" y="54" width="14" height="14" rx="3.5" fill={ORANGE} />
        <path d="M71.5 64 l3 -3 l2 2 l4 -4.5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="88" y="65" fontSize="10" fontWeight="700" fill="#fff">
          Service<tspan fill={ORANGE}>IQ</tspan>
        </text>
        <rect x="300" y="54" width="110" height="14" rx="7" fill="#2f2969" />
        <circle cx="474" cy="61" r="8" fill={ORANGE} />
        <text x="474" y="64" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff">SM</text>

        {/* Heading */}
        <text x="72" y="96" fontSize="11" fontWeight="700" fill={INK}>Service lane today</text>
        <text x="72" y="108" fontSize="7" fill={MUTED}>Offers sent automatically after each service booking</text>

        {/* KPI cards */}
        {kpis.map((k, i) => {
          const x = 72 + i * 84;
          return (
            <g key={k.label}>
              <rect x={x} y="116" width="76" height="38" rx="6" fill="#fff" stroke={LINE} />
              <text x={x + 8} y="129" fontSize="6.5" fill={MUTED}>{k.label}</text>
              <text x={x + 8} y="146" fontSize="12" fontWeight="700" fill={INK}>{k.value}</text>
            </g>
          );
        })}

        {/* Engagement funnel */}
        <rect x="324" y="116" width="156" height="90" rx="6" fill="#fff" stroke={LINE} />
        <text x="334" y="130" fontSize="8" fontWeight="700" fill={INK}>Engagement</text>
        {funnel.map((f, i) => {
          const y = 140 + i * 15;
          const w = (f.value / max) * 92;
          return (
            <g key={f.label}>
              <text x="334" y={y + 7} fontSize="6" fill={MUTED}>{f.label}</text>
              <rect x="372" y={y} width="92" height="9" rx="3" fill={LINE} />
              <rect x="372" y={y} width={w} height="9" rx="3" fill={i === funnel.length - 1 ? ORANGE : ORANGE_SOFT} />
              <text x={372 + w - 4} y={y + 7} textAnchor="end" fontSize="6" fontWeight="700" fill={i === funnel.length - 1 ? '#fff' : ORANGE}>
                {f.value}
              </text>
            </g>
          );
        })}

        {/* Service lane list */}
        <rect x="72" y="162" width="244" height="144" rx="6" fill="#fff" stroke={LINE} />
        <text x="82" y="177" fontSize="8" fontWeight="700" fill={INK}>Customers in for service</text>
        {lane.map((c, i) => {
          const y = 190 + i * 38;
          const s = STATUS[c.status];
          return (
            <g key={c.name}>
              <rect x="82" y={y} width="224" height="30" rx="5" fill={i === 0 ? '#fff8f3' : '#fafafc'} stroke={i === 0 ? ORANGE_SOFT : LINE} />
              <circle cx="96" cy={y + 15} r="8" fill={ORANGE_SOFT} />
              <text x="96" y={y + 17.5} textAnchor="middle" fontSize="6" fontWeight="700" fill={ORANGE}>
                {c.name.split(' ').map((p) => p[0]).join('')}
              </text>
              <text x="110" y={y + 13} fontSize="7" fontWeight="700" fill={INK}>{c.name}</text>
              <text x="110" y={y + 23} fontSize="5.8" fill={MUTED}>{c.car}</text>
              <rect x="256" y={y + 9} width="42" height="12" rx="6" fill={s.bg} />
              <text x="277" y={y + 17.5} textAnchor="middle" fontSize="5.8" fontWeight="700" fill={s.fg}>{s.text}</text>
            </g>
          );
        })}

        {/* Sales briefing */}
        <rect x="324" y="214" width="156" height="92" rx="6" fill={NAVY} />
        <text x="334" y="228" fontSize="6.5" fill="#bdb8e8">Sales briefing</text>
        <text x="334" y="241" fontSize="8.5" fontWeight="700" fill="#fff">T. Mokoena · Polo 1.0 TSI</text>
        <text x="334" y="254" fontSize="6" fill="#d8d5f0">Interested in: Polo Life upgrade</text>
        <text x="334" y="264" fontSize="6" fill="#d8d5f0">Trade-in estimate ready</text>
        <text x="334" y="274" fontSize="6" fill="#d8d5f0">Collecting car today at 15:30</text>
        <rect x="334" y="282" width="78" height="16" rx="5" fill={ORANGE} />
        <text x="373" y="292.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fff">Assign to sales</text>
      </g>

      {/* ---------- Phone: customer offer ---------- */}
      <g filter="url(#siq-shadow)">
        <rect x="466" y="142" width="144" height="268" rx="22" fill="#18171f" />
      </g>
      <g clipPath="url(#siq-phone)" fontFamily="DM Sans, sans-serif">
        <rect x="474" y="150" width="128" height="252" fill="#f7f7fa" />
        <rect x="474" y="150" width="128" height="58" fill={NAVY} />
        <rect x="518" y="156" width="40" height="6" rx="3" fill="#18171f" />
        <text x="484" y="180" fontSize="7" fill="#bdb8e8">Your Dealership</text>
        <text x="484" y="196" fontSize="10.5" fontWeight="700" fill="#fff">An offer for you</text>

        <rect x="482" y="216" width="112" height="44" rx="7" fill="#fff" stroke={LINE} />
        <text x="490" y="229" fontSize="6" fill={MUTED}>Your Polo is in for its</text>
        <text x="490" y="238" fontSize="6" fill={MUTED}>45 000 km service today.</text>
        <rect x="490" y="245" width="58" height="9" rx="4.5" fill={GREEN_SOFT} />
        <text x="519" y="251.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={GREEN}>Ready at 15:30</text>

        <rect x="482" y="266" width="112" height="80" rx="7" fill="#fff" stroke={ORANGE} strokeWidth="1.2" />
        <rect x="482" y="266" width="112" height="34" rx="7" fill={ORANGE_SOFT} />
        <rect x="482" y="290" width="112" height="10" fill={ORANGE_SOFT} />
        {/* simple car silhouette */}
        <path d="M506 293 q0 -4 4 -5 l10 -1 l8 -7 q3 -2 7 -2 h14 q4 0 7 3 l7 6 l6 1 q4 1 4 5 v3 h-67 z" fill={ORANGE} />
        <circle cx="518" cy="296" r="3.5" fill={INK} />
        <circle cx="560" cy="296" r="3.5" fill={INK} />
        <text x="490" y="313" fontSize="7" fontWeight="700" fill={INK}>Upgrade to a new Polo</text>
        <text x="490" y="323" fontSize="5.8" fill={MUTED}>Trade in today, drive out new</text>
        <text x="490" y="337" fontSize="9" fontWeight="700" fill={ORANGE}>
          R4 999<tspan fontSize="5.8" fill={MUTED} fontWeight="400"> pm*</tspan>
        </text>

        <rect x="482" y="354" width="112" height="20" rx="7" fill={ORANGE} />
        <text x="538" y="367" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff">I'm interested</text>
        <text x="538" y="386" textAnchor="middle" fontSize="6.5" fontWeight="700" fill={MUTED}>Not now</text>
        <rect x="518" y="394" width="40" height="3" rx="1.5" fill="#c9c7d4" />
      </g>
    </svg>
  );
}
