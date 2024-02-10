import React, { useState } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { handleClickLogin } from "./handleClick";

const NewBox = styled(Box)`
    text-align: center;
`

const Typo = styled(Typography)`
    color: #1100ab;
    font-weight: bold;

    @media screen and (max-width: 700px){
        font-size: 20px;
        margin-top: 35px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 30px;
    }
`

const NewTextField = styled(TextField)`
    margin-top: 15px;
    width: 50%;

    @media screen and (max-width: 700px){
        width: 85%;
        margin-top: 35px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 25px;
        width: 70%;
        margin-top: 50px;
    }
`

const NewButton = styled(Button)`
    width: 30%;
    margin-top: 15px;
    font-weight: bold;
    background-color: #1100ab;

    &:hover {
        background-color: #1100ab;
        opacity: 0.8;
    }

    @media screen and (max-width: 700px){
        width: 50%;
        font-size: 20px;
        margin-top: 35px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 40%;
        font-size: 25px;
        margin-top: 60px;
    }
`

const AnotherButton = styled(Button)`
    width: 40%;
    text-decoration: underline;
    font-size: 12px;
    margin: 13px 0px;
    color: #1100ab;

    &:hover {
        background-color: white;
        text-decoration: underline;
    }

    @media screen and (max-width: 700px){
        width: 60%;
        margin: 25px 0px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 60%;
        margin: 50px 0px;
        font-size: 21px;
    }
`

const inputData = {
    username: "",
    password: ""
}

const Login = ({ setAccount }: {setAccount: any}) =>{
    const [fieldData, setFieldData] = useState(inputData);

    const handleChange = (e: any) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const handleChangeOption = () => {
        setAccount("signup");
    }

    return (
        <NewBox>
            <Typo>
                Fill your login details!
            </Typo>

            <Box>
                <NewTextField required id = "username" label = "Enter your Username" onChange = {(e) => handleChange(e)} />
                <br />
                <NewTextField required id = "password" type = "password" label = "Enter your Password" onChange = {(e) => handleChange(e)} />
            </Box>

            <Box>
                <NewButton variant = "contained" onClick = {() => handleClickLogin(inputData, fieldData, setFieldData)}>Log In</NewButton>
                <br />
                <AnotherButton onClick = {() => handleChangeOption()}>Don't have an Account? Create Account</AnotherButton>
            </Box>
        </NewBox>
    ) 
}

export default Login;