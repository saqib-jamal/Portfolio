import { useEffect, useState } from 'react';

const A = -3;
const B = 5;
const X_START = -2.3;
const X_END = 3.3;
const Y_MIN = -6;
const Y_MAX = 6;
const PLOT_W = 220;
const PLOT_H = 200;
const OFFSET = 20;

function curveY(x) {
  const v = x ** 3 + A * x + B;
  return v >= 0 ? Math.sqrt(v) : null;
}

function toX(x) {
  return OFFSET + ((x - X_START) / (X_END - X_START)) * PLOT_W;
}

function toY(y) {
  return OFFSET + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * PLOT_H;
}

function findRoot() {
  let lo = X_START;
  let hi = X_END;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (curveY(mid) === null) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return hi;
}

const X_ROOT = findRoot();

function buildBranchPath(sign) {
  const step = 0.04;
  let d = `M ${toX(X_ROOT).toFixed(2)} ${toY(0).toFixed(2)} `;
  for (let x = X_ROOT; x <= X_END; x += step) {
    const y = curveY(x);
    if (y === null) continue;
    const py = sign * y;
    d += `L ${toX(x).toFixed(2)} ${toY(py).toFixed(2)} `;
  }
  return d.trim();
}

const P = { x: 0, y: Math.sqrt(0 ** 3 + A * 0 + B) };
const Q = { x: 1, y: Math.sqrt(1 ** 3 + A * 1 + B) };
const slope = (Q.y - P.y) / (Q.x - P.x);
const intercept = P.y - slope * P.x;
const x3 = slope ** 2 - P.x - Q.x;
const y3 = slope * x3 + intercept;
const third = { x: x3, y: y3 };
const sum = { x: x3, y: -y3 };

export default function CurveAdd() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const upperPath = buildBranchPath(1);
  const lowerPath = buildBranchPath(-1);

  const pPx = { x: toX(P.x), y: toY(P.y) };
  const qPx = { x: toX(Q.x), y: toY(Q.y) };
  const thirdPx = { x: toX(third.x), y: toY(third.y) };
  const sumPx = { x: toX(sum.x), y: toY(sum.y) };

  const dx = qPx.x - thirdPx.x;
  const dy = qPx.y - thirdPx.y;
  const lineStart = { x: thirdPx.x - dx * 0.25, y: thirdPx.y - dy * 0.25 };
  const lineEnd = { x: qPx.x + dx * 0.25, y: qPx.y + dy * 0.25 };

  return (
    <svg
      viewBox="0 0 260 240"
      className="curve-add"
      role="img"
      aria-label="Elliptic curve point addition diagram"
    >
      <path d={upperPath} className="curve-path" />
      <path d={lowerPath} className="curve-path" />

      <line
        x1={lineStart.x}
        y1={lineStart.y}
        x2={lineEnd.x}
        y2={lineEnd.y}
        className={`curve-secant${settled ? ' is-settled' : ''}`}
      />

      <line
        x1={thirdPx.x}
        y1={thirdPx.y}
        x2={sumPx.x}
        y2={sumPx.y}
        className={`curve-reflect${settled ? ' is-settled' : ''}`}
      />

      <circle cx={pPx.x} cy={pPx.y} r="4" className={`curve-pt${settled ? ' is-settled' : ''}`} />
      <circle cx={qPx.x} cy={qPx.y} r="4" className={`curve-pt${settled ? ' is-settled' : ''}`} />
      <circle cx={thirdPx.x} cy={thirdPx.y} r="3" className={`curve-pt-ghost${settled ? ' is-settled' : ''}`} />
      <circle cx={sumPx.x} cy={sumPx.y} r="5" className={`curve-pt-sum${settled ? ' is-settled' : ''}`} />
    </svg>
  );
}