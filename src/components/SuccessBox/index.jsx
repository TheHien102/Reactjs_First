import React from 'react';
import styles from './success.module.css';
import icon from '../../assets/Image/pngaaa.com-140349.png';

export function SuccessBox() {

    return (
        <div className={styles.boxSuccess}>
            <p className={styles.success}>Successfull</p>
            <figure className={styles.image}>
                <img src={icon} alt="Icon Successfull" />
            </figure>
        </div>
    );
}
