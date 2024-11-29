import styles from './hero.module.scss';

import { ReactNode, useEffect, useState, useRef } from 'react';

type HeroProps = {
  children: ReactNode
}

export default function Hero ({children}: HeroProps) {
  const [isInView, setIsInView] = useState<boolean>(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.4) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      };
    };
  }, []);

  return (
    <div 
      className={`${styles.container} ${isInView ? styles.none : null}`}
      ref={heroRef}>
      {children}
    </div>
  );
};