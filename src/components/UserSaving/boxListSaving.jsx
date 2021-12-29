import React from 'react';
import styles from './saving.module.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import {src} from '../../test';

export function BoxListSaving(props) {
    let flag = false;
    if (props.show === true) {
        flag = true;
    }
    // console.log(flag);
    // else {
    //     flag = false;
    // }
    let id1 = localStorage.getItem("acc_id");
    let id2 = parseInt(id1);
    const [data, setData] = useState([]);
    let tuyChon = ["Tái tục", "Tất toán"];
    let test = [];
    // const [test, setTest] = useState([]);
    const [fil, setFil] = useState([]);

    useEffect(() => {
        initialData();

        test = data;
        // setTest(data);
        for (let i = 0; i < test.length; i++) {
            if (test[i].acc_id !== id2) {
                delete test[i];
            }
        }

        var filtered = test.filter(function (el) {
            return el != null;
        });
        setFil(filtered);
        // console.log(fil);
        // //Clean code
        // // POST request using axios inside useEffect React hook
        // // const article = { title: 'React Hooks POST Request Example' };
        // axios.post('http://localhost:8080/Welcome/UserArea/CheckMy_Saving_tk', {acc_id:"11"})
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.data);
        //     });
    }, [flag])

    const initialData = async () => {
        try {
            await fetch(src()+"/Welcome/UserArea/CheckMy_Saving_tk")
                .then(res => res.json())
                .then((result) => {
                    setData(result);
                });
        } catch (e) {
            console.log(e);
            alert("Somethings went wrong with my website");
        }
    }

    const handleIconWithdraw = (data1) => {
        // alert(data1);
        let string = {"id": data1}
        // console.log(string);
        fetch(src()+"/Welcome/UserArea/Cancel_Saving", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(string)
        }).then(() => {
            alert("Withdraw Money Complete!!!")
        })
        // window.location.reload();
        setTimeout(() => {window.location.reload()}, 1000);
    }
    

    return (
        <>
            {
                props.show && <div className={styles.boxListSaving}>
                    <button className={styles.exit} onClick={() => props.cancel()}>X</button>
                    <table className={styles.tableSaving}>
                        <tr className={styles.headerTable}>
                            <th className={styles.noneBorderLR}>STT</th>
                            <th className={styles.noneBorderLR}>STK</th>
                            <th className={styles.noneBorderLR}>Kỳ hạn(month)</th>
                            <th className={styles.noneBorderLR}>Số tiền($)</th>
                            <th className={styles.noneBorderLR}>Ngày gửi</th>
                            <th className={styles.noneBorderLR}>Ngày đáo hạn</th>
                            <th className={styles.noneBorderLR}>Tùy chọn</th>
                            {/* <th className={styles.noneBorderLR}>Tùy chọn</th> */}
                            <th className={styles.noneBorderLR}></th>
                        </tr>
                        {fil.map(((item) => (
                            <tr key={item.id}>
                                <td className={styles.noneBorderLR}>{fil.indexOf(item) + 1}</td>
                                <td className={styles.noneBorderLR}>{item.sotaikhoan}</td>
                                <td className={styles.noneBorderLR}>{item.kyhan}</td>
                                {/* <td className={styles.noneBorderLR}>{item.id}</td> */}
                                <td className={styles.noneBorderLR}>{item.sotien}</td>
                                <td className={styles.noneBorderLR}>{item.ngaygui}</td>
                                <td className={styles.noneBorderLR}>{item.ngaydaohan}</td>
                                <td className={styles.noneBorderLR}>{tuyChon[parseInt(item.tuychon) - 1]}</td>
                                <td className={styles.noneBorderLR}><i className={"fas fa-hand-holding-usd" + " " + styles.iconWithdraw} onClick={() => handleIconWithdraw(item.id)}></i></td>
                            </tr>
                        )))}
                    </table>
                </div>
            }
        </>
    );
}

