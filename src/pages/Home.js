import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/Navbar';
import { AccountBox } from '../components/AccountBox';
import { MainPicture } from '../components/MainPicture';


const Background = styled.div`
    background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    // background: linear-gradient(66.94deg, #FF8282 -14.53%, #AA8CFF 132.1%);
    height: 100vh;
`;

const Container = styled.div`
    width: auto;
    height: 100%;
    max-width: 1540px;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
`;

const AppContainer = styled.div`
    position: relative;
    width: 300px;
    right: 50px;
    margin-top: 200px;
`;

const BoxPic = styled.div`
    position: relative;
    margin-top: 150px;
    left: 2vw;
    filter: drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.25));
`;


const Home = () => {
    return (
        <div>
                <Navbar />
                <Background>
                    <Container>
                        <BoxPic>
                            <MainPicture/>
                        </BoxPic>
                        <AppContainer>
                            <AccountBox />
                        </AppContainer>
                    </Container>
                </Background>
        </div>
    )
}

export default Home;
