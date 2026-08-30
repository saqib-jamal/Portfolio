import { useEffect, useState } from 'react';

const USERNAME = 'saqib-jamal';

export default function GitHubActivity() {
  const [repos, setRepos] = useState(null);   // the box — starts empty
  const [error, setError] = useState(null);

  useEffect(() => {
    // runs once, when this section first loads
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed');
        return res.json();
      })
      .then((data) => setRepos(data))   // fill the box with the real answer
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section id="activity" className="section">
      <p className="section-eyebrow">Live</p>
      <h2 className="section-title">Recent GitHub Activity</h2>

      {error && (
        <p className="activity-status">
          Couldn't reach GitHub right now — <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">view profile directly</a>.
        </p>
      )}

      {!error && !repos && (
        <p className="activity-status">Loading recent activity…</p>
      )}

      {repos && (
        <ul className="activity-list">
          {repos.map((repo) => (
            <li key={repo.id} className="activity-item">
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="activity-link">
                <span className="activity-name">{repo.name}</span>
                {repo.description && <span className="activity-desc">{repo.description}</span>}
                <span className="activity-meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}