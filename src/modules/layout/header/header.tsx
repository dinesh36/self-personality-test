import Link from 'next/link';
import styles from './header.module.scss';

function Header() {
  const renderLogo = () => (
    <img className={styles.logo} src="images/header/header-logo.png" alt="logo" />
  );

  const renderTitle = () => <div className={styles.title}>Self Personality Test</div>;

  return (
    <Link href="/">
      <div className={styles.header}>
        {renderLogo()}
        {renderTitle()}
      </div>
    </Link>
  );
}

export default Header;
