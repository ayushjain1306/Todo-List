import React from "react";
import { Box, Typography, styled } from "@mui/material";

const NewBox: any = styled(Box)`
    width: 40%;
    display: flex;
    align-items: center;
`

const Typo: any = styled(Typography)`
    font-weight: bold;
    color: #1100ab;
    font-size: 20px;
    margin-left: 40px;

    @media screen and (max-width: 700px){
        font-size: 18px;
        margin-left: 20px;
    }
    
    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 30px;
        margin-left: 60px;
    }
`

const FirstSection = () => {
    return (
        <NewBox>
            <Typo>TodoHub.com</Typo>
        </NewBox>
    )
}

export default FirstSection;