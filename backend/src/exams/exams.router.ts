import { Router } from "express";

export const examsRouter: Router = Router();

examsRouter.get("/exams", (req, res) => {
  res.send({ msg: "Exams api working!" });
});

examsRouter.get("/test", (req, res) => {
  res.send({ msg: "Test working!" });
});
