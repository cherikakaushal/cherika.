import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Intro() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((element, index) => {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('intro-polaroid')
                  ? 'translateY(0) rotate(-2deg)'
                  : 'translateY(0)';
              }, index * 160);
            });
          }
        });
      },
      { threshold: 0.25 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" ref={ref}>
      <div className="intro-inner">
        <div className="intro-side">
          <div className="intro-label">/ intro</div>
          <figure className="intro-polaroid reveal">
            <Image
              src="/editorial-polaroid.jpg"
              alt="Small editorial illustration"
              width={450}
              height={338}
              sizes="(max-width: 520px) 76vw, 15rem"
            />
            <figcaption>field note / still figuring things out</figcaption>
          </figure>
        </div>
        <div className="intro-text">
          <p className="intro-line reveal">
            I build things, break them, and try to understand what went wrong.
          </p>
          <p className="intro-line dim reveal">
            sometimes it&apos;s code, sometimes it&apos;s systems, sometimes it&apos;s just me thinking too much.
          </p>
          <p className="intro-line reveal">
            somewhere between logic and chaos, I&apos;m figuring things out.
          </p>
        </div>
      </div>
    </section>
  );
}
