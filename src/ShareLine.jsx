import { useEffect, useRef, useState } from 'react';

// Signature element: three scattered points settle onto a single line,
// then a faint curve (the "wrong" polynomial through fewer points) fades —
// a quiet nod to polynomial secret sharing: many points, one line, one secret.
export default function ShareLine() {
  const [settled, setSettled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setSettled(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 560 220"
      className="share-line"
      role="img"
      aria-label="Three points converging onto a single line"
    >
      {/* faint curve suggesting an alternate, unresolved polynomial */}
      <path
        d="M 40 60 Q 220 220 520 40"
        className="curve-ghost"
      />

      {/* the resolved line — from (30,150) to (530,70), slope = -0.16 */}
      <line
        x1="30" y1="150" x2="530" y2="70"
        className={`share-line-path${settled ? ' is-settled' : ''}`}
      />

      {/* points — exactly on the line above: y = 150 - 0.16(x - 30) */}
      <circle cx="90" cy="140" r="5" className={`pt${settled ? ' is-settled' : ''}`} style={{ transitionDelay: '80ms' }} />
      <circle cx="280" cy="110" r="5" className={`pt${settled ? ' is-settled' : ''}`} style={{ transitionDelay: '180ms' }} />
      <circle cx="470" cy="80" r="5" className={`pt${settled ? ' is-settled' : ''}`} style={{ transitionDelay: '280ms' }} />

      {/* the secret, at x = 0 */}
      <circle cx="30" cy="150" r="4" className={`origin${settled ? ' is-settled' : ''}`} />
      <text x="14" y="178" className="origin-label">s</text>
    </svg>
  );
}