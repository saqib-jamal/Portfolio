import ShareLine from './ShareLine';
import Certifications from './Certifications';
import Projects from './Projects';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-mark">/ portfolio</span>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#certifications">Certifications</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Software Engineer — with a lean toward security &amp; cryptography</p>
            <h1>
              I build systems,<br />
              then ask what breaks them.
            </h1>
            <p className="hero-sub">
              Your name — replace with a line on what you actually do: the kind of
              problems you reach for, and the layer of the stack you live in.
            </p>
          </div>
          <div className="hero-graphic">
            <ShareLine />
            <p className="graphic-caption">
              two points define a line — the secret sits where nobody's looking.
            </p>
          </div>
        </section>

        <section id="work" className="section">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <div className="project-placeholder">
            <p>
              This section is waiting on real project details — description,
              stack, and links — before it gets filled in properly.
            </p>
          </div>
        </section>

        <Certifications />

        <Projects />

        <section id="contact" className="section contact-section">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="contact-links">
            <a href="mailto:you@example.com">Email</a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>built from first principles</span>
      </footer>
    </div>
  );
}