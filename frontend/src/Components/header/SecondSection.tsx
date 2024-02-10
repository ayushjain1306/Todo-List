import React, { useState } from "react";
import { Box, List, ListItem, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const NewBox: any = styled(Box)`
    width: 60%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1100px){
        justify-content: center;
    }
`

const NewList: any = styled(List)`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    display: none;

    @media screen and (min-width: 1100px){
        display: flex;
    }
`

const NewListItem: any = styled(ListItem)`
    font-weight: bold;
    cursor: pointer;
`

const NewButton: any = styled(Button)`
    font-weight: bold;
    background-color: #1100ab;
    margin-left: 20px;
    width: 20%;

    &: hover {
        background-color: #1100ab;
        opacity: 0.8;
    }

    @media screen and (max-width: 700px){
        width: 50%;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 28%;
        font-size: 20px;
    }
`

const AnotherBox: any = styled(Box)`
    width: 4%;
    margin-left: 20px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1100px){
        display: block;
    }

    @media screen and (max-width: 700px){
        width: 12%;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 7%;
        margin-left: 60px;
    }
`

const StyledBox: any = styled(Box)`
    border: 2px solid #1100ab;
    border-radius: 10px;
    margin-bottom: 5px;
`

const SecondSection = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClick = () => {
        const loader  = document.getElementById("loader");

        if (loader) loader.style.display = "block";

        const token = localStorage.getItem("token");

        if (token){
            localStorage.removeItem("token");
        }

        if (loader) loader.style.display = "none";

        window.location.reload();
    }

    return (
        <NewBox>
            <NewList>
                <NewListItem><Link to="/" style={{color: "inherit", textDecoration: "none"}}>Home</Link></NewListItem>
                <NewListItem>About</NewListItem>
                <NewListItem>Services</NewListItem>
                <NewListItem>Contact Us</NewListItem>
            </NewList>
            <NewButton variant="contained" onClick={()=>handleClick()}>Log Out</NewButton>

            <AnotherBox onClick = {() => handleOpen()}>
                <StyledBox></StyledBox>
                <StyledBox></StyledBox>
                <StyledBox></StyledBox>
            </AnotherBox>

            {
                open && <HamburgerMenu setOpen={setOpen} />
            }
        </NewBox>
    )
}

export default SecondSection;