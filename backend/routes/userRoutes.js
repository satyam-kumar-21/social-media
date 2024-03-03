import express from "express";
import userController from "../controllers/userController.js"
import upload from "../middleware/uploadFileMulter.js";

const userRouter = express.Router();

userRouter.post("/register", upload.single("profilePicture"), userController.createUser);
userRouter.post("/login", userController.loginUser);

export default userRouter;
