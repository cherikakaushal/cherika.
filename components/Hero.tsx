import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll<HTMLElement>('.hero-anim');
    elements?.forEach((element, index) => {
      element.style.animationDelay = `${0.2 + index * 0.15}s`;
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-inner w3-container">
        <p className="hero-eyebrow hero-anim">cherika kaushal</p>
        <h1 className="hero-name hero-anim">
          trying to make
          <br />
          sense of <em>systems</em>
        </h1>
        <p className="hero-tagline hero-anim">(they disagree)</p>
        <p className="hero-current hero-anim">
          Research Intern @ IIT Ropar / Studying how systems behave, fail, and adapt.
        </p>
        <p className="hero-chips hero-anim">
          code <span>-</span> creativity <span>-</span> curiosity <span>-</span> chaos
        </p>
        <p className="hero-sub hero-anim">sometimes they work. mostly they don&apos;t.</p>
        <div className="hero-buttons hero-anim">
          <a href="#work" className="btn btn-primary">
            view work
          </a>
          <a href="#writing" className="btn btn-ghost">
            read writing
          </a>
          <a
            href="https://github.com/cherikakaushal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/cherika-kaushal-4b9b8b30b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            linkedin
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-text">scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
