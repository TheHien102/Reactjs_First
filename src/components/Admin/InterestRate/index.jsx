import React from 'react';
import styles from './interestRate.module.css';
import { useEffect, useState } from 'react';
import {src} from '../../../linkBE';

export function BoxInterestRate() {

    const [showing, setShowing] = useState(false);
    const [input, setInput] = useState("");
    const [kyhan, setKyhan] = useState(0);

    function handleEdit(num) {
        setShowing(true);
        alert("Edit ky han "+num);
        setKyhan(num);
    }

    function handleUserInput(e) {
        setInput(e.target.value);
    }

    function handleSave() {
        let formatData1 = {"laisuat": input, "kyhan": kyhan};
        // console.log(formatData1);
        fetch(src()+"/Welcome/Administrator/Change_laisuat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formatData1)
        }).then(() => {
            console.log("Edit percent complete")
        })
        window.location.reload();
    }

    useEffect(() => {
        initialData();

        // fetch(src()+"/Welcome/Administrator/All_laisuat")
        //     .then(res => res.json())
        //     .then((result) => {
        //         setPercent(result);
        //     })
        console.log(document.getElementById("1").innerHTML);

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
        <div className={styles.containerPage}>
            <h2 className={styles.topic}> Interest rate </h2>
            <div className={styles.container}>
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
                        <td className={styles.noneBorderTB}><span id="1">00 </span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(1)}></i></td>
                        <td className={styles.noneBorderTB}><span id="2">00 </span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(2)}></i></td>
                        <td className={styles.noneBorderTB}><span id="3">00 </span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(3)}></i></td>
                        <td className={styles.noneBorderTB}><span id="6">00 </span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(6)}></i></td>
                        <td className={styles.noneBorderTB}><span id="9">00 </span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(9)}></i></td>
                        <td className={styles.noneBorderTB}><span id="12">00</span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(12)}></i></td>
                        <td className={styles.noneBorderTB}><span id="24">00</span><br /><i className={"fas fa-edit "} onClick={()=>handleEdit(24)}></i></td>
                    </tr>
                    {/* )))} */}
                </table>
                <p className={styles.nonTerm}> Non-term interest rate: 0.1%</p>
            </div>
            <div className={styles.boxConfirm}>
                {showing && <div className={styles.groupBtn}>
                    <input type="number" className={styles.inputNum} step="0.1" onChange={handleUserInput} /> <br />
                    <button className={styles.btnSave} onClick={handleSave}>Save <i class="far fa-check-circle fa-1x"></i></button>
                    <button className={styles.btnCancel} onClick={() => { setShowing(false) }}>Cancel <i class="fas fa-ban fa-1x"></i></button>
                </div>}
            </div>
        </div>
    );
}
