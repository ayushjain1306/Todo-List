import React, { useState } from "react";
import { Box, Typography, Button, TextField, styled } from "@mui/material";
import { handleClickSignin } from "./handleClick";

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
    width: 40%;

    @media screen and (max-width: 700px){
        width: 85%;
        margin-top: 30px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 70%;
        font-size: 25px;
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
        width: 40%;
        margin-top: 30px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 40%;
        margin-top: 50px;
        font-size: 25px;
    }
`

const AnotherBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;

    @media screen and (max-width: 1100px){
        display: block;
        margin-top: 0px;
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
        margin-top: 20px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 60%;
        margin-top: 40px;
        font-size: 21px;
    }
`

const inputData = {
    name: "",
    email: "",
    username: "",
    password: ""
}

const Signup = ({ setAccount }: {setAccount:any}) =>{
    const [fieldData, setFieldData] = useState(inputData);

    const handleChange = (e: any) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value});
    }

    const handleChangeOption = () => {
        setAccount("login");
    }

    return (
        <NewBox>
            <Typo>
                Create your Account
            </Typo>

            <AnotherBox>
                <NewTextField id = "name" label = "Enter your Name" required onChange = {(e) => handleChange(e)} />
                <NewTextField id = "email" label = "Enter your Email address" required onChange = {(e) => handleChange(e)} />
            </AnotherBox>

            <AnotherBox>
                <NewTextField id = "username" label = "Create your Username" required onChange = {(e) => handleChange(e)} />
                <NewTextField id = "password" type = "password" label = "Create your Password" required onChange = {(e) => handleChange(e)} />
            </AnotherBox>

            <NewButton variant = "contained" onClick = {() => handleClickSignin(inputData, fieldData, setFieldData)}>Sign Up</NewButton>
            <br />
            <AnotherButton onClick = {() => handleChangeOption()}>Already have an Account?</AnotherButton>
        </NewBox>
    ) 
}

export default Signup;