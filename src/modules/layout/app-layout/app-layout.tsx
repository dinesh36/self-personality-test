import styles from './app-layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react';

function AppLayout({children}: {children: React.ReactNode}) {

    const renderLeftContent = () => {
        return <div className={styles.leftContent}>
            {children}
        </div>
    }


    const renderRightContent = () => {
        return <div className={styles.rightContent}>
            <div className={styles.adContent1}>
                <img src={'images/home/ad/pepsi.gif'}/>
            </div>
            <div className={styles.adContent2}>
                <img src={'images/home/ad/tesla.gif'}/>
            </div>
        </div>
    }


    return <div className={styles.app}>
        <Header/>
            <div className={styles.appContent}>
                {renderLeftContent()}
                {renderRightContent()}
            </div>
        <Footer/>
    </div>
}

export default AppLayout;
