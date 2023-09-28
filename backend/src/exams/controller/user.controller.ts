import { Request, Response } from "express";
import { IUsers } from "./interfaces/IUsers";
import clerkClient from "@clerk/clerk-sdk-node";

class UserController {
  // createUser gets parsed users from the csv file and insert them
  // into the the Clerk platform. This user will become teachers
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

      // console.log(clientUsers.length, " teachers created successfully");
      return res.json(clientUsers);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Fehler beim Erstellen einer Klausur!" });
    }
  }
}

export const userController = new UserController();
