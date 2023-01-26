import React from 'react';
import { Button as AntdButton } from 'antd';
import styles from './button.module.scss';

function Button({children, ...props}: {children: React.ReactNode}) {
    return <AntdButton {...props} className={styles.button}>
        {children}
    </AntdButton>
}

export default Button;
