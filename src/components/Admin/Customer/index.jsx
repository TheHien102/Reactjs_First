import React from 'react';
import styles from './customer.module.css';
import { useEffect, useState } from 'react';
// import {src} from '../../test';
import {src} from '../../../linkBE';
export function BoxCustomer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(src()+"/Welcome/Administrator/AllCustomers_And_their_Pay_money")
            .then(res => res.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    // console.log(data[i]);
                    if(result[i][9] === null)
                        result[i][9] = 0;
                }
                setData(result);
                // console.log(data);
            }
            )
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.dashboard}>Customers</h2>
            <div className={styles.boxListSaving}>
                <table className={styles.tableSaving}>
                    <tr className={styles.headerTable}>
                        <th className={styles.noneBorderLeft}>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CMND/CCCD</th>
                        <th >SĐT/STK</th>
                        <th>Số dư khả dụng</th>
                        <th className={styles.noneBorderRight}>Số TKTK</th>
                    </tr>
                    {data.map(((item) => (
                        <tr key={item[0]}>
                            <td className={styles.noneBorderTB}>{data.indexOf(item)+1}</td>
                            <td className={styles.noneBorderTB}>{item[4]}</td>
                            <td className={styles.noneBorderTB}>{item[6]}</td>
                            <td className={styles.noneBorderTB}>{item[7]}</td>
                            <td className={styles.noneBorderTB}>{item[5]}</td>
                            <td className={styles.noneBorderTB}>{item[8]}</td>
                            <td className={styles.noneBorderTB}>{item[9]}</td>
                        </tr>
                    )))}

                </table>
            </div>
        </div>

    );
}
