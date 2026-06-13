import { CSSProperties, useEffect, useRef } from 'react';

type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
};

const projects: Project[] = [
  {
    index: '01',
    title: 'Signal vs Noise',
    description: 'how information survives noise, bias, and missing context.',
    tags: ['research', 'information', 'systems'],
    link: 'https://github.com/cherikakaushal/signal-vs-noise',
  },
  {
    index: '02',
    title: 'when-systems-break',
    description: 'trained models. broke them. learned more from that.',
    tags: ['ml', 'research', 'failure-mode'],
    link: 'https://github.com/cherikakaushal/when-systems-break',
  },
  {
    index: '03',
    title: 'ARPIS',
    description: 'made research papers slightly less painful to explore.',
    tags: ['ai', 'nlp', 'research-tools'],
    link: 'https://github.com/cherikakaushal/arpis-AI-Research-Paper-Intelligence-System',
  },
  {
    index: '04',
    title: 'Symptom Scope',
    description: 'predicting outcomes from messy inputs. risky, but interesting.',
    tags: ['health-tech', 'prediction', 'ml'],
    link: 'https://github.com/cherikakaushal/symptom-scope',
  },
  {
    index: '05',
    title: 'Cargo X / BuildVR',
    description: 'building systems and interfaces around real-world workflows.',
    tags: ['systems', 'ui/ux', 'vr'],
    link: null,
  },
  {
    index: '06',
    title: 'Resilient Rural Data System',
    description: 'designing data workflows for low-connectivity, real-world rural systems.',
    tags: ['data', 'systems', 'resilience'],
    link: 'https://github.com/cherikakaushal/resilient-rural-data-system',
  },
];

const focusTags = ['Machine Learning', 'System Behaviour', 'Data Analysis', 'Explainability'];

const currentExplorations = [
  {
    label: 'signal-vs-noise',
    href: 'https://github.com/cherikakaushal/signal-vs-noise',
  },
  {
    label: 'when-systems-break',
    href: 'https://github.com/cherikakaushal/when-systems-break',
  },
  {
    label: 'ARPIS',
    href: 'https://github.com/cherikakaushal/arpis-AI-Research-Paper-Intelligence-System',
  },
];

export default function Work() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.proj-card').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="work" id="work" ref={ref}>
      <div className="work-inner">
        <div className="section-header">
          <span className="section-label">/ work</span>
          <h2 className="section-title">
            things i&apos;ve built
            <br />
            <em>(and broken)</em>
          </h2>
        </div>

        <div className="focus-card w3-card">
          <div>
            <p className="focus-kicker">Current Focus</p>
            <h3 className="focus-title">Research Internship</h3>
            <p className="focus-place">Indian Institute of Technology Ropar</p>
          </div>
          <div className="focus-tags">
            {focusTags.map((tag) => (
              <span key={tag} className="focus-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const style: CSSProperties = { cursor: project.link ? 'pointer' : 'default' };

            return (
              <div
                key={project.index}
                className="proj-card w3-card"
                onClick={() => project.link && window.open(project.link, '_blank')}
                style={style}
              >
                <div className="proj-top">
                  <span className="proj-num">{project.index}</span>
                  {project.link && <span className="proj-arrow">view</span>}
                </div>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="github-activity">
          <p className="github-label">currently exploring</p>
          <ul className="github-list">
            {currentExplorations.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
