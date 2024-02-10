import React from "react";
import { Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

const Foot = scStyled.footer`
    background-color: whitesmoke;
    text-align: center;
    height: 10vh;
`

const Hr = scStyled.hr`
    width: 70%;
    margin-top: 0px;
    margin-bottom: 15px;
    margin-left: 15%;
    margin-right: 15%;
    border-color: 1px solid #e3e3e3;

    @media screen and (max-width: 700px){

    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        margin-bottom: 3vh;
    }
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 15px;

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 25px;
    }
`

const Footer = () => {
    return (
        <Foot>
            <Hr />
            <Typo>Created By Ayush Jain.</Typo>
        </Foot>
    )
}

export default Footer;