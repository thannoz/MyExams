import request from "supertest";
import { PrismaClient } from "@prisma/client";
import { app } from "../../../index";

// Import the class you want to test
// import { examController } from "../controller/exam.controller";

const prisma = new PrismaClient({});

describe("GET /grades", () => {
  // Before running the tests, make sure to seed the database with test data.
  beforeAll(async () => {
    // Insert test data into the Prisma database, e.g., create some grades.
    await prisma.grade.createMany({
      data: [{ name: "Grade A" }, { name: "Grade B" }, { name: "Grade C" }],
    });
  });

  // After running the tests, close the Prisma client.
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should respond with a status code of 200", async () => {
    const response = await request(app).get("/grades");
    expect(response.status).toBe(200);
  });

  it("should return an array of grades", async () => {
    const response = await request(app).get("/grades");
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should return the expected grade names", async () => {
    const response = await request(app).get("/grades");
    const gradeNames = response.body.map(
      (grade: { name: string }) => grade.name
    );
    expect(gradeNames).toEqual(["Grade A", "Grade B", "Grade C"]);
  });

  // Add more test cases as needed.
});
