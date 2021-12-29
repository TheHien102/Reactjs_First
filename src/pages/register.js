import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/Navbar';
// import { AccountBox } from '../components/AccountBox';
import { RegisterBox } from '../components/AccountBox/register';
import { MainPicture } from '../components/MainPicture';

const Background = styled.div`
    width : 100%;
    height: 100%;
    background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    background-size: cover;
`;

const Container = styled.div`
    width: auto;
    height: 100%;
    //max-width: 1540px;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    
`;

const AppContainer = styled.div`
    position: relative;
    width: 400px;
    right: 50px;
    top: 100px;
`;

const BoxPic = styled.div`
    position: relative;
    top: 150px;
    left: -2vw;
    filter: drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.25));
`;



const Register = () => {
    return (
        <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
            <Background>
                <Navbar />
                    <Container>
                        <BoxPic>
                            <MainPicture/>
                        </BoxPic>
                        <AppContainer>
                            <RegisterBox />
                        </AppContainer>
                    </Container>
                </Background>
                
        </div>
    )
}
export default Register;