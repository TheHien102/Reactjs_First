import React from 'react';
import styled from 'styled-components';
import { Typography, Box, Button, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import {src} from '../../test';
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

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
//   padding: 0 1.8em;
  padding-top: 20px;
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
    // padding-left: 35px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SmallText = styled.h3`
  color: #817D7D;
  display: flex;
  font-family: asap, sans-serif;
  font-weight: 500;
  font-size: 15px;
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
            display: 'flex',
            alignItems: 'center',
            marginTop: '30px',
        }}
    />
);

const useStyles = makeStyles({
    login: {
        display: 'flex',
        marginTop: '40px',
        borderRadius: "5em",
        background: '#FF725E',
        width: '76%',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        margin: 'auto',
        color: 'white'
    },
    forgot: {
        fontSize: '10px',
        marginLeft: '100px',
        marginTop: '10px',
        color: '#817D7D'
    },
    cirle: {
        borderRadius: "5em"
    },
    register: {
        margin: '0',
        color: '#FF725E',
        marginLeft: '10px',
        textTransform: 'none',
        fontSize: '15px',
    },
    shadow: {
        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))'
    }
})


export function AccountBox(props) {

    const classes = useStyles();

    const [taikhoan, setUser] = useState('');
    const [matkhau, setPass] = useState('');
    const [customers, setCustomers] = useState([]);

    function handleUserInput(e) {
        setUser(e.target.value);
    }
    function handlePassInput(e) {
        setPass(e.target.value);
    }
    const navigate = useNavigate();

    useEffect(() => {
        fetch(src()+"/Welcome/Login")
            .then(res => res.json())
            .then((result) => {
                setCustomers(result);
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        var flag = false;
        localStorage.removeItem("account");
        localStorage.removeItem("acc_id");
        localStorage.removeItem("sotien");
        localStorage.removeItem("stk");

        for (let i = 0; i < customers.length; i++) {
            if(customers[i] === null) {
                continue;
            } 
            if (taikhoan === "admin" && matkhau === "admin") {
                navigate('/Welcome/Admin'); //Change page to admin
                flag = true;
                break;
            }
            if (taikhoan === customers[i].taikhoan && matkhau === customers[i].matkhau) {
                navigate('/Welcome/userArea'); //Change page to user
                localStorage.setItem("account", customers[i].taikhoan);
                localStorage.setItem("acc_id", customers[i].acc_id);
                flag = true;
                break;
            }
            // else {

            // }

        }
        if (flag === false) {
            alert("Sai thong tin nguoi dung");
        }
    }



    return (
        <BoxContainer>
            <TopContainer>
                <HeaderContainer>
                    <HeaderText> Welcome back </HeaderText>
                    <Typography>
                        <Box sx={{ marginTop: '10px' }}>
                            <div className={styles.boxPassword}>
                                {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
                                <figure className={styles.key}> <i class="fas fa-user"></i> </figure>
                                <input
                                    type="text"
                                    className={styles.passwordInput}
                                    placeholder="Username"
                                    value={taikhoan}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </Box>
                        <Box sx={{ marginTop: '20px' }}>
                            <div className={styles.boxPassword}>
                                <figure className={styles.key}> <i class="fas fa-key"> </i> </figure>
                                <input
                                    type="password"
                                    className={styles.passwordInput}
                                    placeholder="Password"
                                    value={matkhau}
                                    onChange={handlePassInput}
                                />
                            </div>
                        </Box>
                        {/* <Button className={classes.forgot} href="#text-buttons">Forgot password ?</Button> */}
                        <Button className={classes.login} onClick={handleSubmit} variant="outlined" size="large">
                            <b>Login</b>
                        </Button>
                    </Typography>
                    <ColoredLine color='black' />
                    <SmallText href="google.com" > Are you new?
                        <Button className={classes.register} href="/Welcome/Register">Register</Button>
                    </SmallText>
                </HeaderContainer>
            </TopContainer>
        </BoxContainer>
    );
}
