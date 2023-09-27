import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { ExamHeader } from "./_examHeader";
import { ExamTimeDate } from "./_examTimeDate";
import { ExamTopic } from "./_examTopic";
import { ExamFooter } from "./_examFooter";
import { IExam } from "./interfaces/IExam";

export const Exam: FC<IExam> = (props): ReactElement => {
  console.log("props in Exam:", props);
  const {
    subject = "Test subject",
    grade = "Test grade",
    examDate = "Test exam date",
    examTime = "Test time",
    topic = "Test topic",
    id,
    onUpdateExamHandler = () => {
      console.log("updating handler triggered", props);
    },
    onDeleteExamHandler = (e) => {
      console.log(e);
    },
  } = props;
  // dummy click handler
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "black",
        boxShadow: 3,
      }}
    >
      <ExamHeader subject={subject} grade={grade} />
      <ExamTimeDate examDate={examDate} examTime={examTime} />
      <ExamTopic topic={topic} />
      <ExamFooter
        id={id}
        onUpdateExamHandler={onUpdateExamHandler}
        onDeleteExamHandler={onDeleteExamHandler}
      />
    </Box>
  );
};
