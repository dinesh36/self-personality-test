import React from 'react';
import { Button as AntdButton } from 'antd';
import styles from './button.module.scss';

function Button({children, className, ...props}: {children: React.ReactNode, className: string}) {
    return <AntdButton {...props} className={`${styles.button} ${className}`}>
        {children}
    </AntdButton>
}

export default Button;
