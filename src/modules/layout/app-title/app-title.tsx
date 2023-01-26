import styles from './app-title.module.scss';

function AppTitle() {
    return <div className={styles.appTitle}>
        <span>
            SELF&nbsp;
        </span>
        <span className={styles.primaryColor}>
            PERSONALITY&nbsp;
        </span>
        <span>
            TEST
        </span>
    </div>;
}

export default AppTitle;
