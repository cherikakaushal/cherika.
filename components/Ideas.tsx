import { useEffect, useRef, useState } from 'react';

const pillars = [
  { icon: 'm', label: 'marketing' },
  { icon: 's', label: 'software' },
  { icon: 'p', label: 'products' },
  { icon: 't', label: 'storytelling' },
  { icon: 'u', label: 'user psychology' },
  { icon: 's', label: 'systems' },
];

const questions = [
  {
    question: 'Why do systems fail gradually before they fail visibly?',
    answer: [
      "Most failures aren't events.",
      "They're processes.",
      'By the time a system visibly breaks, it has usually been accumulating small errors for a long time.',
      "I'm interested in what happens before the collapse.",
    ],
  },
  {
    question: 'How much distortion can information survive?',
    answer: [
      'A message rarely disappears all at once.',
      'Context is removed.',
      'Bias is introduced.',
      'Noise accumulates.',
      'At what point does information stop being information?',
      "That's the question behind Signal vs Noise.",
    ],
  },
  {
    question: 'Can explainability tell us more than accuracy ever will?',
    answer: [
      'A model can be correct for the wrong reasons.',
      'Understanding why a prediction happened often matters more than the prediction itself.',
      'Especially when people are involved.',
    ],
  },
  {
    question: 'Why are some interfaces instantly understandable?',
    answer: [
      "The best interfaces don't feel designed.",
      'They feel obvious.',
      "I'm fascinated by the intersection of psychology, design, and information flow.",
    ],
  },
  {
    question: 'Why do near-failures teach more than successes?',
    answer: [
      'Success often hides assumptions.',
      'Failure exposes them.',
      'The most interesting lessons usually come from systems that almost worked.',
    ],
  },
  {
    question: 'What am I still missing?',
    answer: [
      'Probably quite a lot.',
      "That's why the questions stay longer than the answers.",
    ],
  },
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
              I&apos;ve worked on software.
            </p>
            <p className="dim idea-reveal">
              I&apos;ve worked on marketing.
            </p>
            <p className="idea-reveal">
              I&apos;ve worked on ideas.
            </p>
            <p className="dim idea-reveal">
              somewhere along the way, I realized all three are really about understanding people.
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
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.question-item').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
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
          <span className="section-label">/ questions i&apos;m exploring</span>
          <h2 className="section-title">
            some answers.
            <br />
            <em>mostly better questions.</em>
          </h2>
        </div>
        <div className="questions-list">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index;
            const number = String(index + 1).padStart(2, '0');

            return (
              <article key={item.question} className={`question-item${isOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className="question-trigger"
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="question-number">{number}</span>
                  <span className="question-title">{item.question}</span>
                  <span className="question-action">{isOpen ? 'collapse' : 'expand'} &rarr;</span>
                </button>
                {isOpen && (
                  <div className="question-answer">
                    {item.answer.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <p className="interests-note">research is mostly learning how to ask better questions.</p>
      </div>
    </section>
  );
}
