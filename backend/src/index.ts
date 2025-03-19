import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/user.routes"

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log("Database connnected successfully...");
    });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", myUserRoute)


app.listen(7000, () => {
    console.log(`Server is running on http://localhost:7000`);
});

