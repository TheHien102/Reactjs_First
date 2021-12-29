import React from 'react'
import styled from 'styled-components';
import {Typography, Box, Button, makeStyles } from '@material-ui/core';
import styles from './style.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {src} from '../../linkBE';

const BoxContainer = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 20px 10px 10px rgba(2, 128, 144, 0.2);
  position: relative;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    color: black;
    margin: 0;
    z-index: 20;
    font-family: asap, sans-serif;
    padding-top: 30px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SmallText = styled.h3`
  color: black;
  display: flex;
  font-family: asap, sans-serif;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 10;
  margin-top: 7px;
  justify-content: center;
  align-items: center;
`;


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: '60px',
            // marginLeft: '79px',
            display: 'flex',
            alignItems: 'center',
            // margin: 'auto',
            marginTop: '30px',
        }}
    />
);

const useStyles = makeStyles({
    login: {
        // marginLeft: '60px',
        display: 'flex',
        marginTop: '20px',
        borderRadius: "5em",
        //color: '#fff',
        background: '#FF725E',
        width: '87%',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontWeight: 'bold',
    },
    forgot: {
        fontSize: '10px',
        marginLeft: '100px',
        marginTop: '10px',
        color: '#FF725E'
    },
    cirle: {
        borderRadius: "5em"
    },
    register: {
        margin: '0',
        color: '#FF725E',
        marginLeft: '10px',
        textTransform: 'none',
    },
    shadow: {
        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))'
    }

})


export function RegisterBox(props) {
    const classes = useStyles();

    const navigate = useNavigate();

    const [taikhoan, setUser] = useState('');
    const [matkhau, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [ten, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sdt, setPhone] = useState('');
    const [soCMND, setId] = useState('');
    function handleUserInput(e) {
        setUser(e.target.value);
    }

    function handlePassInput(e) {
        setPass(e.target.value);
    }

    function handleCPassInput(e) {
        setCPass(e.target.value);
    }

    function handleNameInput(e) {
        setName(e.target.value);
    }

    function handleEmailInput(e) {
        setEmail(e.target.value);
    }

    function handlePhoneInput(e) {
        setPhone(e.target.value);
    }

    function handleIdInput(e) {
        setId(e.target.value);
    }
    //Check regex ================================================================================================================
    function checkUser() {
        var ten = document.getElementById("username").value;
        // var check_error_ten = document.getElementById("error_ten");
        var regexName = /^[A-Za-z ]+$/;
        if (ten === "" || ten === null) {
            // check_error_ten.innerHTML = "Tên không được để trống!"
            alert("Tên không được để trống!");
        } else if (!regexName.test(ten)) {
            // check_error_ten.innerHTML = "Tên không hợp lệ!"
            alert("Tên không hợp lệ!");
        } else {
            // check_error_ten.innerHTML = "";
            // return ten;
            return true;
        }
        return false;
    }

    function checkPass() {
        var password = document.getElementById("password").value;
        // var check_error_password = document.getElementById("error_password");
        var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (password === "") {
            // check_error_password.innerHTML = "Password không được để trống!"
            alert("Password không được để trống!");

        } else if (!regexPassword.test(password)) {
            // check_error_password.innerHTML = "Password phải có chữ Hoa, chữ thường và số!"
            alert("Password phải có chữ Hoa, chữ thường và số!");
        } else {
            // check_error_password.innerHTML = "";
            return true;
        }
        return false;
    }

    function checkPass2() {
        // perform all neccassary validations
        if (matkhau !== cPass) {
            alert("Passwords don't match");
        }
        else {
            return true;
        }
        return false;
    }

    function checkName() {
        var ten = document.getElementById("fullname").value;
        // var check_error_ten = document.getElementById("error_ten");
        var regexName = /^([^0-9]*)$/;
        if (ten === "" || ten === null) {
            // check_error_ten.innerHTML = "Tên không được để trống!"
            alert("Tên không được để trống!");
        } else if (!regexName.test(ten)) {
            // check_error_ten.innerHTML = "Tên không hợp lệ!"
            alert("Tên không hợp lệ!");
        } else {
            // check_error_ten.innerHTML = "";
            return true;
        }
        return false;
    }

    function checkEmail() {
        var email = document.getElementById("email").value;
        // var check_error_email = document.getElementById("error_email");
        var regexEmail = /\b[A-Z0-9.%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,6}\b/i;
        if (email === "") {
            // check_error_email.innerHTML = "Email không được để trống!"
            alert("Email không được để trống!");
        } else if (!regexEmail.test(email)) {
            // check_error_email.innerHTML = "Định dạng email không hợp lệ!"
            alert("Định dạng email không hợp lệ!");
        } else {
            // check_error_email.innerHTML = "";
            return true;
        }
        return false;
    }

    function checkPhone() {
        var phone = document.getElementById("sdt").value;
        // var check_error_phone = document.getElementById("error_phone");
        var regexPhone = /^[\]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,6}$/im;
        if (phone === "") {
            // check_error_phone.innerHTML = "Số điện thoại không được để trống!"
            alert("Số điện thoại không được để trống!");
        } else if (!regexPhone.test(phone)) {
            alert("Định dạng số điện thoại không đúng!");
            // check_error_phone.innerHTML = "Định dạng số điện thoại không đúng!"
        } else {
            // check_error_phone.innerHTML = "";
            return true;
        }
        return false;
    }

    function checkID() {
        var id = document.getElementById("id").value;
        // var check_error_phone = document.getElementById("error_phone");
        var regexID = /^[0-9]*$/;
        if (id === "") {
            // check_error_phone.innerHTML = "Số điện thoại không được để trống!"
            alert("Số điện thoại không được để trống!");
        } else if (!regexID.test(id)) {
            alert("Định dạng số điện thoại không đúng!");
            // check_error_phone.innerHTML = "Định dạng số điện thoại không đúng!"
        } else {
            // check_error_phone.innerHTML = "";
            return true;
        }
        return false;
    }


    function handleSubmit(e) {
        // e.preventDefault();
        const role = 0;
        const person = { taikhoan, matkhau, role, ten, sdt, email, soCMND };
        
        if (checkUser())
            if (checkPass())
                if (checkPass2())
                    if (checkName())
                        if (checkEmail())
                            if (checkPhone())
                                if (checkID()) {
                                    fetch(src()+"/Welcome/Register", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(person)
                                    }).then(() => {
                                        console.log("New account added hehe")
                                    })
                                    alert("Đăng kí thành công!!!");
                                    navigate('/Welcome/Login'); //Change page to login
                                    window.location.reload();
                                }
    }
    
    return (
        <BoxContainer>
            <HeaderContainer>
                <HeaderText> Register </HeaderText>
                <Typography>
                    <Box sx={{ marginTop: '10px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="text"
                                className={styles.registerInput}
                                placeholder="Username"
                                value={taikhoan}
                                onChange={handleUserInput}
                                onBlur={checkUser}
                                id='username'
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="password"
                                className={styles.registerInput}
                                placeholder="Password"
                                value={matkhau}
                                onChange={handlePassInput}
                                onBlur={checkPass}
                                id='password'
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="password"
                                className={styles.registerInput}
                                placeholder="Confirm Password"
                                value={cPass}
                                onChange={handleCPassInput}
                                onBlur={checkPass2}
                                id='password2'
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="text"
                                className={styles.registerInput}
                                placeholder="Full Name"
                                value={ten}
                                onChange={handleNameInput}
                                id='fullname'
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="text"
                                className={styles.registerInput}
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailInput}
                                id="email"
                                onBlur={checkEmail}
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="text"
                                className={styles.registerInput}
                                placeholder="Phone Number"
                                value={sdt}
                                onChange={handlePhoneInput}
                                id="sdt"
                                onBlur={checkPhone}
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <div className={styles.boxRegister}>
                            <input
                                type="text"
                                className={styles.registerInput}
                                placeholder="Identity Number"
                                value={soCMND}
                                onChange={handleIdInput}
                                id="id"
                            />
                        </div>
                    </Box>
                    {/* href="/registerDetail" */}
                    <Button className={classes.login} onClick={handleSubmit} variant="outlined" size="large">
                        REGISTER
                    </Button>
                </Typography>
                <ColoredLine color='black' />
                <SmallText href="google.com" > Already have an account ?
                    <Button className={classes.register} href="/Welcome/Login">Back to Login</Button>
                </SmallText>
            </HeaderContainer>
        </BoxContainer>
    );
}
