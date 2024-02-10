import { Request, Response } from "express";
import Activity from "../model/activitySchema";

export async function createActivity(request: Request, response: Response){
    try {
        await Activity.create(request.body);

        response.status(201).json({message: "Activity created successfully."});
    }
    catch (error: any){
        response.status(500).json({message: error.message});
    }
}

export async function getActivities(request: Request, response: Response){
    try {
        const data = await Activity.find({});

        response.status(200).json(data);
    }
    catch (error: any){
        response.status(500).json({message: error.message});
    }
}

export async function updateActivity(request: Request, response: Response){
    try {
        const data: any = request.body;

        const element: any = data.element;
        const fieldData: any = data.fieldData;

        await Activity.updateOne(element, fieldData);

        response.status(200).json("Data updated successfully.");
    }
    catch (error: any){
        console.log(error);
        response.status(500).json({message: error.message});
    }
}

export async function deleteActivity(request: Request, response: Response){
    try {
        await Activity.deleteOne(request.body);

        response.status(200).json({message: "Data deleted successfully."});
    }
    catch (error: any){
        console.log(error);
        response.status(500).json({message: error.message});
    }
}