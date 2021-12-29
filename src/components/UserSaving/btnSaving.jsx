import React from 'react';
import styles from './saving.module.css';
import btnSaving from '../../assets/Image/Piggy bank-amico.png';
import btnWithdraw from '../../assets/Image/Bitcoin-amico.png';
import btnDeposit from '../../assets/Image/Wallet-bro.png';
import { useState } from 'react';
import { SaveMoneyBox } from './boxSaveMoney';
import { WithDrawMoneyBox } from './boxWithdraw';
import { BoxDeposit } from './boxDeposit';

export function ButtonSaving(props) {

    // const [show, setShow] = useState('displayNone');
    // function handlerDeposit(e) {
    //     console.log("click");
    //     setShow('display');
    // }

    const [showing, setShowing] = useState(false);
    const [typeBox, setTypeBox] = useState("withdraw");

    const handleWithdraw = (type) => {
        setTypeBox(type);
        setShowing(true);
    }

    const cancelBox = () => {
        setShowing(false);
    }

    return (
        <div className={styles.boxButton}>
            <div className={styles.btn}>
                <figure className={styles.btnSaving }>
                    <img src={btnWithdraw} alt="Button Withdraw" />
                </figure>
                <button onClick={() => handleWithdraw("withdraw")} className={styles.savingMoney}> Withdraw </button>
            </div>
            {
                typeBox === "withdraw" &&
                <WithDrawMoneyBox cancelBox={cancelBox} show={showing} />
            }
            {
                typeBox === "deposit" &&
                <BoxDeposit cancelBox={cancelBox} show={showing} />
            }
            {
                typeBox === "saving" &&
                <SaveMoneyBox cancelBox={cancelBox} show={showing} />
            }
            {/* <WithDrawMoneyBox show={showing} />
            <WithDrawMoneyBox show={showing} /> */}
            <div className={styles.btn}>
                <figure className={styles.btnSaving}>
                    <img src={btnDeposit} alt="Button Deposit" />
                </figure>
                <button onClick={() => handleWithdraw("deposit")} className={styles.savingMoney}> Deposit </button>
            </div>
            <div className={styles.btn}>
                <figure className={styles.btnSaving}>
                    <img src={btnSaving} alt="Button Saving" />
                </figure>
                <button onClick={() => handleWithdraw("saving")} className={styles.savingMoney}> Save money </button>
            </div>
        </div>
    );
}

