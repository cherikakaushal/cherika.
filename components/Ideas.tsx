import { useEffect, useRef } from 'react';

const pillars = [
  { icon: 'o', label: 'systems thinking' },
  { icon: 's', label: 'user psychology' },
  { icon: 'p', label: 'product design' },
  { icon: 't', label: 'storytelling' },
  { icon: 'b', label: 'brand identity' },
];

const items = [
  'aesthetics',
  'cinematic edits',
  'fashion',
  'science curiosity',
  'overthinking systems',
  'editorial design',
  'indie film',
  'speculative futures',
];

export function Ideas() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.idea-reveal').forEach((element, index) => {
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
    <section className="ideas" id="ideas" ref={ref}>
      <div className="ideas-inner">
        <div className="section-header">
          <span className="section-label">/ ideas</span>
          <h2 className="section-title">
            ideas, marketing
            <br />
            <em>& building things</em>
          </h2>
        </div>

        <div className="ideas-layout">
          <div className="ideas-text">
            <p className="idea-reveal">
              I like understanding people as much as I like understanding systems.
            </p>
            <p className="dim idea-reveal">
              how things are presented matters. how things feel matters.
            </p>
            <p className="idea-reveal">
              sometimes building is technical, sometimes it&apos;s storytelling.
            </p>
          </div>
          <div className="ideas-pillars w3-ul">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="ideas-pillar idea-reveal">
                <span className="pillar-icon">{pillar.icon}</span>
                <span className="pillar-label">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Interests() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.interest-chip').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
              }, index * 90);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="interests" ref={ref}>
      <div className="interests-inner">
        <div className="section-header">
          <span className="section-label">/ outside of code</span>
          <h2 className="section-title">
            things that
            <br />
            <em>live in my head</em>
          </h2>
        </div>
        <div className="interests-chips">
          {items.map((item) => (
            <span key={item} className="interest-chip w3-tag">
              {item}
            </span>
          ))}
        </div>
        <p className="interests-note">always curious, rarely finished.</p>
      </div>
    </section>
  );
}
