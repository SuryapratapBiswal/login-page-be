import express from "express";
import dotenv from 'dotenv'
import Router from "./routes/route.js";
import Connection from './db/db.js'
import cors from "cors"
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', Router)

const PORT = process.env.PORT || 8080;
dotenv.config()


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD)

app.listen(PORT, () => {
    console.log(`server is listing to ${PORT}`)
})