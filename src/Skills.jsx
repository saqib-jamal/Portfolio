const groups = [
  {
    label: 'Build with regularly',
    skills: ['JavaScript', 'React', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Git'],
  },
  {
    label: 'Blockchain & smart contracts',
    skills: ['Solidity', 'ethers.js', 'Ethereum'],
  },
  {
    label: 'Cryptography fundamentals',
    skills: ['RSA', 'Diffie–Hellman', 'Modular arithmetic', 'Shamir secret sharing'],
  },
  {
    label: 'Also comfortable with',
    skills: ['Python', 'C++'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-eyebrow">Toolkit</p>
      <h2 className="section-title">Skills</h2>
      <div className="skills-groups">
        {groups.map((group) => (
          <div key={group.label} className="skill-group">
            <p className="skill-group-label">{group.label}</p>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}