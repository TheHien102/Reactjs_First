import React from 'react';
import styles from './picture.module.css';
import picture from '../../assets/Image/Growth curve-pana.png';

export function MainPicture() {

    return (
        <figure className={styles.image}>
            <img src={picture} alt="Main Picture" />
        </figure>
    );
}
