import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { ExamHeader } from "./_examHeader";
import { ExamTimeDate } from "./_examTimeDate";
import { ExamTopic } from "./_examTopic";
import { ExamFooter } from "./_examFooter";
import { IExam } from "./interfaces/IExam";

export const Exam: FC<IExam> = (props): ReactElement => {
  const {
    subject = "Test subject",
    grade = "Test grade",
    examDate = "Test exam date",
    examTime = "Test time",
    topic = "Test topic: Schaut euch Pointer in C++ an.",
    id,
    onClick = (e) => {
      console.log(e);
    },
  } = props;
  // dummy click handler
  const onClickHandler = () => {
    console.log("Klausur als erledigt marktiert.");
  };
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
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "black",
      }}
    >
      <ExamHeader subject={subject} grade={grade} />
      <ExamTimeDate examDate={examDate} examTime={examTime} />
      <ExamTopic topic={topic} />
      <ExamFooter id={id} onClick={onClickHandler} />
    </Box>
  );
};
