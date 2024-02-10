import User from "../model/userSchema";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

function generateToken(username: any) {
    const token = jwt.sign({username}, 'Thisisrelatedtocreatinganewuserinadatabase', {expiresIn: "1h"});
    return token;
}

async function signupController(request: Request, response: Response) {
    try {
        const exist1:any = await User.findOne({
            email: request.body.email
        })

        const exist2:any = await User.findOne({
            username: request.body.username
        })

        if (exist1){
            return response.status(403).json({
                message: "This email already exists"
            })
        }

        if (exist2) {
            return response.status(401).json({
                message: "This username already exists"
            })
        }

        const token = generateToken(request.body.username);

        const userWithToken = {...request.body, token};

        const newUser = new User(userWithToken);

        await newUser.save();

        return response.status(200).json({token})
    }
    catch (error:any) {
        return response.status(500).json({message: error.message})
    }
}

export default signupController;