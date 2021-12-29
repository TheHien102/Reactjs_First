import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { PictureSaving } from '../components/UserSaving/human';
import { UserSavingBox } from '../components/UserSaving/index';
import { ButtonSaving } from '../components/UserSaving/btnSaving';
import styled from "styled-components";
import { BoxDeposit } from '../components/UserSaving/boxDeposit';

const Background = styled.div`
    //background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    // background: linear-gradient(66.94deg, #FF8282 -14.53%, #AA8CFF 132.1%);
    height: 100vh;
`;

const UserSaving = () => {
    return (
        <div>
            <Navbar />
                <Background>
                    <PictureSaving />
                    <UserSavingBox />
                    <BoxDeposit />
                    <ButtonSaving />
                </Background>
        </div>
    )
}

export default UserSaving