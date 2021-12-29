import React from 'react';
import styles from './saving.module.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import {src} from '../../linkBE';

export function SaveMoneyBox(props) {

    // const [style, setStyle] = useState("");
    const [money, setMoney] = useState(0);
    const [ngaygui, setNgayGui] = useState("");
    const [ngaydaohan, setNgayDaoHan] = useState("");

    let tuychon = "1";
    let ngayrut;
    function handleRenewals() {
        // setStyle("")
        let btnR = document.getElementById("btnRenewals");
        btnR.style.color = "white";
        btnR.style.backgroundColor = "#6DCBFF";
        btnR.style.border = "none";


        let btnS = document.getElementById("btnSettlement");
        btnS.style.color = "#817D7D";
        btnS.style.backgroundColor = "white";
        btnS.style.border = "3px solid #F4F4F4";

        tuychon = "1";
        // console.log(tuychon);
    }

    function handleSettlement() {
        let btnS = document.getElementById("btnSettlement");
        btnS.style.color = "white";
        btnS.style.backgroundColor = "#6DCBFF";
        btnS.style.border = "none";


        let btnR = document.getElementById("btnRenewals");
        btnR.style.color = "#817D7D";
        btnR.style.backgroundColor = "white";
        btnR.style.border = "3px solid #F4F4F4";

        tuychon = "2";
        // console.log(tuychon);
    }

    let flag = props.show;
    function handleSelectedValue() {

        // Lay value selected
        let period = $("#terms :selected").val();
        // console.log(test);

        //Format ngay rut
        ngayrut = new Date();
        // ngayrut.setMonth(ngayrut.getMonth + period);
        // console.log(ngayrut);

        var ddr = String(ngayrut.getDate()).padStart(2, '0');
        if (parseInt(ddr) < 10) {
            ddr = '0' + ddr;
        }
        var mmr = String(ngayrut.getMonth() + 1 + parseInt(period)).padStart(2, '0'); //January is 0!

        // console.log(mmr);
        var yyyyr = mmr > 12 ? ngayrut.getFullYear() + Math.floor(((mmr - 1) / 12)) : ngayrut.getFullYear();

        let checkMonth = parseInt(mmr) % 12 === 0 ? 12 : parseInt(mmr) % 12;


        if (checkMonth !== 2) {
            if (ddr === 31) {
                if (checkMonth === 4 || checkMonth === 6 || checkMonth === 9 || checkMonth === 11) {
                    ddr = 30;
                }
            }
        }
        else {
            if (ddr > 28) {
                if (((yyyyr % 4 === 0) && (yyyyr % 100 !== 0)) || (yyyyr % 400 === 0)) {
                    ddr = 29;
                }
                else {
                    ddr = 28;
                }
            }
        }
        if (parseInt(checkMonth) < 10) {
            checkMonth = "0" + checkMonth;
        }
        ngayrut = yyyyr + '-' + checkMonth + '-' + ddr;
        // console.log(ngayrut);
        setNgayDaoHan(ngayrut);
        // console.log(ngaydaohan);
        document.getElementById("termDate").innerHTML = ngayrut;
    }

    function handleOK() {
        let kyhan = $("#terms :selected").val() + "";
        let sotien = money + "";
        let sotaikhoan = localStorage.getItem("stk");
        let acc_id = localStorage.getItem("acc_id");

        let data = {
            sotien,
            ngaygui,
            ngaydaohan,
            tuychon,
            sotaikhoan,
            acc_id,
            kyhan
        }
        // console.log(data);
        if (money <= parseInt(localStorage.getItem("sotien"))  && money > 0) {
            fetch(src()+"/Welcome/UserArea/SaveMoney", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                console.log("Sending money complete");
            })
            // await timeout(1000); //for 1 sec delay
            // setTimeout(() => {  console.log("World!"); }, 2000);
            setTimeout(() => {window.location.reload()}, 1000);
            // window.location.reload();
        }
        else {
            alert("So tien ban gui phai nho hon so tien ban dang co!!!");
        }

    }

    useEffect(() => {
        var ngaygui1 = new Date();
        var dd = String(ngaygui1.getDate()).padStart(2, '0');
        if (parseInt(dd) < 10) {
            dd = '0' + dd;
        }
        var mm = String(ngaygui1.getMonth() + 1).padStart(2, '0'); //January is 0!
        if (parseInt(mm) < 10) {
            mm = '0' + mm;
        }
        var yyyy = ngaygui1.getFullYear();

        // ngaygui = dd + '-' + mm + '-' + yyyy;
        ngaygui1 = yyyy + '-' + mm + '-' + dd;
        if (document.getElementById("tienSave") !== null) {
            document.getElementById("tienSave").innerHTML = localStorage.getItem("sotien");
            document.getElementById("currentDate").innerHTML = ngaygui1;
        }
        setNgayGui(ngaygui1);
    }, [flag])

    return (
        <>
            {
                props.show && <div className={styles.boxSave}>
                    <div className={styles.boxBalance}>
                        <h3 className={styles.h__saveMoney}>SAVE MONEY</h3>
                        <p className={styles.accountBalance}> Account Balance:</p>
                        <p className={styles.moneyBalance}> <span id="tienSave"> 0000 </span> $ </p>
                        {/* <h3 className={styles.amountMoney}>$ 1,500</h3> */}
                        <label htmlFor="inputMoney" className={styles.labelMoney}><i class="fas fa-dollar-sign fa-2x"></i></label>
                        <input
                            className={styles.amountMoney}
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                            id="inputMoney"
                        />

                    </div>
                    <div className={styles.settingBox}>
                        <div className={styles.column}>
                            <p className={styles.term}>Term:</p>
                            <p className={styles.type}>Type:</p>
                            <p className={styles.from}>From:</p>
                        </div>
                        <div className={styles.setting}>
                            <div className={styles.settingTerm}>
                                <select name="term" id="terms" className={styles.settingTermDetail} onClick={handleSelectedValue}>
                                    <option value="0" hidden>Select period </option>
                                    <option value="1">1 month (3.5%/year) </option>
                                    <option value="2">2 month (3.6%/year) </option>
                                    <option value="3">3 month (3.7%/year) </option>
                                    <option value="6">6 month (5.1%/year) </option>
                                    <option value="9">9 month (5.5%/year) </option>
                                    <option value="12">1 year (5.8%/year) </option>
                                    <option value="24">2 years (6.1%/year) </option>
                                </select>
                            </div>
                            <div className={styles.settingType}>
                                <button className={styles.btnRenewals} onClick={handleRenewals} autoFocus id="btnRenewals"><i class="fas fa-sync-alt"></i>  Renewals </button>
                                <button className={styles.btnSettlement} onClick={handleSettlement} id="btnSettlement"> <i class="fas fa-hand-holding-usd"></i> Settlement </button>
                                <p className={styles.currentDate}> <span id="currentDate">currentdate</span>  <span>---</span> <span id="termDate"> termDate </span> </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxDecision}>
                        <button className={styles.btnOK} onClick={handleOK}> OK </button>
                        <button onClick={() => props.cancelBox()} className={styles.btnCancel}> Cancel </button>
                    </div>
                </div>
            }
        </>
    );
}

