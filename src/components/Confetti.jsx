import { useState, useCallback } from 'react';

const COLORS = ["#419159", "#ffc9a8", "#ffe8a3", "#bde0f5", "#dccaf0", "#ffc7c7"];

export function useConfetti() {
  const [bursts, setBursts] = useState([]);

  const fire = useCallback((e) => {
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    const pieces = Array.from({ length: 28 }).map((_, i) => {
      const angle = (Math.random() - 0.5) * Math.PI;
      const force = 120 + Math.random() * 160;
      return {
        id: `${Date.now()}-${i}`,
        x, y,
        dx: Math.cos(angle - Math.PI / 2) * force,
        dy: Math.sin(angle - Math.PI / 2) * force + (Math.random() * 200 + 80),
        dr: (Math.random() - 0.5) * 1200,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 80,
      };
    });
    const id = Date.now();
    setBursts(b => [...b, { id, pieces }]);
    setTimeout(() => setBursts(b => b.filter(x => x.id !== id)), 1800);
  }, []);

  const node = (
    <div className="confetti" aria-hidden="true">
      {bursts.flatMap(b =>
        b.pieces.map(p => (
          <span
            key={p.id}
            className="confetti-piece"
            style={{
              left: p.x, top: p.y,
              background: p.color,
              animationDelay: `${p.delay}ms`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--dr": `${p.dr}deg`,
            }}
          />
        ))
      )}
    </div>
  );

  return { fire, node };
}
