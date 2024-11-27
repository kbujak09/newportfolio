import styles from './about.module.scss';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledDown(entry.intersectionRatio >= 0.5);
      },
      {
        threshold: [0.5],
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      };
    };
  }, []);

  return (
    <section 
      ref={ref} 
      className={`${styles.container} ${isScrolledDown ? styles.whiteBg : null}`} 
      id="about">
      O MNIE
    </section>
  );
};