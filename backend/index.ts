import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

// import routes for exams and user
import { examsRouter } from "./src/exams/routes/exam.routes";
import { userRouter } from "./src/exams/routes/user.routes";
dotenv.config();

const port = process.env.PORT;
export const app: Express = express();

app.use(bodyParser.json());
app.use(cors());

app.use(examsRouter);
app.use(userRouter);

// DB connection to planetscale
const connection = mysql.createConnection(process.env.DATABASE_URL!);
console.log("Connected to PlanetScale Database!");

connection.end();

app.listen(port, () => {
  console.log("Server running on port " + port);
});
