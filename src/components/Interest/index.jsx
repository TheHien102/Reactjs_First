import React from 'react';
import styles from './interest.module.css';
import { useEffect} from 'react';
import {src} from '../../test';

export function InterestBox() {

    useEffect(() => {
        initialData();
    }, [])

    const initialData = async () => {
        try {
                await fetch(src()+"/Welcome/Administrator/All_laisuat")
                .then(res => res.json())
                .then((result) => {
                    // setPercent(result);
                    
                    document.getElementById("1").innerHTML = Number((parseFloat(result[0].laisuat) * 12 * 100).toFixed(1));
                    document.getElementById("2").innerHTML = Number((parseFloat(result[2].laisuat) * 6 * 100).toFixed(1));
                    document.getElementById("3").innerHTML = Number((parseFloat(result[4].laisuat) * 4 * 100).toFixed(1));
                    document.getElementById("6").innerHTML = Number((parseFloat(result[5].laisuat) * 2 * 100).toFixed(1));
                    document.getElementById("9").innerHTML = Number((parseFloat(result[6].laisuat) / 9 *12 * 100).toFixed(1));
                    document.getElementById("12").innerHTML = Number((parseFloat(result[1].laisuat) *100).toFixed(1));
                    document.getElementById("24").innerHTML = Number((parseFloat(result[3].laisuat) / 2 * 100).toFixed(1));
                });
        } catch (e) {
            console.log(e);
            alert("Somethings went wrong with my website");
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.topic}> Interest Rate (%/year) </h2>
            <table className={styles.tableInterest}>
                    <tr>
                        <td className={styles.topicTable}>Term</td>
                        <td>1 m</td>
                        <td>2 m</td>
                        <td>3 m</td>
                        <td>6 m</td>
                        <td>9 m</td>
                        <td>12 m</td>
                        <td>24 m</td>
                    </tr>
                    <tr>
                        <td className={styles.topicTable}>Maturity interest</td>
                        <td className={styles.noneBorderTB}><span id="1">00 </span><br /></td>
                        <td className={styles.noneBorderTB}><span id="2">00 </span><br /></td>
                        <td className={styles.noneBorderTB}><span id="3">00 </span><br /></td>
                        <td className={styles.noneBorderTB}><span id="6">00 </span><br /></td>
                        <td className={styles.noneBorderTB}><span id="9">00 </span><br /></td>
                        <td className={styles.noneBorderTB}><span id="12">00</span><br /></td>
                        <td className={styles.noneBorderTB}><span id="24">00</span><br /></td>
                    </tr>
                    {/* )))} */}
                </table>
                <p className={styles.nonTerm}> Non-term interest rate: 0.1%</p>
        </div>
    );
}
