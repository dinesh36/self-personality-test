import React from 'react';
import styles from './card.module.scss';


function Card({children, className}: {children: React.ReactNode, className?: string }) {
    return <div className={`${styles.card} ${className}`}>
        {children}
    </div>
}

export default Card;
