import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import Loader from "../../Loader";

const NewBox = styled(Box)`
    width: 50%;
    border-radius: 5px;
    height: 60vh;
    margin: auto;
    background-color: white;
    box-shadow: 9px 9px 10px 0px #1100ab;

    @media screen and (max-width: 700px){
        height: 80vh;
        width: 80%;
        padding-top: 20px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        padding-top: 50px;
        height: 70vh;
        width: 70%;
    }
`

const Container = styled(Box)`
    min-height: 80vh;
    padding-top: 20vh;
    background-color: whitesmoke;

    @media screen and (max-width: 700px){
        padding-top: 10vh;
        padding-bottom: 10vh;
    }
`

const AnotherBox = styled(Box)`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-size: 25px;
    font-weight: bold;

    @media screen and (max-width: 700px){
        font-size: 30px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 45px;
    }
`

const Account = () => {
    const [account, setAccount] = useState("login");

    return (
        <Container>
            <Loader />
            <NewBox>
                <AnotherBox>
                    <Typo>TodoHub</Typo>
                </AnotherBox>

                {
                    account === "login" 
                    ? <Login setAccount = {setAccount} /> 
                    : <Signup setAccount = {setAccount} />
                }
            </NewBox>
        </Container>
    )
}

export default Account;