import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

class ExamController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    const allExams = await prisma.exam.findMany();

    console.log("exams: ", allExams);

    return res.json(allExams).status(200);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    console.log("client request: ", req.body);
    const errs = validationResult(req.body);
    try {
      const exam = await prisma.exam.create({ data: req.body });
      return res.json(exam);
    } catch (error) {
      return res.status(400).json({ error: errs.array() });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    return res.json({ hello: "updated an exam" });
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    return res.json({ hello: "delete an exam" });
  }
}

export const examController = new ExamController();
