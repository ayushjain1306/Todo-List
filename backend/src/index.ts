import express, { Application } from 'express';
import cors from 'cors';
import connection from "./database/db";
import Router from "./routes/router";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

connection();

app.use('/', Router);

const PORT = process.env.port || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is listening at Port ${PORT}`);
})