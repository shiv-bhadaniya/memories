import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"


import postRoutes from "./routes/post.js";
import authRouter from "./routes/auth.js";

import bodyParser from "body-parser";


const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));




app.use("/posts", postRoutes);
app.use("/user", authRouter)



const PORT = process.env.PORT;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;


mongoose.connect(DB_CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running and Database connect successfully.`);
    });   
}).catch((err) => {
    console.log(err);
})

