import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Appbar: any = styled(AppBar)`
    width: 100vw;
    height: 9vh;
    background-color: #e3e3e3;
    color: #1100ab;
`

const ToolBar: any = styled(Toolbar)`
    width: 100vw;
    height: 9vh;
    background-color: #e3e3e3;
    color: #1100ab;
    margin: 0px;
    padding: 0px;
`

const Header = () => {
    return (
        <Appbar>
            <ToolBar>
                <FirstSection />
                <SecondSection />
            </ToolBar>
        </Appbar>
    )
}

export default Header;