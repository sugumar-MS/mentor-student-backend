// importing necessary components
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import mentorRouter from "./Routers/mentorRouter.js";
import studentRouter from "./Routers/studentRouter.js";

// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mentor", mentorRouter);
app.use("/api/student", studentRouter);
connectDB();

// setting port
const port = 5001 || process.env.PORT ;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});