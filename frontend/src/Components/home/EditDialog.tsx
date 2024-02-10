import React, { useState } from "react";
import { Box, TextField, Button, styled, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from "@mui/material";
import updateApi from "../../service/updateApi";

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

interface EditDialogProps {
    open: boolean;
    setOpen: any;
    element: any;
}

const EditDialog = ({ open, setOpen, element }: EditDialogProps) => {
    const [fieldData, setfieldData] = useState(element);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e: any) => {
        setfieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const currentDate: string = new Date().toISOString().slice(0, 10);

    const data = {
        element,
        fieldData
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: any) => {
                    event.preventDefault();
                    if (element.name === fieldData.name && element.date === fieldData.date && element.time === fieldData.time){
                        return;
                    }

                    updateApi(data);
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
                    defaultValue={element.name}
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
                        defaultValue={element.date}
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
                        defaultValue={element.time}
                        onChange={(e)=>handleChange(e)}
                    />
                </NewBox>
            </DialogContent>
            <DialogActions>
                <NewButton onClick={handleClose}>Cancel</NewButton>
                <NewButton type="submit">Save</NewButton>
            </DialogActions>
        </Dialog>
    )
}

export default EditDialog;