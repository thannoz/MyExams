import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ExamController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    const allExams = await prisma.exam.findMany();

    return res.json(allExams);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    // ggf. validieren?
    console.log("client request: ", req.body);

    const exam = await prisma.exam.create({ data: req.body });
    return res.json(exam);
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
