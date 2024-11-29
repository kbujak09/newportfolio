import styles from './navItem.module.scss';

type NavItemProps = {
  value: string
}

export default function NavItem({value}: NavItemProps) {
  return (
    <div className={styles.text}>
      {value}
    </div>
  )
}
