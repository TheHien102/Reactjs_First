import React from 'react';
import styles from './about.module.css';
import book from '../../assets/Image/Company-amico.png';

export function PictureCompany() {
    return (
        <div>
            <figure className={styles.book}> 
                <img src={book} alt="Book" />
            </figure>
        </div>
    );
}

