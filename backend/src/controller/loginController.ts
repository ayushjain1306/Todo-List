import User from "../model/userSchema";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

function generateToken(username: any){
    const token = jwt.sign({username}, 'Thisisrelatedtocheckingtheuserexistsindatabaseornot', {expiresIn: "1h"})
    return token;
}

async function loginController(request: Request, response: Response) {
    try {
        const user = await User.findOne({
            username: request.body.username
        });

        if (!user){
            return response.status(404).json({
                message: "User Not Found"
            })
        }

        if (user.password !== request.body.password){
            return response.status(401).json({
                message: "Wrong Password"
            })
        }

        const token = generateToken(request.body.username);

        return response.status(200).json({token});
    }
    catch (error:any){
        return response.status(500).json({message: error.message})
    }
}

export default loginController;