import { useState, useEffect, useRef, MutableRefObject } from "react";

export default function useInView(): [MutableRefObject<HTMLElement | null>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setInView(
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      )
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });
  
  return [ref, inView];
};