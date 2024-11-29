import styles from './name.module.scss';

export default function Name() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        KACPER BUJAK
      </div>
      <div className={styles.title}>
        WEB DEVELOPER
      </div>
    </div>
  )
};