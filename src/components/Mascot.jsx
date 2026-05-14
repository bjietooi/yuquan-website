export default function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bodyGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#7fbf91"/>
          <stop offset="100%" stopColor="#419159"/>
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="220" rx="65" ry="9" fill="rgba(0,0,0,0.18)"/>
      <ellipse cx="92" cy="200" rx="20" ry="14" fill="#2f6c41"/>
      <ellipse cx="148" cy="200" rx="20" ry="14" fill="#2f6c41"/>
      <path
        d="M60 130 Q 60 50 120 50 Q 180 50 180 130 Q 180 200 120 200 Q 60 200 60 130 Z"
        fill="url(#bodyGrad)"
      />
      <ellipse cx="120" cy="150" rx="42" ry="46" fill="#fff8e8" opacity="0.85"/>
      <ellipse cx="60" cy="140" rx="14" ry="22" fill="#419159" transform="rotate(-20 60 140)"/>
      <ellipse cx="180" cy="140" rx="14" ry="22" fill="#419159" transform="rotate(20 180 140)"/>
      <circle cx="88" cy="125" r="11" fill="#ffb3c7" opacity="0.75"/>
      <circle cx="152" cy="125" r="11" fill="#ffb3c7" opacity="0.75"/>
      <ellipse cx="100" cy="105" rx="9" ry="11" fill="#2a2f2a"/>
      <ellipse cx="140" cy="105" rx="9" ry="11" fill="#2a2f2a"/>
      <circle cx="103" cy="101" r="3" fill="white"/>
      <circle cx="143" cy="101" r="3" fill="white"/>
      <path d="M105 135 Q 120 148 135 135" stroke="#2a2f2a" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M115 50 Q 100 25 120 15 Q 140 25 125 50 Z" fill="#5fa472"/>
      <path d="M120 15 L 120 50" stroke="#2f6c41" strokeWidth="2" fill="none"/>
    </svg>
  );
}
