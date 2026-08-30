const certificates = [
  {
    title: 'Solidity Smart Contract Development',
    issuer: 'Cyfrin Updraft',
    date: 'Jul 2026',
    url: 'https://profiles.cyfrin.io/u/saqibjamal734/achievements/solidity',
    logo: '/updraft-logo.png',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Cyfrin Updraft',
    date: 'Jan 2026',
    url: 'https://profiles.cyfrin.io/u/saqibjamal734/achievements/blockchain-basics',
    logo: '/updraft-logo.png',
  },
  {
    title: 'Blockchain and Cryptocurrency Explained',
    issuer: 'Coursera — University of Michigan',
    date: 'Sep 2023',
    url: 'https://coursera.org/verify/VP6GQPSMWAGU',
    logo: '/coursera-logo.svg',
  },
  {
    title: 'Smart Contracts',
    issuer: 'Coursera — University at Buffalo (SUNY)',
    date: 'Sep 2023',
    url: 'https://coursera.org/verify/BM5UK8JKKWM3',
    logo: '/coursera-logo.svg',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera — University at Buffalo (SUNY)',
    date: 'Jul 2023',
    url: 'https://coursera.org/verify/6447JL3YU58L',
    logo: '/coursera-logo.svg',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-eyebrow">Verified</p>
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">
        {certificates.map((cert) => (
          <li key={cert.url} className="cert-item">
            <a href={cert.url} target="_blank" rel="noreferrer" className="cert-link">
              <img src={cert.logo} alt={cert.issuer} className="cert-icon" />
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