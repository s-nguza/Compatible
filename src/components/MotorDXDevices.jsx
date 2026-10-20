// Illustrated MotorDX UI: a digital deal file on a laptop and remote e-signing on a phone.
// A stand-in until real product screenshots exist.

const ACCENT = '#ffc20e';
const ACCENT_SOFT = '#fff3cc';
const ACCENT_INK = '#9a6a00';
const NAVY = '#2b2570';
const INK = '#1f1d2b';
const MUTED = '#9b98ab';
const LINE = '#ecebf2';
const GREEN = '#1a9b5b';
const GREEN_SOFT = '#dff3e8';

const stages = ['Offer to Purchase', 'Finance', 'Signed', 'Delivered'];
const CURRENT_STAGE = 2;

const documents = [
  { name: 'Offer to Purchase', done: true },
  { name: 'Customer ID & proof of address', done: true },
  { name: 'Finance approval', done: true },
  { name: 'Trade-in valuation', done: true },
  { name: 'Delivery checklist', done: false },
];

function Check({ x, y, done }) {
  return done ? (
    <g>
      <circle cx={x} cy={y} r="6" fill={GREEN_SOFT} />
      <path
        d={`M${x - 2.6} ${y} l1.8 1.9 l3.4 -3.6`}
        fill="none"
        stroke={GREEN}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  ) : (
    <circle cx={x} cy={y} r="5.4" fill="#fff" stroke="#cfcde0" strokeWidth="1.2" />
  );
}

export default function MotorDXDevices() {
  const progress = documents.filter((d) => d.done).length / documents.length;

  return (
    <svg
      className="titan-devices"
      viewBox="0 0 640 440"
      role="img"
      aria-label="MotorDX digital deal file on a laptop and remote e-signing on a mobile phone"
    >
      <defs>
        <filter id="mdx-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#05031a" floodOpacity="0.5" />
        </filter>
        <linearGradient id="mdx-base" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d9d8e2" />
          <stop offset="1" stopColor="#a9a7b8" />
        </linearGradient>
        <clipPath id="mdx-screen">
          <rect x="56" y="46" width="436" height="270" rx="4" />
        </clipPath>
        <clipPath id="mdx-phone">
          <rect x="474" y="150" width="128" height="252" rx="16" />
        </clipPath>
      </defs>

      {/* ---------- Laptop ---------- */}
      <g filter="url(#mdx-shadow)">
        <rect x="44" y="34" width="460" height="294" rx="16" fill="#18171f" />
        <path d="M14 330 h520 l-16 18 q-4 4 -12 4 h-464 q-8 0 -12 -4 z" fill="url(#mdx-base)" />
        <rect x="232" y="330" width="84" height="5" rx="2.5" fill="#8f8da0" />
      </g>
      <circle cx="274" cy="40" r="2" fill="#3a3946" />

      <g clipPath="url(#mdx-screen)" fontFamily="DM Sans, sans-serif">
        <rect x="56" y="46" width="436" height="270" fill="#f7f7fa" />

        {/* Top bar with wordmark */}
        <rect x="56" y="46" width="436" height="30" fill={NAVY} />
        <rect x="68" y="54" width="14" height="14" rx="3.5" fill={ACCENT} />
        <path d="M71.5 64.5 v-7 l3.5 3.5 l3.5 -3.5 v7" fill="none" stroke={NAVY} strokeWidth="1.6" strokeLinejoin="round" />
        <text x="88" y="65" fontSize="10" fontWeight="700" fill="#fff">
          Motor<tspan fill={ACCENT}>DX</tspan>
        </text>
        <rect x="300" y="54" width="110" height="14" rx="7" fill="#3a3486" />
        <circle cx="474" cy="61" r="8" fill={ACCENT} />
        <text x="474" y="64" textAnchor="middle" fontSize="7.5" fontWeight="700" fill={NAVY}>FI</text>

        {/* Deal header */}
        <text x="72" y="96" fontSize="7" fill={MUTED}>Deal file · OTP-10482</text>
        <text x="72" y="111" fontSize="12" fontWeight="700" fill={INK}>Toyota Hilux 2.8 GD-6 · N. Dlamini</text>
        <rect x="400" y="88" width="80" height="18" rx="5" fill={ACCENT} />
        <text x="440" y="100" textAnchor="middle" fontSize="7" fontWeight="700" fill={INK}>Send for signing</text>

        {/* Stage tracker */}
        <rect x="72" y="120" width="408" height="44" rx="6" fill="#fff" stroke={LINE} />
        <rect x="104" y="136" width="344" height="2" rx="1" fill={LINE} />
        <rect x="104" y="136" width={(344 / 3) * CURRENT_STAGE} height="2" rx="1" fill={ACCENT} />
        {stages.map((s, i) => {
          const cx = 104 + (344 / 3) * i;
          const done = i < CURRENT_STAGE;
          const current = i === CURRENT_STAGE;
          return (
            <g key={s}>
              <circle
                cx={cx}
                cy="137"
                r="6"
                fill={done ? ACCENT : '#fff'}
                stroke={done || current ? ACCENT : '#cfcde0'}
                strokeWidth="1.6"
              />
              {current && <circle cx={cx} cy="137" r="2.4" fill={ACCENT} />}
              <text
                x={cx}
                y="155"
                textAnchor="middle"
                fontSize="6.5"
                fontWeight={current ? 700 : 400}
                fill={current ? INK : MUTED}
              >
                {s}
              </text>
            </g>
          );
        })}

        {/* Document checklist */}
        <rect x="72" y="172" width="248" height="134" rx="6" fill="#fff" stroke={LINE} />
        <text x="82" y="187" fontSize="8" fontWeight="700" fill={INK}>Document checklist</text>
        <text x="310" y="187" textAnchor="end" fontSize="6.5" fontWeight="700" fill={GREEN}>
          {Math.round(progress * 100)}% complete
        </text>
        {documents.map((d, i) => {
          const y = 204 + i * 20;
          return (
            <g key={d.name}>
              <Check x={88} y={y} done={d.done} />
              <text x="100" y={y + 2.5} fontSize="7" fill={d.done ? INK : MUTED}>{d.name}</text>
              <rect x="276" y={y - 5} width="34" height="10" rx="5" fill={d.done ? GREEN_SOFT : ACCENT_SOFT} />
              <text x="293" y={y + 2} textAnchor="middle" fontSize="5.5" fontWeight="700" fill={d.done ? GREEN : ACCENT_INK}>
                {d.done ? 'Filed' : 'Pending'}
              </text>
            </g>
          );
        })}

        {/* Signatures + activity */}
        <rect x="328" y="172" width="152" height="70" rx="6" fill="#fff" stroke={LINE} />
        <text x="338" y="187" fontSize="8" fontWeight="700" fill={INK}>Signatures</text>
        {[
          { who: 'Customer', state: 'Signed remotely', done: true },
          { who: 'F&I manager', state: 'Awaiting', done: false },
        ].map((s, i) => {
          const y = 204 + i * 20;
          return (
            <g key={s.who}>
              <Check x={344} y={y} done={s.done} />
              <text x="356" y={y - 1} fontSize="7" fontWeight="700" fill={INK}>{s.who}</text>
              <text x="356" y={y + 7} fontSize="5.5" fill={MUTED}>{s.state}</text>
            </g>
          );
        })}

        <rect x="328" y="248" width="152" height="58" rx="6" fill={NAVY} />
        <text x="338" y="263" fontSize="6.5" fill="#bdb8e8">Live deals this month</text>
        <text x="338" y="282" fontSize="16" fontWeight="700" fill="#fff">47</text>
        <text x="362" y="282" fontSize="6.5" fontWeight="700" fill={ACCENT}>0 paper files</text>
        <rect x="338" y="290" width="132" height="4" rx="2" fill="#3a3486" />
        <rect x="338" y="290" width="104" height="4" rx="2" fill={ACCENT} />
      </g>

      {/* ---------- Phone: remote e-signing ---------- */}
      <g filter="url(#mdx-shadow)">
        <rect x="466" y="142" width="144" height="268" rx="22" fill="#18171f" />
      </g>
      <g clipPath="url(#mdx-phone)" fontFamily="DM Sans, sans-serif">
        <rect x="474" y="150" width="128" height="252" fill="#f7f7fa" />
        <rect x="474" y="150" width="128" height="62" fill={NAVY} />
        <rect x="518" y="156" width="40" height="6" rx="3" fill="#18171f" />
        <text x="484" y="182" fontSize="7" fill="#bdb8e8">Your Dealership</text>
        <text x="484" y="198" fontSize="10.5" fontWeight="700" fill="#fff">Sign your offer</text>

        <rect x="482" y="220" width="112" height="56" rx="7" fill="#fff" stroke={LINE} />
        <text x="490" y="234" fontSize="7" fontWeight="700" fill={INK}>Offer to Purchase</text>
        <text x="490" y="244" fontSize="5.8" fill={MUTED}>Toyota Hilux 2.8 GD-6</text>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="490" y={252 + i * 7} width={i === 2 ? 60 : 96} height="3" rx="1.5" fill={LINE} />
        ))}

        <rect x="482" y="284" width="112" height="62" rx="7" fill="#fff" stroke={ACCENT} strokeWidth="1.2" />
        <text x="490" y="297" fontSize="6" fill={MUTED}>Sign here</text>
        <path
          d="M494 328 c6 -16 12 -18 14 -8 s4 10 10 -2 s8 -12 10 0 s6 8 12 -4 c3 -6 8 -6 10 2 s6 6 12 -2"
          fill="none"
          stroke={NAVY}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="490" y="334" width="96" height="1" fill={LINE} />

        <rect x="482" y="354" width="112" height="22" rx="7" fill={ACCENT} />
        <text x="538" y="368" textAnchor="middle" fontSize="7.5" fontWeight="700" fill={INK}>Sign &amp; submit</text>
        <rect x="518" y="392" width="40" height="3" rx="1.5" fill="#c9c7d4" />
      </g>
    </svg>
  );
}
