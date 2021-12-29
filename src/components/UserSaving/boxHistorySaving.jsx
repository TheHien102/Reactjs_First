import React from 'react';
import styles from './saving.module.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import {src} from '../../linkBE';

export function BoxHistorySaving(props) {
    let flag = false;
    if (props.show === true) {
        flag = true;
    }

    let id1 = localStorage.getItem("acc_id");
    let id2 = parseInt(id1);
    const [data1, setData1] = useState([]);
    let tuyChon = ["Nạp TK", "Rút TK", "Gửi TK"];
    let test1 = [];
    // const [test1, setTest1] = useState([]);
    const [fil1, setFil1] = useState([]);

    
    useEffect(() => {
        initialData1();

        //Transfer data
        // fetch(src()+"/Welcome/UserArea/My_Transaction_History")
        //     .then(res => res.json())
        //     .then((result) => {
        //         setData(result);
        //     })
        test1 = data1;
        // setTest1(data1);
        // console.log(test1);
        // if (test1.length === 0) {
        //     // initialData1();
        //     alert("Vui lòng tắt mở lại để xem nội dung!!!");
        //     test1 = data1;

        // }
        for (let i = 0; i < test1.length; i++) {
            if (test1[i].acc_id !== id2) {
                delete test1[i];
            }
        }

        var filtered1 = test1.filter(function (el) {
            return el != null;
        });
        setFil1(filtered1);
        // //Clean code
        // // POST request using axios inside useEffect React hook
        // // const article = { title: 'React Hooks POST Request Example' };
        // axios.post('http://localhost:8080/Welcome/UserArea/CheckMy_Saving_tk', {acc_id:"11"})
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.data);
        //     });
    }, [flag])

    const initialData1 = async () => {
        try {
            await fetch(src()+"/Welcome/UserArea/My_Transaction_History")
                .then(res1 => res1.json())
                .then((result1) => {
                    setData1(result1);
                });
        } catch (e) {
            console.log(e);
            alert("Somethings went wrong with my website");
        }
    }

    return (
        <>
            {
                props.show && <div className={styles.boxListSaving}>
                    <button className={styles.exit} onClick={() => props.cancel()}>X</button>
                    <table className={styles.tableSaving}>
                        <tr className={styles.headerTable}>
                            <th className={styles.noneBorderLR}>STT</th>
                            <th className={styles.noneBorderLR}>Số tiền($)</th>
                            <th className={styles.noneBorderLR}>Ngày giao dịch</th>
                            <th className={styles.noneBorderLR}>Loại giao dịch</th>
                        </tr>
                        {fil1.map(((item) => (
                            <tr key={item.lichsu_id}>
                                <td className={styles.noneBorderLR}>{fil1.indexOf(item) + 1}</td>
                                <td className={styles.noneBorderLR}>{item.sotiengiaodich}</td>
                                <td className={styles.noneBorderLR}>{item.ngay}</td>
                                <td className={styles.noneBorderLR}>{tuyChon[parseInt(item.hinhthuc) - 1]}</td>
                            </tr>
                        )))}

                    </table>
                </div>
            }
        </>
    );
}

