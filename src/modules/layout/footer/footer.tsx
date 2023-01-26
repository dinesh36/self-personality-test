import styles from './footer.module.scss';
import AppTitle from "../app-title/app-title";

function Footer() {
    const renderCopyRightText = ()=>{
        return <div>
            Self Personality Test
        </div>
    }

    const renderFooterIcon = ()=>{
        const icons = ['twitter', 'facebook', 'instagram', 'youtube'];
        return <div className={styles.footerIcons}>
            {icons.map((iconName)=>{
                return <img  className={styles.footerIcon}  src={`/images/footer/${iconName}.svg`} alt={iconName}/>;
            })}
        </div>
    }

    return <div className={styles.footer}>
        <AppTitle />
        {renderFooterIcon()}
        {renderCopyRightText()}
    </div>
}

export default Footer;
