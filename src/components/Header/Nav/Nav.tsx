import styles from './nav.module.scss';

import NavItem from './NavItem/NavItem';

export default function Nav() {
  return (
    <nav className={styles.container}>
      <NavItem value='O MNIE'/>
      <NavItem value='PROJEKTY'/>
      <NavItem value='KONTAKT'/>
    </nav>
  )
};
