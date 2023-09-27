export interface IUpdateExam {
  id: string;
  subject: string;
  grade: string;
  selectedDate: string;
  selectedTime: string;
  topic: string;
  updated?: false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle?: () => {};
}

export interface IUpdateAPI {
  id: string;
}
