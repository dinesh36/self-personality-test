import Link from 'next/link';
import styles from './footer.module.scss';
import AppTitle from '../app-title/app-title';

function Footer() {
  const renderWritterInfo = () => (
    <div>
      dinesh36@github
    </div>
  );

  const renderFooterIcon = () => {
    const icons = ['twitter', 'facebook', 'instagram', 'youtube'];
    return (
      <div className={styles.footerIcons}>
        {icons.map((iconName) => <img className={styles.footerIcon} src={`/images/footer/${iconName}.svg`} alt={iconName} />)}
      </div>
    );
  };

  return (
    <Link href="/">
      <div className={styles.footer}>
        <AppTitle />
        {renderFooterIcon()}
        {renderWritterInfo()}
      </div>
    </Link>
  );
}

export default Footer;
