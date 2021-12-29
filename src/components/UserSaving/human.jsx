import React from 'react';
import styles from './saving.module.css';
import saving from '../../assets/Image/Currency-bro.png';

export function PictureSaving() {
    return (
        <div>
            <figure className={styles.saving}> 
                <img src={saving} alt="Human Saving" />
            </figure>
        </div>
    );
}

