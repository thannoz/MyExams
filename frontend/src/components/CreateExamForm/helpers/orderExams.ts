import { IExamAPI } from "./../../ExamArea/interfaces/IExamAPI";
export const orderExams = (a: IExamAPI, b: IExamAPI): number => {
  const dateA = new Date(a.examDate).toDateString();
  const dateB = new Date(b.examDate).toDateString();

  // compare the exam dates
  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }

  // if dates are the same, compare the exam times
  const timeA = new Date(a.examTime);
  const timeB = new Date(b.examTime);

  if (timeA < timeB) {
    return -1;
  }
  if (timeA > timeB) {
    return 1;
  }

  return 0;
};
