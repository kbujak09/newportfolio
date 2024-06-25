import styles from './main.module.scss';
import Name from './Name/Name';
import Typewriter from './Typewriter/Typewriter';

export default function Main() {

  const text = 
`function Hello() {
  return (
    <h1>
      Hello World!
    </h1>
  );
};`

  return (
    <main className={styles.container}>
      <Typewriter text={text} speed={75}/>
      <Name />
    </main>
  )
};