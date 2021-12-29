import React from 'react';
import styles from './saving.module.css';
import { useEffect, useState } from 'react';
import {src} from '../../test';


export function WithDrawMoneyBox(props) {
    let flag = props.show;
    const [withdraw, setWithdraw] = useState(0);

    useEffect(() => {
        if (document.getElementById("tienWithdraw") !== null) {
            document.getElementById("tienWithdraw").innerHTML = localStorage.getItem("sotien");
        }
    }, [flag])

    function handleWithdraw() {
        if ( parseInt(withdraw) <= parseInt(localStorage.getItem("sotien"))) {
            let sotienrut = withdraw;

            let acc_id = localStorage.getItem("acc_id");
            let data = { sotienrut, acc_id };
            fetch(src()+"/Welcome/UserArea/Withdraw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                console.log("Withdraw money complete");
                setTimeout(() => {window.location.reload()}, 1000);
            })
        }
        else {
            alert("Số tiền bạn rút lớn hơn số dư bạn có!");
        }
    }

    return (
        <>
            {
                props.show && <div className={styles.boxWithdraw}>
                    <div className={styles.boxBalance}>
                        <h3 className={styles.h__saveMoney}>WITHDRAW</h3>
                        <p className={styles.accountBalance}> Account Balance:</p>
                        <p className={styles.moneyBalance}> <span id="tienWithdraw"> 0000 </span> $</p>
                        {/* <h3 className={styles.amountMoney}>$ 1,500</h3> */}
                        <input className={styles.amountMoneyWithDraw} type="number" id="getMoneyDraw" name="MoneyDraw" value={withdraw} onChange={(e) => setWithdraw(e.target.value)}></input>
                    </div>
                    <div className={styles.boxDecision}>
                        <button className={styles.btnOK} onClick={handleWithdraw}> OK </button>
                        <button onClick={() => props.cancelBox()} className={styles.btnCancel}> Cancel </button>
                    </div>
                </div>
            }
        </>
    );
}

