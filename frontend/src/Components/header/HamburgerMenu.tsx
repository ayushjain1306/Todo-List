import React from "react";
import { Box, List, ListItem, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NewBox: any = styled(Box)`
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100%;
    transition: 0.5s;
    z-index: 1;
    background-color: #e3e3e3;
    width: 25vw;

    @media screen and (max-width: 700px){
        width: 75vw;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 50vw;
    }
`

const NewList = styled(List)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;

    @media screen and (max-width: 700px){
        margin-top: 120px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        margin-top: 150px;
    }
`

const NewListItem = styled(ListItem)`
    cursor: pointer;
    font-weight: bold;
    margin: 14px 0px;
    font-size: 22px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 30px;
        margin: 20px 0px;
    }
`

const NewButton = styled(Button)`
    width: 40px;
    text-align: right;
    height: 5vh;
    position: absolute;
    right: 28px;
    top: 20px;

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 50px;
    }
`

const AnotherBox = styled(Box)`
    width: 30px;
    position: absolute;
    top: 13px;
    right: 25%;
    border: 1px solid #1100ab;

    @media screen and (max-width: 700px){
        top: 22px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        top: 30px;
    }
`

const NewLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`

const HamburgerMenu = ({setOpen}: {setOpen: any}) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <NewBox>
            <NewButton onClick={() => handleClose()}>
                <AnotherBox style={{transform: "rotate(45deg)"}}></AnotherBox>
                <AnotherBox style={{transform: "rotate(-45deg)"}}></AnotherBox>
            </NewButton>
            <NewList>
                <NewListItem><NewLink to="/">Home</NewLink></NewListItem>
                <NewListItem>About</NewListItem>
                <NewListItem>Services</NewListItem>
                <NewListItem>Contact Us</NewListItem>
            </NewList>
        </NewBox>
    )
}

export default HamburgerMenu;