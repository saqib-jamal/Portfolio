const projects = [
  {
    name: 'Degree Verification System',
    description:
      'A blockchain-based degree verification platform on Ethereum. Universities issue degrees on-chain once registered by a contract owner; anyone can verify a degree by ID without trusting a central authority; the owner can revoke degrees or de-register a university. Three role-gated views (public verification, university issuance, owner administration) built on a Solidity contract deployed to Sepolia.',
    stack: ['React', 'ethers.js', 'Solidity', 'React Router'],
    links: [
      { label: 'Live demo', url: 'https://attestchain.vercel.app' },
      { label: 'Frontend repo', url: 'https://github.com/saqib-jamal/degree-verification-frontend' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <p className="section-eyebrow">Selected work</p>
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}