import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cloudinary from "cloudinary"
import dbConnection from "./config/dbConnect.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dbConnection();

const PORT = process.env.PORT;

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY 
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET 

cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

app.get("/data", (req, res) => {
    res.send("Hello Duniya");
})
app.use("/",userRouter);

app.listen(PORT, () => {
    console.log(`App running on PORT http://localhost:${PORT}`);
})

