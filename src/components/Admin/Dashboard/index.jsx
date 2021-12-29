import React from 'react';
import styles from './dashboard.module.css';
import { useEffect, useState } from 'react';
import {src} from '../../../linkBE';

export function BoxDashboard() {

    const [dataTotal, setDataTotal] = useState("");
    const [saving, setSaving] = useState([]);

    let flag = false;
    let flag2 = false;

    if (document.getElementById("3monthMoney") === null) {
        flag2 = true;
        // console.log("cc");
    }
    useEffect(() => {
        fetch(src()+"/Welcome/Administrator/Stonk_Per_Period")
            .then(res => res.json())
            .then((result) => {
                setSaving(result);
                console.log(saving);
                console.log(result);
            }
            )
        for (let i = 0; i < saving.length; i++) {
            document.getElementById((saving[i][2]).toString()+"monthMoney").innerHTML = "$ "+ saving[i][0];
            if(saving[i][1] > 0) {
                document.getElementById((saving[i][2]).toString()+"monthPercent").innerHTML = "+" + Number((saving[i][1]).toFixed(2)) +"%";
                document.getElementById((saving[i][2]).toString()+"monthPercent").style.color = "#1BE247";
            }
            else {
                if(saving[i][1] === 0) {
                    document.getElementById((saving[i][2]).toString()+"monthPercent").innerHTML = "+" + Number((saving[i][1]).toFixed(2)) +"%";
                    document.getElementById((saving[i][2]).toString()+"monthPercent").style.color = "#FFE977";
                }
                else {
                    document.getElementById((saving[i][2]).toString()+"monthPercent").innerHTML = Number((saving[i][1]).toFixed(2)) +"%";
                    document.getElementById((saving[i][2]).toString()+"monthPercent").style.color = "#FF5F55";
                }
            }
        }
    }, [flag2])

    if (document.getElementById("numberCustomer") === null) {
        flag = true;
    }
    useEffect(() => {
        fetch(src()+"/Welcome/Administrator/AllUserStatus")
            .then(res => res.json())
            .then((result) => {
                setDataTotal(result);
                // let payment = Number((dataTotal[2]).toFixed(4));
                document.getElementById("numberCustomer").innerHTML = dataTotal[0];
                // document.getElementById("totalPayment").innerHTML =  Number((dataTotal[2]).toFixed(4));
                document.getElementById("totalPayment").innerHTML =  dataTotal[2];
                document.getElementById("totalSaving").innerHTML = dataTotal[1];

            }
            )
        flag2 = true;
    }, [saving])

    


    return (
        <div className={styles.container}>
            <h2 className={styles.dashboard}>Dashboard</h2>
            <div className={styles.boxFlex}>
                <div className={styles.boxTotal}>
                    <div className={styles.boxTotalPayment}>
                        <h4 className={styles.labelPayment}>Total Money Payment &nbsp;<i class={"fas fa-expand-alt" + " " + styles.iconZoom}></i></h4>
                        <p className={styles.totalMoney}>$ <span id="totalPayment">000000</span></p>
                        {/* <p className={styles.percentRise}>+12%</p> */}
                    </div>
                    <div className={styles.boxTotalPayment}>
                        <h4 className={styles.labelPayment}>Total Money Saving &nbsp;<i class={"fas fa-expand-alt" + " " + styles.iconZoom}></i></h4>
                        <p className={styles.totalMoney}>$ <span id="totalSaving">000000</span> </p>
                        {/* <p className={styles.percentRise}>+11%</p> */}
                    </div>
                    <div className={styles.boxTotalCustomer}>
                        <h4 className={styles.labelPayment}>Total Customers</h4>
                        <p className={styles.totalMoney} id="numberCustomer"> 0</p>
                        {/* <p className={styles.percentRise}>+7%</p> */}
                    </div>
                </div>
                {/* <div className={styles.boxChart}>
                    hehe
                </div> */}
                <div className={styles.boxSaving}>
                    <table className={styles.tablePayment}>
                        <tr className={styles.headerTable}>
                            <th className={styles.noneBorder} colSpan="3">Saving budget <br />(this Month compare to last Month)</th>
                        </tr>
                        <tr >
                            <th className={styles.noneBorder} id="1month">1 month</th>
                            <th className={styles.noneBorder} id="2month">2 month</th>
                            <th className={styles.noneBorder} id="3month">3 month</th>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder +" "+ styles.blue} id="1monthMoney">000000</td>
                            <td className={styles.noneBorder +" "+ styles.blue} id="2monthMoney">000000</td>
                            <td className={styles.noneBorder +" "+ styles.blue} id="3monthMoney">000000</td>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder} id="1monthPercent">0%</td>
                            <td className={styles.noneBorder} id="2monthPercent">0%</td>
                            <td className={styles.noneBorder} id="3monthPercent">0%</td>
                        </tr>
                        <tr >
                            <th className={styles.noneBorder} id="6month">6 month</th>
                            <th className={styles.noneBorder} id="9month">9 month</th>
                            <th className={styles.noneBorder} id="12month">12 month</th>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder +" "+ styles.blue} id="6monthMoney">000000</td>
                            <td className={styles.noneBorder +" "+ styles.blue} id="9monthMoney">000000</td>
                            <td className={styles.noneBorder +" "+ styles.blue} id="12monthMoney">000000</td>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder} id="6monthPercent">0%</td>
                            <td className={styles.noneBorder} id="9monthPercent">0%</td>
                            <td className={styles.noneBorder} id="12monthPercent">0%</td>
                        </tr>
                        <tr>
                            <th className={styles.noneBorder} colSpan="3" id="24month">24 month</th>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder +" "+ styles.blue} colSpan="3" id="24monthMoney">000000</td>
                        </tr>
                        <tr>
                            <td className={styles.noneBorder} colSpan="3" id="24monthPercent">0%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
