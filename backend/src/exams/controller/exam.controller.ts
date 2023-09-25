import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ExamController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    
    try {
      const allExams = await prisma.exam.findMany();
      return res.json(allExams);
    } catch (error) {
      return res.status(500).json({ error: "Fehler beim Laden der Klausuren!" });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {

    try {
      const exam = await prisma.exam.create({ data: req.body });
      return res.json(exam);
    } catch (error) {
      return res.status(500).json({ error: "Fehler beim Erstellen einer Klausur!" });
    }

  }

  public async update(req: Request, res: Response): Promise<Response> {

    const id = req.params.id;
    const {
      subject,
      grade,
      examDate,
      examTime,
      topic
    } = req.body;

    try {
      const updatedExam = await prisma.exam.update({
        where: { id: id },
        data: {
          subject,
          grade,
          examDate,
          examTime,
          topic,
        },
      });

      return res.json(updatedExam);

    } catch (error) {
      return res.status(500).json({ error: "Fehler beim Aktualisieren der Klausur" });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    
    const id = req.params.id;
    try {
      const deletedUser = await prisma.exam.delete({
        where: { id: id },
      });
      return res.json({ "Gelöscht": deletedUser.subject });
    }
    catch (error) {
      return res.status(500).json({ error: "Fehler beim Löschen eines Eintrags" });
    }
  }
}

export const examController = new ExamController();
