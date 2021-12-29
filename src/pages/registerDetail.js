import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/Navbar';
import {RegisterDetailBox} from '../components/AccountBox/registerDetail';

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
    width: 300px;
    right: 50px;
    top: 200px;
`;

const BoxPic = styled.div`
    position: relative;
    top: 150px;
    left: 100px;
`;



const RegisterDetail = () => {
    // const classes = useStyle();
    return (
        <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
            <Background>
                <Navbar />
                    <Container>
                        <BoxPic>
                        </BoxPic>
                        <AppContainer>
                            <RegisterDetailBox />
                        </AppContainer>
                    </Container>
                </Background>
        </div>
    )
}
export default RegisterDetail;