import { useEffect, useState } from 'react';

export default function ShareLine() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 560 220"
      className="share-line"
      role="img"
      aria-label="Shamir secret sharing visualization"
    >
      {/* unresolved polynomial */}
      <path
        d="M 35 65 Q 210 210 525 45"
        className="curve-ghost"
      />

      {/* resolved secret line */}
      <line
        x1="30"
        y1="155"
        x2="530"
        y2="70"
        className={`share-line-path${settled ? ' is-settled' : ''}`}
      />

      {/* secret */}
      <circle
        cx="30"
        cy="155"
        r="4"
        className={`origin${settled ? ' is-settled' : ''}`}
      />

      <text x="13" y="182" className="origin-label">
        s
      </text>

      {/* shares */}
      <circle
        cx="115"
        cy="141"
        r="5"
        className={`pt${settled ? ' is-settled' : ''}`}
      />

      <circle
        cx="300"
        cy="111"
        r="5"
        className={`pt${settled ? ' is-settled' : ''}`}
      />

      <circle
        cx="475"
        cy="81"
        r="5"
        className={`pt${settled ? ' is-settled' : ''}`}
      />

      {/* labels */}
      <text x="91" y="126" className="share-label">
        share 1
      </text>

      <text x="276" y="96" className="share-label">
        share 2
      </text>

      <text x="451" y="66" className="share-label">
        share 3
      </text>
    </svg>
  );
}