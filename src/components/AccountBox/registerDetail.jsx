import React from 'react'
import styled from 'styled-components';
import {Typography, Box, Button, makeStyles} from '@material-ui/core';
import UnstyledUser from './unStyledUser';


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




const useStyles = makeStyles({
    login: {
        // marginLeft: '60px',
        display: 'flex',
        marginTop: '20px',
        borderRadius: "5em",
        //color: '#fff',
        background: '#FF725E',
        width: '76%',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        margin: 'auto'
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

export function RegisterDetailBox(props) {
    const classes =  useStyles();
    return (
        <BoxContainer>
            <TopContainer>
                <HeaderContainer>
                    <HeaderText> Register </HeaderText>
                    <Typography>
                        <Box sx={{marginTop: '10px' }}>
                            <UnstyledUser name="Fullname" />
                        </Box>
                        <Box sx={{marginTop: '20px' }}>
                            <UnstyledUser name="Email"/>
                        </Box>
                        <Box sx={{marginTop: '20px' }}>
                            <UnstyledUser name="Phone Number"/>
                        </Box>
                        <Button className={classes.login} variant="outlined" size="large">
                            Register
                        </Button>
                        
                    </Typography>
                    <SmallText href="google.com" > Already have an account ?
                        <Button className={classes.register} href="/">Back to Login</Button>
                    </SmallText>
                </HeaderContainer>  
            </TopContainer>
        </BoxContainer>
    );
}
