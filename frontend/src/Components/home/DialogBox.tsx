import React, { useState } from "react";
import { Box, TextField, styled, Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
import createApi from "../../service/createApi";

const NewBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NewButton = styled(Button)`
    color: #1100ab;
    font-weight: bold;
`

const NewText = styled(TextField)`
    width: 50%;

    @media screen and (max-width: 700px){
        width: 60%;
    }
`

interface DialogBoxProps {
    open: boolean;
    setOpen: any;
}

const inputField: Object = {
    user: "",
    name: "",
    date: "",
    time: ""
}

const DialogBox = ({ open, setOpen }: DialogBoxProps) => {
    const token: any = localStorage.getItem("token");

    const [header, payload, signature] = token.split(".");

    const decodedPayload: any = JSON.parse(atob(payload));

    const [fieldData, setfieldData] = useState({...inputField, user: decodedPayload.username});

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e: any) => {
        setfieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const currentDate = new Date().toISOString().slice(0, 10);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: any) => {
                    event.preventDefault();
                    createApi(fieldData);
                    handleClose();
                },
            }}
        >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill the following textfields to add new activity in your list. (* represents required.)
                </DialogContentText>
                <TextField
                    required
                    margin="dense"
                    id="name"
                    label="Enter the name of the activity"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={(e)=>handleChange(e)}
                />
                <NewBox>
                    <label htmlFor="date">Enter the date for completion</label>
                    <NewText
                        required
                        margin="dense"
                        id="date"
                        name="date"
                        type="date"
                        variant="outlined"
                        inputProps={{
                            min: currentDate
                        }}
                        onChange={(e)=>handleChange(e)}
                    />
                </NewBox>
                <NewBox>
                    <label htmlFor="time">Enter the time for completion</label>
                    <NewText
                        required
                        margin="dense"
                        id="time"
                        name="time"
                        type="time"
                        variant="outlined"
                        onChange={(e)=>handleChange(e)}
                    />
                </NewBox>
            </DialogContent>
            <DialogActions>
                <NewButton onClick={handleClose}>Cancel</NewButton>
                <NewButton type="submit">Create</NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;