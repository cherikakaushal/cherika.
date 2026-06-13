import { useMemo, useState } from 'react';

const interests = ['Explainable AI', 'System Reliability', 'Information Degradation', 'Human-Centered ML'];
const investigations = ['Signal vs Noise', 'When Systems Break'];

const observations = [
  {
    title: 'Noise Injection',
    note: 'semantic structure remains visible until token corruption crosses the first threshold.',
    values: [92, 84, 73, 58, 41, 29],
  },
  {
    title: 'Threshold Collapse',
    note: 'small perturbations accumulate quietly, then degrade confidence all at once.',
    values: [95, 93, 88, 79, 44, 18],
  },
  {
    title: 'Bias Amplification',
    note: 'missing context lets weak priors become stronger than observed signal.',
    values: [22, 31, 48, 64, 79, 88],
  },
  {
    title: 'System Recovery',
    note: 'redundant context improves reconstruction after partial information loss.',
    values: [18, 34, 49, 63, 76, 86],
  },
];

const labSteps = [
  {
    score: 0.91,
    output: 'Machine learning systems require quality data.',
    bars: [91, 86, 78, 70],
  },
  {
    score: 0.73,
    output: 'Machine systems require quality data.',
    bars: [73, 62, 50, 43],
  },
  {
    score: 0.41,
    output: 'Machine systems quality data.',
    bars: [41, 34, 28, 19],
  },
  {
    score: 0.18,
    output: 'Machine quality.',
    bars: [18, 14, 10, 7],
  },
];

export default function Research() {
  const [noiseLevel, setNoiseLevel] = useState(0);
  const activeStep = labSteps[noiseLevel];

  const chartPath = useMemo(() => {
    const points = activeStep.bars.map((value, index) => `${index * 34 + 8},${96 - value}`);
    return points.join(' ');
  }, [activeStep.bars]);

  const injectNoise = () => {
    setNoiseLevel((level) => (level + 1) % labSteps.length);
  };

  return (
    <section className="research" id="research">
      <div className="research-inner">
        <div className="section-header">
          <span className="section-label">/ research</span>
          <h2 className="section-title">
            research
            <br />
            <em>systems under pressure</em>
          </h2>
        </div>

        <div className="research-brief">
          <div>
            <p className="research-year">2026 - IIT Ropar</p>
            <p className="research-copy">
              Studying how machine learning systems behave when information becomes noisy,
              incomplete, biased, or difficult to explain.
            </p>
          </div>
          <div className="research-lists">
            <div>
              <p className="research-list-label">Current interests</p>
              <ul>
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="research-list-label">Current investigations</p>
              <ul>
                {investigations.map((investigation) => (
                  <li key={investigation}>{investigation}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="observations">
          <div className="observations-head">
            <p className="research-list-label">observations</p>
            <p className="observations-note">small experiment traces from noise, bias, collapse, and recovery.</p>
          </div>
          <div className="observation-grid">
            {observations.map((observation) => (
              <article key={observation.title} className="observation-card">
                <div className="observation-chart" aria-hidden="true">
                  {observation.values.map((value, index) => (
                    <span
                      key={`${observation.title}-${value}-${index}`}
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
                <div>
                  <h3>{observation.title}</h3>
                  <p>{observation.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="signal-lab">
          <div className="lab-copy">
            <p className="research-list-label">Signal vs Noise Lab</p>
            <h3>inject noise into a clean sentence</h3>
            <p>
              A small live experiment showing how meaning degrades as context is removed from a
              stable input.
            </p>
          </div>

          <div className="lab-panel">
            <div className="lab-row">
              <span>input</span>
              <p>Machine learning systems require quality data.</p>
            </div>
            <div className="lab-row output">
              <span>output</span>
              <p>{activeStep.output}</p>
            </div>
            <div className="lab-score">
              <span>similarity score</span>
              <strong>{activeStep.score.toFixed(2)}</strong>
            </div>
            <svg className="lab-graph" viewBox="0 0 120 100" role="img" aria-label="Similarity graph">
              <polyline points={chartPath} />
            </svg>
            <button type="button" className="lab-button" onClick={injectNoise}>
              Inject Noise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
