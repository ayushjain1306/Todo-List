import React from "react";
import { Box, styled } from "@mui/material";
import Header from "../header/Header";
import Loader from "../../Loader";
import CreateButton from "./CreateButton";
import Activities from "./Activities";
import Footer from "../footer/Footer";

const NewBox: any = styled(Box)`
    min-height: 100vh;
    padding-top: 95px;
    padding-bottom: 20px;
    background-color: whitesmoke;

    @media screen and (max-width: 700px){
        padding-top: 110px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        padding-top: 13vh;
    }
`

const Home = () => {
    return (
        <>
            <Header />
            <Loader />
            <NewBox>
                <CreateButton />
                <Activities />
            </NewBox>
            <Footer />
        </>
    )
}

export default Home;