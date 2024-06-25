import styles from './about.module.scss';

export default function About({text}: {text: string}) {
  return (
    <section className={styles.container} id="about">
      <h1 className='title'>O MNIE</h1>
      <div className={styles.text}>{text}</div>
    </section>
  );
};