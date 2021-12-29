import React from 'react';
import styles from './saving.module.css';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import {src} from '../../test';
export function BoxDeposit(props) {

    const [recharge, setRecharge] = useState(0);
    const [showing, setShowing] = useState(false);
    const [showingOK, setShowingOK] = useState(true);
    var ngaygui = new Date();
    var dd = String(ngaygui.getDate()).padStart(2, '0');
    var mm = String(ngaygui.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = ngaygui.getFullYear();

    ngaygui = yyyy + '-' + mm + '-' + dd;
    const [state, setState] = useState(0);
    let sotien = state;

    function handlePayPal() {
        setShowing(true);
        setShowingOK(false);
    }

    function handleCash() {
        setShowingOK(true);
        setShowing(false);
    }

    function handleRecharge() {
        let sotien = recharge;

        let acc_id = localStorage.getItem("acc_id");
        let data = {sotien, acc_id};
        fetch(src()+"/Welcome/UserArea/Deposit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Recharge money complete");
            window.location.reload();
        })
    }
    return (
        <>
            {
                props.show && <div className={styles.boxDeposit} id={styles.boxDeposit}>
                    <div className={styles.boxBalance}>
                        <h3 className={styles.h__saveMoney}>DEPOSIT</h3>
                        <div className={styles.choose}>
                            <div className={styles.iconWallet}><i class="fas fa-money-bill-wave fa-3x"></i></div>
                            <div className={styles.iconPayPal}><i class="fab fa-cc-paypal fa-3x"></i></div>
                            <RadioGroup className={styles.bold} row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="1" control={<Radio />} label="" onFocus={handleCash}  defaultChecked/>
                                <FormControlLabel value="2" control={<Radio />} label="" onFocus={handlePayPal}/>
                            </RadioGroup>
                        </div>
                        {showingOK && <input className={styles.amountMoneyWithDraw} type="number" id="getMoneyDraw" name="MoneyDraw" value={recharge} onChange={(e) => setRecharge(e.target.value)}></input>}
                        {showing && <div className={styles.btnPayPal}>
                            <input
                                className={styles.paypalInput}
                                type="number"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <PayPalButton
                                options={{
                                    clientId: "ATGpPGM0Hnr4F3_edA7uJUHX0hSUGMB3_JqCy4Ec7BYF-V5CYq0enbsC9Wzfy-8imgIHTedjsf2qNqlz",
                                    currency: "USD",
                                }}
                                amount={state}
                                onSuccess={(details, data) => {
                                    // alert("Transaction completed by " + details.payer.name.given_name);
                                    let acc_id = localStorage.getItem("acc_id");
                                    let dataMoney = { sotien, acc_id, ngaygui };

                                    fetch(src()+"/Welcome/UserArea/Deposit", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(dataMoney)
                                    }).then(() => {
                                        console.log("Save money complete");
                                        window.location.reload();
                                    })
                                }}
                            />
                        </div>
                        }
                    </div>
                    <div className={styles.boxDecision}>
                        {showingOK && <button className={styles.btnOK} onClick={handleRecharge}> OK </button>}
                        <button onClick={() => props.cancelBox()} className={styles.btnCancel}> Cancel </button>
                    </div>


                </div>
            }
        </>
    );
}

