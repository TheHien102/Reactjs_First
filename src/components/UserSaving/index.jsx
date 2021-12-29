import React from 'react';
import styles from './saving.module.css';
import avatar from '../../assets/Image/avatar1.png';
import { useEffect, useState } from 'react';
// import { getUserArea } from '../../services/userService';
import { BoxListSaving } from './boxListSaving';
import { BoxHistorySaving } from './boxHistorySaving';
import {src} from '../../linkBE';

export function UserSavingBox() {

    const [customers, setCustomers] = useState([[]]);
    const [showing, setShowing] = useState(false);
    const [typeBox, setTypeBox] = useState("listSaving");

    useEffect(() => {
        // initialData();
        // })
        fetch(src()+"/Welcome/UserArea")
            .then(res => res.json())
            .then((result) => {
                setCustomers(result);
            })
    }, [])

    // // Toi uu code
    // const initialData = async () => {
    //     try {
    //         result = await getUserArea();
    //         console.log(result);
    //         // setCustomers(result);

    //     } catch (e) {
    //         console.log(e);
    //         alert("Somethings went wrong with my website");
    //     }
    // }

    // console.log(customers);
    // j index =0 tra ve thong tin ca chan
    // j index =1 tra ve thong tin tai khoan tiet kiem
    let name = "User";
    let stk = "00000";
    let tien = 0;
    if (localStorage.getItem("account") !== null) {
        for (let i = 0; i < customers.length; i++) {
            for (let j = 0; j < customers[i].length; j++) {
                if (localStorage.getItem("account") === customers[i][0].taikhoan) {
                    name = customers[i][0].ten;
                    stk = customers[i][2].sotaikhoan;
                    tien = customers[i][2].sotien;
                    tien = Number((tien).toFixed(4));
                    localStorage.setItem("sotien", tien);
                    localStorage.setItem("stk", stk);
                    document.getElementById("name").innerHTML = name;
                    document.getElementById("stk").innerHTML = stk;
                    document.getElementById("tien").innerHTML = tien;
                    break;
                }
            }
        }
    }

    const handleListSaving = (type) => {
        setTypeBox(type);
        setShowing(true);
        
    }

    const cancel = () => {
        setShowing(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.boxInfo}>
                <figure className={styles.avatar}> <img src={avatar} alt="Avatar" /> </figure>
                <h2 className={styles.topic}> Hi! <span id="name"> User </span> </h2>
                <button className={styles.savingList} onClick={() => handleListSaving("listSaving")}> <i class="fa fa-piggy-bank"></i> &nbsp; Savings Account List </button>
                {
                    typeBox === "listSaving" &&
                    <BoxListSaving cancel={cancel} show={showing} />
                }
                <button className={styles.historyList} onClick={() => handleListSaving("historySaving")}> <i class="fas fa-history"></i> &nbsp; History Transactions </button>
                {
                    typeBox === "historySaving" &&
                    <BoxHistorySaving cancel={cancel} show={showing} />
                }
                <p className={styles.accountNumber}> <i class="fa fa-credit-card"></i> Account Number: </p>
                <p className={styles.numberDetail}> <span id="stk"> 00000000000 </span>  </p>
                <p className={styles.accountBalance}> <i class="fas fa-dollar-sign"></i> Account Balance: </p>
                <p className={styles.balanceDetail}> <span id="tien"> 1000 </span>  </p>
            </div>
        </div>
    );
}

