import { Request, Response } from "express";
// import fs from "fs";
// import { PrismaClient } from "@prisma/client";
// import { useUser } from "@clerk/clerk-react";
import { IUsers } from "./interfaces/IUsers";
import clerkClient from "@clerk/clerk-sdk-node";

// const prisma = new PrismaClient();

class UserController {
  // Create teacher in Clerk
  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const clientUsers: IUsers[] = await req.body;
      clientUsers.forEach(async (user) => {
        await clerkClient.users.createUser({
          firstName: user.firstname,
          lastName: user.lastname,
          password: user.password,
          emailAddress: user.emailAddress,
          publicMetadata: { role: "teacher" },
        });
      });
      // incrypt password??
      console.log(clientUsers.length, " teachers created successfully");
      return res.json(clientUsers);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Fehler beim Erstellen einer Klausur!" });
    }
  }
}

export const userController = new UserController();
