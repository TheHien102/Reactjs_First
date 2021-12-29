import React from 'react';
import styles from './manual.module.css';
import { useState } from 'react';

export function UserManualBox() {

    const [showing, setShowing] = useState(false);
    const [typeBox, setTypeBox] = useState("register");

    const handleDisplay = (type) => {
        setTypeBox(type);
        setShowing(true);
        if(showing===true && typeBox===type) {
            setShowing(false);
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.topic}> User Manual </h2>
            <div class={styles.myBox}>
                <a className={styles.question} onClick={()=>{handleDisplay("register")}}>1. Cách đăng kí tài khoản?</a>
                {typeBox === "register" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Chọn “Register” <br />
                        B3: Điền các thông tin <br />
                        B4: Click vào nút “REGISTER” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("login")}}>2. Cách đăng nhập?</a>
                {typeBox === "login" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Nhập username và password đã đăng ký <br />
                        (Nếu chưa có tài khoản, xem cách đăng ký tài khoản)<br />
                        B4: Click vào nút “LOGIN” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("deposit")}}>3. Cách nạp tiền vào tài khoản?</a>
                {typeBox === "deposit" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Deposit” <br />
                        B4: Chọn phương thức nạp và số tiền nạp <br />
                        B5: Click vào nút “OK” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("create")}}>4. Cách tạo tài khoản tiết kiệm?</a>
                {typeBox === "create" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Save money” <br />
                        B4: Chọn số tiền, kỳ hạn và tùy chọn xử lý khi đáo hạn. <br />
                        B5: Click vào nút “OK” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("interest")}}>5. Cách xem bảng lãi suất?</a>
                {typeBox === "interest" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Chọn “Interest rate” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("withdraw")}}>6. Cách rút tiền?</a>
                {typeBox === "withdraw" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Withdraw” <br />
                        B4: Nhập số tiền cần rút <br />
                        B5: Chọn “OK” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("list")}}>7. Cách xem danh sách tài khoản tiết kiệm?</a>
                {typeBox === "list" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Savings Account List” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("history")}}>8. Cách xem lịch sử giao dịch?</a>
                {typeBox === "history" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Transaction” <br />
                    </div>
                }
                <a className={styles.question} onClick={()=>{handleDisplay("abort")}}>9. Cách tất toán một tài khoản tiết kiệm?</a>
                {typeBox === "abort" && showing===true &&
                    <div className={styles.stepRegister}>
                        B1: Vào trang chủ <br />
                        B2: Đăng nhập <br />
                        B3: Chọn “Savings Account List” <br />
                        B4: Chọn vào biểu tượng “ <i className={"fas fa-hand-holding-usd"}></i>  ” ở tài khoản muốn tất toán <br />
                        B5: Click vào nút “OK” <br />
                    </div>
                }
            </div>
        </div>
    );
}

