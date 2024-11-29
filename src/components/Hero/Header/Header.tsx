import styles from './header.module.scss';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <Nav />
    </header>
  )
};