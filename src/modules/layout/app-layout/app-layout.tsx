import React from 'react';
import { useSelector } from 'react-redux';
import styles from './app-layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { IRootStore } from '../../../store/store/store.type';

function AppLayout({ children }: {children: React.ReactNode}) {
  const mainTitle = useSelector((state: IRootStore) => state.layoutState.title);
  const renderLeftContent = () => (
    <div className={styles.leftContent}>
      {children}
    </div>
  );

  const renderRightContent = () => (
    <div className={styles.rightContent}>
      <div className={styles.adContent1}>
        <img src="images/home/ad/pepsi.gif" alt="ad" />
      </div>
      <div className={styles.adContent2}>
        <img src="images/home/ad/tesla.gif" alt="ad" />
      </div>
    </div>
  );

  const renderMainTitle = () => (
    <div className={styles.mainTitle}>
      {mainTitle}
    </div>
  );

  return (
    <div className={styles.app}>
      <Header />
      {renderMainTitle()}
      <div className={styles.appContent}>
        {renderLeftContent()}
        {renderRightContent()}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
