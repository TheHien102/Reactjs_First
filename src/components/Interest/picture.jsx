import React from 'react';
import styles from './interest.module.css';
import pic from '../../assets/Image/Invoice-pana.png';
import coin from '../../assets/Image/Coins-amico.png';
export function Picture() {
    return (
        <div>
            <figure className={styles.person}> 
                <img src={pic} alt="Picture" />
            </figure>
            <figure className={styles.coin}> 
                <img src={coin} alt="Coin" />
            </figure>
        </div>
    );
}

