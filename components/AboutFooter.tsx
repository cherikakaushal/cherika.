import { useEffect, useRef } from 'react';

const skills = ['python', 'ml/ai', 'react', 'systems design', 'nlp', 'research', 'ui/ux', 'storytelling'];

const timeline = [
  { year: '2025', title: 'BuildVR' },
  { year: '2026', title: 'Research Intern', detail: 'IIT Ropar' },
  { year: '2026', title: 'Signal vs Noise' },
  { year: '2026', title: 'When Systems Break' },
];

export function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.about-reveal').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        <div className="section-header">
          <span className="section-label">/ about</span>
          <h2 className="section-title">
            the person
            <br />
            <em>behind the code</em>
          </h2>
        </div>

        <div className="about-layout">
          <div>
            <div className="about-stat about-reveal">
              <span className="stat-number">2027</span>
              <span className="stat-label">expected graduation</span>
            </div>
            <div className="about-divider" />
            <div className="about-stat about-reveal">
              <p className="about-location">
                Punjabi University,
                <br />
                Patiala <span>to</span> B.Tech CSE
              </p>
            </div>
            <div className="about-divider" />
            <div className="about-stat about-reveal">
              <p className="about-location">2023 - 2027</p>
            </div>
          </div>

          <div className="about-text">
            <p className="about-para about-reveal">
              I&apos;m a Computer Science student at Punjabi University Patiala.
            </p>
            <p className="about-para light about-reveal">
              I work across development, systems, and ideas - and I enjoy exploring how things
              behave beyond ideal conditions.
            </p>
            <p className="about-para about-reveal">
              I&apos;m drawn to the edges - where systems get weird, where logic meets intuition, and
              where interesting problems live.
            </p>
            <div className="about-skills about-reveal">
              {skills.map((skill) => (
                <span key={skill} className="about-skill w3-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="research-timeline about-reveal">
              <p className="timeline-label">research timeline</p>
              <div className="timeline-list">
                {timeline.map((item) => (
                  <div key={`${item.year}-${item.title}`} className="timeline-item">
                    <span className="timeline-year">{item.year}</span>
                    <div>
                      <p className="timeline-title">{item.title}</p>
                      {item.detail && <p className="timeline-detail">{item.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            ck<em>.</em>
          </div>
          <p className="footer-tagline">building at the edge of systems</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/cherikakaushal"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/cherika-kaushal-4b9b8b30b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            linkedin
          </a>
          <a href="mailto:cherikakaushal@gmail.com" className="footer-link">
            cherikakaushal@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">2026 cherika kaushal. all rights reserved.</span>
        <span className="footer-made">made with care and too many broken builds</span>
      </div>
    </footer>
  );
}
