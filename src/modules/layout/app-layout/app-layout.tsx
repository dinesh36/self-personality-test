import styles from './app-layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react';

function AppLayout({children}: {children: React.ReactNode}) {
    return <div className={styles.app}>
        <Header/>
            <div className={styles.appContent}>
                {children}
            </div>
        <Footer/>
    </div>
}

export default AppLayout;
