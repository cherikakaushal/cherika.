import { useEffect, useRef } from 'react';

type Post = {
  title: string;
  desc: string | null;
};

const posts: Post[] = [
  {
    title: 'what happens when information becomes noise',
    desc: 'a field note from Signal vs Noise on bias, missing context, and fragile meaning.',
  },
  {
    title: 'systems fail gradually, then suddenly',
    desc: 'what When Systems Break taught me about drift, stress, and hidden failure modes.',
  },
  {
    title: 'why explainability matters more than accuracy',
    desc: 'thinking through research at IIT Ropar and why correct answers still need reasons.',
  },
  {
    title: 'research tools should reduce friction, not curiosity',
    desc: 'notes from ARPIS on reading, retrieval, and making dense papers easier to approach.',
  },
];

const notes = [
  'Noise is not always random. Sometimes it is structure we have not understood yet.',
  'A model can be accurate and still be unhelpful if no one can inspect why.',
  'Systems rarely break in one clean moment. They accumulate pressure first.',
];

export default function Writing() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.write-item').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
              }, index * 80);
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
    <section className="writing" id="writing" ref={ref}>
      <div className="writing-inner">
        <div className="section-header">
          <span className="section-label">/ writing</span>
          <h2 className="section-title">
            writing <em>/ thoughts /</em> chaos
          </h2>
        </div>

        <div className="writing-layout">
          <div className="write-list">
            {posts.map((post) => (
              <div key={post.title} className="write-item">
                <div className="write-meta">
                  <span className="write-type" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
                <div className="write-body">
                  <div className="write-title">{post.title}</div>
                  {post.desc && <div className="write-desc">{post.desc}</div>}
                </div>
                <span className="write-arrow">go</span>
              </div>
            ))}
          </div>

          <div className="quotes-col">
            <p className="quotes-label">/ research notes</p>
            {notes.map((note) => (
              <div key={note} className="quote-block write-item research-note">
                <p className="quote-text">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
