import ShareLine from './ShareLine';
import Certifications from './Certifications';
import Projects from './Projects';
import Skills from './Skills';
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
              Final-year Computer Science student, with a focus on 
              security and cryptography. Most recently: a blockchain-based degree
              verification system on Ethereum.
            </p>
          </div>
          <div className="hero-graphic">
            <ShareLine />
            <p className="graphic-caption">
              two points define a line — the secret sits where nobody's looking.
            </p>
          </div>
        </section>


        <Projects />
        <Skills />
        <Certifications />

       <section id="about" className="section">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Background</h2>
          <p className="about-text">
            Computer Science student about to graduate this october.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title">Contact</h2>
                    <div className="contact-links">
            <a href="mailto:saqibjamal734@gmail.com">Email</a>
            <a href="https://github.com/saqib-jamal" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/saqib-jamal-8b5261274" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>built from first principles</span>
      </footer>
    </div>
  );
}