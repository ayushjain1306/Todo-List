import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL:any = process.env.URL;

async function connectionToDatabase(){
    try {
        await mongoose.connect(URL);

        console.log("Database connected successfully.")
    }
    catch (error:any){
        console.log(error);
    }
}

export default connectionToDatabase;