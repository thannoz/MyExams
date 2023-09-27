import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

import { examsRouter } from "./src/exams/routes/exam.routes";
// import { examController } from "./src/exams/controller/exam.controller";
dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(bodyParser.json());
app.use(cors());

app.use(examsRouter);

// examController.createGrades();

// DB connection
const connection = mysql.createConnection(process.env.DATABASE_URL!);
console.log("Connected to PlanetScale Database!");

connection.end();

app.listen(port, () => {
  console.log("Server running on port " + port);
});
