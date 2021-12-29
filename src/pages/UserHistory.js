import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from "styled-components";
import { BoxHistorySaving } from '../components/UserSaving/boxHistorySaving';

const Background = styled.div`
    //background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    // background: linear-gradient(66.94deg, #FF8282 -14.53%, #AA8CFF 132.1%);
    height: 100vh;
    position: relative;
    left: 100px;
    top: 300px;
`;


const UserHistory = () => {
    return (
        <div>
            <Navbar />
                <Background>
                    <BoxHistorySaving />
                </Background>
        </div>
    )
}

export default UserHistory