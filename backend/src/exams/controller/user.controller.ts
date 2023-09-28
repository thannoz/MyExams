import { Request, Response } from "express";
import fs from "fs";
// import { PrismaClient } from "@prisma/client";
// import { useUser } from "@clerk/clerk-react";
import axios from "axios";
// import clerkClient from "@clerk/clerk-sdk-node";

// const prisma = new PrismaClient();

class UserController {
  public async getAllClerkUsers(
    req: Request,
    res: Response
  ): Promise<Response> {
    let clerkAPIEndpoint = "https://api.clerk.io/v1/users";
    try {
      const response = await axios.get(clerkAPIEndpoint, {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      });
      console.log("users: ", response.data);
      return res.json(response.data);
    } catch (error) {
      return res.status(500).json({ error: "Fehler beim Laden der Fächer!" });
    }
  }

  // Create a random user in Clerk
  public async createUser(req: Request, res: Response): Promise<Response> {
    // const users = await clerkClient.users.getUserList();
    // clerkClient.users.createUser({
    //   firstName: "Konzo",
    //   lastName: "King",
    //   password: `${process.env.MY_PASSWORD}`,
    //   emailAddress: ["konzo@gmail.com"],
    //   publicMetadata: { role: "teacher" },
    // });
    // console.log("successfully created a new user");
    // console.log("users", users);

    // sending post request is working:
    // Tomorrow: create user in Clerk
    try {
      const data = await req.body;
      console.log("data from client:", data);
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Fehler beim Erstellen einer Klausur!" });
    }
  }

  // Create a dummy csv file to play with
  public async createCSV() {
    const userData = [
      ["firstname", "lastname", "password", "emailAddress"],
      ["Carmelo", "Anthony", "StayMelo", "melo@gmail.com"],
      ["Lebron", "James", "KingJames", "james@gmail.com"],
      ["Stephen", "Curry", "ChefCurry", "steph@gmail.com"],
      ["Kyrie", "Irving", "UncleDrew", "irving@gmail.com"],
    ];

    const csvData = userData.map((row) => row.join(","));
    const csv = csvData.join("\n");

    fs.writeFileSync("output.csv", csv);
    console.log("CSV file created!");
  }
}

export const userController = new UserController();
