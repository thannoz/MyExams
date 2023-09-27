import "dotenv/config";
import { Router } from "express";
import { examController } from "../controller/exam.controller";

export const examsRouter: Router = Router();

examsRouter.get("/exams", examController.getAll);
examsRouter.post("/exams", examController.create);
examsRouter.put("/exams/:id", examController.update);
examsRouter.delete("/exams/:id", examController.remove);

examsRouter.get("/exams/grades", examController.getAllGrades);
examsRouter.get("/exams/subjects", examController.getAllSubjects);
