import React, { useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import edit from "./images/edit.png";
import remove from "./images/delete.png";
import deleteApi from "../../service/deleteApi";
import EditDialog from "./EditDialog";

const NewBox = styled(Box)`
    border-radius: 10px;
    height: 15vh;
    background-color: #e3e3e3;
    box-shadow: 7px 7px 0px 0px #1100ab; 
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 40% 30% 30%;
    align-items: center;

    @media screen and (max-width: 700px){
        grid-template-columns: 100%;
        height: 20vh;
        padding-top: 10px;
        padding-top: 10px;
    }
`

const HeadTypo = styled(Typography)`
    color: #1100ab;
    font-size: 27px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
`

const Typo = styled(Typography)`
    font-size: 18px;
    color: grey;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
`

const AnotherBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NewButton = styled(Button)`

`

const Image = scStyled.img`
    height: 25px;
    width: 25px;
`

interface ShowActivitiesProps {
    activities: any[],
    date: string
}

const ShowActivities = ({activities, date}: ShowActivitiesProps) => {
    const [open, setOpen] = useState(false);

    const filteredActivities = activities.filter(activity => activity.date === date);

    let count = 0;

    const handleEdit = () => {
        setOpen(true);
    }

    const handleDelete = async(element: any) => {
        await deleteApi(element, true);
    }

    const handleDeleteRandom = async(element: any) => {
        await deleteApi(element, false);
    }

    return (
        <>
            {
                filteredActivities &&
                filteredActivities.map((element: any) => {
                    return (
                        <NewBox key={count++}>
                            <HeadTypo>
                                {element.name}
                            </HeadTypo>
                            <Typo>
                                Do this before {element.time}
                            </Typo>
                            <AnotherBox>
                                <NewButton onClick={()=>handleEdit()}>
                                    <Image src={edit} alt="edit" />
                                </NewButton>
                                <NewButton onClick={()=>handleDelete(element)}>
                                    <Image src={remove} alt="delete" />
                                </NewButton>
                            </AnotherBox>

                            {
                                open && <EditDialog open={open} setOpen={setOpen} element={element} />
                            }
                        </NewBox>
                    )
                })
            }
        </>
    )
}

export default ShowActivities;