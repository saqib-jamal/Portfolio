const certificates = [
  {
    title: 'Solidity Smart Contract Development',
    issuer: 'Cyfrin Updraft',
    date: 'Jul 2026',
    url: 'https://profiles.cyfrin.io/u/saqibjamal734/achievements/solidity',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Cyfrin Updraft',
    date: 'Jan 2026',
    url: 'https://profiles.cyfrin.io/u/saqibjamal734/achievements/blockchain-basics',
  },
  {
    title: 'Blockchain and Cryptocurrency Explained',
    issuer: 'Coursera — University of Michigan',
    date: 'Sep 2023',
    url: 'https://coursera.org/verify/VP6GQPSMWAGU',
  },
  {
    title: 'Smart Contracts',
    issuer: 'Coursera — University at Buffalo (SUNY)',
    date: 'Sep 2023',
    url: 'https://coursera.org/verify/BM5UK8JKKWM3',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera — University at Buffalo (SUNY)',
    date: 'Jul 2023',
    url: 'https://coursera.org/verify/6447JL3YU58L',
  },
];

function PlatformIcon({ issuer }) {
  if (issuer.startsWith('Coursera')) {
    return (
      <svg viewBox="0 0 24 24" className="cert-icon" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="var(--mono)" fill="currentColor">C</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="cert-icon" aria-hidden="true">
      <polygon points="12,3 21,8.5 21,15.5 12,21 3,15.5 3,8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontFamily="var(--mono)" fill="currentColor">U</text>
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-eyebrow">Verified</p>
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">
        {certificates.map((cert) => (
          <li key={cert.url} className="cert-item">
            <a href={cert.url} target="_blank" rel="noreferrer" className="cert-link">
              <PlatformIcon issuer={cert.issuer} />
              <span className="cert-info">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-meta">{cert.issuer} · {cert.date}</span>
              </span>
              <span className="cert-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}