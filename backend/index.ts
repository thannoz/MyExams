import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

import { examsRouter } from "./src/exams/exams.router";

const app: Express = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server running on port " + port);
});

// DB connection
// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL!);
console.log("Connected to PlanetScale Database!");

connection.end();

app.use(examsRouter);
