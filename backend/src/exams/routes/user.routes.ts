import "dotenv/config";
import { Router } from "express";
import { userController } from "../controller/user.controller";

export const userRouter: Router = Router();

userRouter.post("/users", userController.createUser);
