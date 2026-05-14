const SHAPES = [
  { type: "blob",     color: "var(--peach)",        x: "5%",  y: "8%",  size: 110, dur: 9,    delay: 0,   anim: "float-y", rot: -8  },
  { type: "star",     color: "var(--butter)",        x: "88%", y: "12%", size: 70,  dur: 7,    delay: 1,   anim: "float-y", rot: 12  },
  { type: "ring",     color: "var(--sky-deep)",      x: "12%", y: "62%", size: 80,  dur: 11,   delay: 0.5, anim: "float-x", rot: 0   },
  { type: "blob",     color: "var(--lavender)",      x: "92%", y: "55%", size: 130, dur: 10,   delay: 2,   anim: "float-y", rot: 20  },
  { type: "squiggle", color: "var(--jade)",          x: "48%", y: "78%", size: 90,  dur: 8,    delay: 1.5, anim: "float-x", rot: -10 },
  { type: "dot3",     color: "var(--blush-deep)",    x: "70%", y: "85%", size: 50,  dur: 6,    delay: 0.8, anim: "float-y", rot: 0   },
  { type: "ring",     color: "var(--peach-deep)",    x: "20%", y: "30%", size: 36,  dur: 9,    delay: 2.5, anim: "float-y", rot: 0   },
  { type: "star",     color: "var(--lavender-deep)", x: "62%", y: "25%", size: 48,  dur: 8.5,  delay: 0.3, anim: "float-x", rot: -15 },
];

function renderShape(s, i) {
  const style = {
    left: s.x, top: s.y,
    width: s.size, height: s.size,
    animation: `${s.anim} ${s.dur}s ease-in-out infinite ${s.delay}s`,
    "--rot": `${s.rot}deg`,
    opacity: 0.55,
  };
  switch (s.type) {
    case "blob":
      return (
        <svg key={i} viewBox="0 0 100 100" style={style}>
          <path d="M50 5 C75 5 95 25 95 50 C95 78 70 95 50 95 C26 95 5 75 5 50 C5 22 27 5 50 5 Z" fill={s.color}/>
        </svg>
      );
    case "star":
      return (
        <svg key={i} viewBox="0 0 100 100" style={style}>
          <path d="M50 5 C55 35 65 45 95 50 C65 55 55 65 50 95 C45 65 35 55 5 50 C35 45 45 35 50 5 Z" fill={s.color}/>
        </svg>
      );
    case "ring":
      return (
        <svg key={i} viewBox="0 0 100 100" style={style}>
          <circle cx="50" cy="50" r="40" fill="none" stroke={s.color} strokeWidth="10"/>
        </svg>
      );
    case "squiggle":
      return (
        <svg key={i} viewBox="0 0 100 40" style={{ ...style, height: s.size * 0.4 }}>
          <path d="M5 20 Q 20 5, 35 20 T 65 20 T 95 20" fill="none" stroke={s.color} strokeWidth="6" strokeLinecap="round"/>
        </svg>
      );
    case "dot3":
      return (
        <svg key={i} viewBox="0 0 100 40" style={{ ...style, height: s.size * 0.4 }}>
          <circle cx="15" cy="20" r="10" fill={s.color}/>
          <circle cx="50" cy="20" r="10" fill={s.color}/>
          <circle cx="85" cy="20" r="10" fill={s.color}/>
        </svg>
      );
    default: return null;
  }
}

export default function FloatingShapes() {
  return (
    <div className="floaters" aria-hidden="true">
      {SHAPES.map(renderShape)}
    </div>
  );
}
