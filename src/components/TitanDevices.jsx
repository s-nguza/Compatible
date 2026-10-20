import titanLogo from '../assets/titan-logo.png';

// Illustrated Titan DMS UI on a laptop and phone — a stand-in until real product screenshots exist.

const ORANGE = '#f26b21';
const ORANGE_SOFT = '#fde4d4';
const INK = '#1f1d2b';
const MUTED = '#9b98ab';
const LINE = '#ecebf2';

const kpis = [
  { label: 'Sales', value: '128', delta: '+12%' },
  { label: 'Service', value: '342', delta: '+8%' },
  { label: 'Parts', value: 'R1.4m', delta: '+5%' },
  { label: 'Finance', value: '96%', delta: '+3%' },
];

const bars = [34, 52, 44, 66, 58, 74, 62, 88, 70, 96];

const deals = [
  { name: 'Polo Vivo 1.4', stage: 'Delivered', w: 54 },
  { name: 'Hilux 2.8 GD-6', stage: 'Finance', w: 40 },
  { name: 'X3 xDrive20d', stage: 'Quote', w: 26 },
];

export default function TitanDevices() {
  return (
    <svg
      className="titan-devices"
      viewBox="0 0 640 440"
      role="img"
      aria-label="Titan DMS dashboard shown on a laptop and a mobile phone"
    >
      <defs>
        <filter id="td-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#5a2100" floodOpacity="0.35" />
        </filter>
        <linearGradient id="td-base" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d9d8e2" />
          <stop offset="1" stopColor="#a9a7b8" />
        </linearGradient>
        <clipPath id="td-screen">
          <rect x="56" y="46" width="436" height="270" rx="4" />
        </clipPath>
        <clipPath id="td-phone">
          <rect x="474" y="150" width="128" height="252" rx="16" />
        </clipPath>
      </defs>

      {/* ---------- Laptop ---------- */}
      <g filter="url(#td-shadow)">
        <rect x="44" y="34" width="460" height="294" rx="16" fill="#18171f" />
        <path d="M14 330 h520 l-16 18 q-4 4 -12 4 h-464 q-8 0 -12 -4 z" fill="url(#td-base)" />
        <rect x="232" y="330" width="84" height="5" rx="2.5" fill="#8f8da0" />
      </g>
      <circle cx="274" cy="40" r="2" fill="#3a3946" />

      <g clipPath="url(#td-screen)" fontFamily="DM Sans, sans-serif">
        <rect x="56" y="46" width="436" height="270" fill="#f7f7fa" />

        {/* Top bar */}
        <rect x="56" y="46" width="436" height="30" fill="#fff" />
        <image href={titanLogo} x="96" y="51" width="74" height="20" preserveAspectRatio="xMinYMid meet" />
        <rect x="290" y="54" width="120" height="14" rx="7" fill={LINE} />
        <circle cx="300" cy="61" r="3" fill="none" stroke={MUTED} strokeWidth="1.2" />
        <circle cx="440" cy="61" r="4" fill={ORANGE_SOFT} />
        <circle cx="474" cy="61" r="8" fill={ORANGE} />
        <text x="474" y="64" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff">CA</text>
        <rect x="56" y="76" width="436" height="1" fill={LINE} />

        {/* Sidebar */}
        <rect x="56" y="77" width="34" height="239" fill="#26242f" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="65"
            y={92 + i * 26}
            width="16"
            height="16"
            rx="4"
            fill={i === 0 ? ORANGE : '#3b3946'}
          />
        ))}

        {/* Heading */}
        <text x="100" y="96" fontSize="11" fontWeight="700" fill={INK}>Dealer overview</text>
        <text x="100" y="108" fontSize="7" fill={MUTED}>Woodmead branch · This month</text>
        <rect x="430" y="88" width="52" height="16" rx="5" fill={ORANGE} />
        <text x="456" y="99" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">+ New deal</text>

        {/* KPI cards */}
        {kpis.map((k, i) => {
          const x = 100 + i * 96;
          return (
            <g key={k.label}>
              <rect x={x} y="116" width="88" height="46" rx="6" fill="#fff" stroke={LINE} />
              <text x={x + 8} y="129" fontSize="6.5" fill={MUTED}>{k.label}</text>
              <text x={x + 8} y="146" fontSize="12" fontWeight="700" fill={INK}>{k.value}</text>
              <text x={x + 8} y="156" fontSize="6" fontWeight="700" fill="#1a9b5b">{k.delta}</text>
              <polyline
                points={`${x + 50},152 ${x + 58},146 ${x + 66},149 ${x + 74},140 ${x + 80},142`}
                fill="none"
                stroke={ORANGE}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}

        {/* Revenue chart */}
        <rect x="100" y="170" width="232" height="136" rx="6" fill="#fff" stroke={LINE} />
        <text x="110" y="185" fontSize="8" fontWeight="700" fill={INK}>Monthly revenue</text>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="110" y={204 + i * 28} width="212" height="0.8" fill={LINE} />
        ))}
        {bars.map((h, i) => (
          <rect
            key={i}
            x={114 + i * 20.5}
            y={296 - h}
            width="12"
            height={h}
            rx="2.5"
            fill={i === bars.length - 1 ? ORANGE : ORANGE_SOFT}
          />
        ))}

        {/* Deals list */}
        <rect x="340" y="170" width="142" height="136" rx="6" fill="#fff" stroke={LINE} />
        <text x="350" y="185" fontSize="8" fontWeight="700" fill={INK}>Live deals</text>
        {deals.map((d, i) => {
          const y = 198 + i * 34;
          return (
            <g key={d.name}>
              <circle cx="358" cy={y + 8} r="8" fill={ORANGE_SOFT} />
              <rect x="354" y={y + 5} width="8" height="5" rx="1.5" fill={ORANGE} />
              <text x="372" y={y + 6} fontSize="7" fontWeight="700" fill={INK}>{d.name}</text>
              <text x="372" y={y + 15} fontSize="6" fill={MUTED}>{d.stage}</text>
              <rect x="372" y={y + 20} width="100" height="3" rx="1.5" fill={LINE} />
              <rect x="372" y={y + 20} width={d.w * 1.8} height="3" rx="1.5" fill={ORANGE} />
            </g>
          );
        })}
      </g>

      {/* ---------- Phone ---------- */}
      <g filter="url(#td-shadow)">
        <rect x="466" y="142" width="144" height="268" rx="22" fill="#18171f" />
      </g>
      <g clipPath="url(#td-phone)" fontFamily="DM Sans, sans-serif">
        <rect x="474" y="150" width="128" height="252" fill="#f7f7fa" />
        <rect x="474" y="150" width="128" height="62" fill={ORANGE} />
        <rect x="518" y="156" width="40" height="6" rx="3" fill="#18171f" />
        <text x="484" y="182" fontSize="7" fill="#ffe2cf">Good morning, Thabo</text>
        <text x="484" y="198" fontSize="11" fontWeight="700" fill="#fff">Workshop today</text>

        <rect x="482" y="220" width="112" height="40" rx="7" fill="#fff" stroke={LINE} />
        <text x="490" y="234" fontSize="7" fontWeight="700" fill={INK}>Job card #2041</text>
        <text x="490" y="245" fontSize="6" fill={MUTED}>Hilux · 60 000 km service</text>
        <rect x="552" y="227" width="34" height="11" rx="5.5" fill={ORANGE_SOFT} />
        <text x="569" y="235" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={ORANGE}>In bay 3</text>
        <rect x="490" y="250" width="96" height="3" rx="1.5" fill={LINE} />
        <rect x="490" y="250" width="62" height="3" rx="1.5" fill={ORANGE} />

        <rect x="482" y="266" width="112" height="40" rx="7" fill="#fff" stroke={LINE} />
        <text x="490" y="280" fontSize="7" fontWeight="700" fill={INK}>Job card #2042</text>
        <text x="490" y="291" fontSize="6" fill={MUTED}>Polo · Brake pads</text>
        <rect x="552" y="273" width="34" height="11" rx="5.5" fill="#dff3e8" />
        <text x="569" y="281" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#1a9b5b">Ready</text>
        <rect x="490" y="296" width="96" height="3" rx="1.5" fill="#1a9b5b" />

        <rect x="482" y="312" width="54" height="40" rx="7" fill="#fff" stroke={LINE} />
        <text x="490" y="326" fontSize="6" fill={MUTED}>Bookings</text>
        <text x="490" y="341" fontSize="11" fontWeight="700" fill={INK}>18</text>
        <rect x="540" y="312" width="54" height="40" rx="7" fill="#fff" stroke={LINE} />
        <text x="548" y="326" fontSize="6" fill={MUTED}>Parts due</text>
        <text x="548" y="341" fontSize="11" fontWeight="700" fill={INK}>7</text>

        <rect x="482" y="362" width="112" height="22" rx="7" fill={ORANGE} />
        <text x="538" y="376" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff">Open job card</text>
        <rect x="518" y="392" width="40" height="3" rx="1.5" fill="#c9c7d4" />
      </g>
    </svg>
  );
}
