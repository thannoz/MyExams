import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// controller class for exam logic

class ExamController {
  // getAllGrades fetches all grades db
  public async getAllGrades(req: Request, res: Response): Promise<Response> {
    try {
      const grades = await prisma.grade.findMany();
      return res.status(200).json(grades);
    } catch (error) {
      console.error("Error loading grades records:", error);
      return res.status(500).json({ error: "Fehler beim Laden der Klassen!" });
    }
  }

  // getAllSubjects fetches all subjects from db
  public async getAllSubjects(req: Request, res: Response): Promise<Response> {
    try {
      const subjects = await prisma.subject.findMany();
      // console.log("subjects", subjects);
      return res.status(200).json(subjects);
    } catch (error) {
      console.error("Error loading subjects records:", error);
      return res.status(500).json({ error: "Fehler beim Laden der Fächer!" });
    }
  }

  // getAll fetches all exams from db
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allExams = await prisma.exam.findMany();
      return res.status(200).json(allExams);
    } catch (error) {
      console.error("Error fetching exams:", error);
      return res
        .status(500)
        .json({ error: "Fehler beim Laden der Klausuren!" });
    }
  }

  // create creates a new exam
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const exam = await prisma.exam.create({ data: req.body });
      return res.status(201).json(exam);
    } catch (error) {
      console.error("Error creating exam:", error);
      return res
        .status(500)
        .json({ error: "Fehler beim Erstellen einer Klausur!" });
    }
  }

  // update updates an exam
  public async update(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    console.log(`Updating ${id}`);

    const { subject, grade, examDate, examTime, topic } = req.body;
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

      return res.status(200).json(updatedExam);
    } catch (error) {
      console.error("Error updating exam:", error);
      return res
        .status(500)
        .json({ error: "Fehler beim Aktualisieren der Klausur" });
    }
  }

  // remove delete an exam
  public async remove(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    console.log(`Removing ${id}`);
    try {
      const deletedExam = await prisma.exam.delete({
        where: { id: id },
      });
      return res.status(200).json({ Gelöscht: deletedExam.subject });
    } catch (error) {
      console.error("Error deleting exam:", error);
      return res
        .status(500)
        .json({ error: "Fehler beim Löschen eines Eintrags" });
    }
  }
}

export const examController = new ExamController();
