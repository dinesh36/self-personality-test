import styles from './header.module.scss';
import AppTitle from '../app-title/app-title';

function Header() {
  return (
    <div className={styles.header}>
      <AppTitle />
    </div>
  );
}

export default Header;
