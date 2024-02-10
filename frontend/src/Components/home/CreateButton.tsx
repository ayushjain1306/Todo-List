import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import DialogBox from "./DialogBox";

const NewBox: any = styled(Box)`
    text-align: right;
    padding-right: 60px;
    
    @media screen and (max-width: 700px){
        text-align: center;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        text-align: center;
    }
`

const NewButton: any = styled(Button)`
    background-color: #1100ab;
    font-weight: bold;

    &: hover {
        background-color: #1100ab;
        opacity: 0.8;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 35%;
        font-size: 25px;
    }
`

const CreateButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <NewBox>
            <NewButton variant="contained" onClick={()=>handleOpen()}>Add New Activity</NewButton>

            {
                open && <DialogBox open={open} setOpen={setOpen} />
            }
        </NewBox>
    )
}

export default CreateButton;