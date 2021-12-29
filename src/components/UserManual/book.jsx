import React from 'react';
import styles from './manual.module.css';
import book from '../../assets/Image/Instruction manual-cuate.png';

export function PictureBookGuide() {
    return (
        <div>
            <figure className={styles.book}> 
                <img src={book} alt="Book" />
            </figure>
        </div>
    );
}

