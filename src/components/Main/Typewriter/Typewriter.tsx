import styles from './typewriter.module.scss';
import useTypewriter from '../../../hooks/useTypewriter';

type typewriterProps = {
  text: string,
  speed: number
};

export default function Typewritter({text, speed}: typewriterProps) {

  const displayedText = useTypewriter(text, speed);

  return (
    <pre className={styles.container}>
      {displayedText}
    </pre>
  );
};