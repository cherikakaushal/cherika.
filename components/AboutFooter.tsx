import { useEffect, useRef } from 'react';

const skills = ['python', 'ml/ai', 'react', 'systems design', 'nlp', 'research', 'ui/ux', 'storytelling'];

const timeline = [
  { date: '2024.06 - 2024.08', title: 'Full Stack Developer (MERN Stack) Apprenticeship', detail: 'IIT Kanpur' },
  { date: '2024.08 - 2024.09', title: 'Specialized Training in AI/ML for Geodata Analysis', detail: 'ISRO' },
  {
    date: '2024.09 - 2024.10',
    title: 'Studied 5G, 6G Networks & Neural Networks',
    detail: '@ Punjabi University Patiala',
  },
  {
    date: '2024.12 - 2026.05',
    title: 'Marketing Intern',
    detail: 'BuildVR & Grubox / Marketing, Content & Product Growth',
  },
  {
    date: '2025.06 - 2025.08',
    title: 'Summer Intern',
    detail: 'BuildVR & Grubox / Full-time Development, Marketing & Product Building',
  },
  {
    date: '2026.05 - present',
    title: 'Research Intern',
    detail: 'IIT Ropar / Data Science, ML & System Behaviour Research',
  },
  { date: '2026.05 - present', title: 'Signal vs Noise' },
  { date: '2026.05 - present', title: 'When Systems Break' },
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
            </div>
            <div className="about-divider" />
            <div className="about-stat about-reveal">
              <p className="about-location">
                <strong>B.Tech Computer Science Engineering</strong>
                <br />
                Punjabi University, Patiala
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

          </div>
        </div>

        <div className="research-timeline about-reveal">
          <p className="timeline-label">experience trace</p>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div key={`${item.date}-${item.title}`} className="timeline-item">
                <span className="timeline-year">{item.date}</span>
                <span className="timeline-title">{item.title}</span>
                {item.detail && <span className="timeline-detail">{item.detail}</span>}
              </div>
            ))}
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
