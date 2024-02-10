import React, { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import getApi from "../../service/getApi";
import ShowActivities from "./ShowActivities";

const NewBox = styled(Box)`
    padding-top: 20px;
`

const AnotherBox = styled(Box)`
    margin-left: 15vw;
    margin-right: 15vw;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
    padding-bottom: 5px;

    @media screen and (max-width: 700px){
        margin-left: 5vw;
        margin-right: 5vw;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        margin-left: 10vw;
        margin-right: 10vw;
    }
`

const Typo = styled(Typography)`
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 20px;

    @media screen and (max-width: 700px){
        font-size: 23px;
        text-align: center;
    }
`

const performTask = (activities: any[], set: Set<String>) => {
    activities.forEach((element: any) => {
        set.add(element.date);
    })

    const array: any[] = Array.from(set);

    for (let i = 0; i< array.length; i++){
        array[i] = new Date(array[i]);
    }

    array.sort((a, b) => a-b);

    for (let i = 0; i< array.length; i++){
        array[i] = array[i].toISOString().slice(0, 10);
    }

    return array;
}

const Activities = () => {
    const [activities, setActivities] = useState(null);

    const set: Set<String> = new Set();

    let array: any[] = [];

    let count = 0;

    useEffect(() =>{
        async function getData(){
            const data: any = await getApi();

            const token: any = localStorage.getItem("token");

            const [header, payload, signature] = token.split(".");

            const decodedPayload = JSON.parse(atob(payload));

            data && setActivities(data.filter((activity: any) => activity.user === decodedPayload.username));
        }

        getData();
    }, []);


    return (
        <NewBox>
            {
                activities
                && (array = performTask(activities, set))
                && 
                array.map((element: String) => {
                    return (
                        <AnotherBox key = {count++}>
                            {
                                element === new Date().toISOString().slice(0, 10)
                                ?
                                <Typo>Today</Typo>
                                :
                                <Typo>{element}</Typo>
                            }

                            <ShowActivities activities={activities} date={element as string} />
                        </AnotherBox>
                    )
                })
            }
        </NewBox>
    )
}

export default Activities;