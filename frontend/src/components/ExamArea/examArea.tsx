import React, { FC, ReactElement, useContext, useEffect } from "react";
import { Box, Grid, Alert, LinearProgress, Typography } from "@mui/material";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { IExamAPI } from "./interfaces/IExamAPI";
import { Exam } from "components/Exam/Exam";
import {
  extractDatePortion,
  extractTimePortion,
} from "./helpers/extractTimePortion";
import { StatusChangeContext } from "../../context";
import { orderExams } from "components/CreateExamForm/helpers/orderExams";
// import { IUpdateTask } from "../task/interfaces/IUpdateTask";
interface SearchProps {
  searchValue: string;
}

const ExamArea: FC<SearchProps> = ({ searchValue }): ReactElement => {
  const taskUpdatedContext = useContext(StatusChangeContext);
  const { error, isLoading, data, refetch } = useQuery(["exams"], async () => {
    console.log("Data from api:", data);
    return await sendApiRequest<IExamAPI[]>(
      "http://localhost:3200/exams",
      "GET"
    );
  });
  const orderedExams = data?.sort(orderExams);
  const filteredExams = orderedExams?.filter((exam) =>
    exam.subject.toLowerCase().includes(searchValue.toLowerCase())
  );

  // update task mutation
  //   const updateTaskMutation = useMutation((data: IUpdateTask) =>
  //     sendApiRequest<IUpdateTask>("http://localhost:3200/exams", "PUT", data)
  //   );

  useEffect(() => {
    refetch();
    console.log("refected data from DB");
  }, [taskUpdatedContext.updated]);

  /*This usseEffect updates if an exam has been created.'
    When this happens, the useEffect above fires to refetch 
    the current state from the DB.
   */
  //   useEffect(() => {
  //     if (updateTaskMutation.isSuccess) {
  //       //   taskUpdatedContext.toggle();
  //     }
  //   }, [updateTaskMutation.isSuccess]);

  //   const onMarkCompleteHandler = (
  //     e:
  //       | React.MouseEvent<HTMLButtonElement>
  //       | React.MouseEvent<HTMLAnchorElement>,
  //     id: string
  //   ) => {
  //     updateTaskMutation.mutate({
  //       id,
  //       status: Status.completed,
  //     });
  //   };

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Klausurtermine Stand:{" "}
          {format(new Date(), "EEEE, d. MMMM yyyy", { locale: de })}
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <>
          {error && (
            <Alert severity="error">
              Error occured while fetching your exams.
            </Alert>
          )}
        </>
        {/* Exam component belongs here */}
        {isLoading && <LinearProgress />}
        {searchValue
          ? filteredExams?.map((fe, idx) => (
              <Exam
                id={fe.id}
                key={idx + fe.clerkUserID}
                grade={fe.grade}
                subject={fe.subject}
                topic={fe.topic}
                examDate={extractDatePortion(fe.examDate)}
                examTime={extractTimePortion(fe.examTime)}
                onClick={function (
                  e:
                    | React.MouseEvent<HTMLButtonElement, MouseEvent>
                    | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                  id: string
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))
          : Array.isArray(orderedExams) &&
            orderedExams.length > 0 &&
            orderedExams.map((d, idx) => (
              <Exam
                id={d.id}
                key={idx + d.clerkUserID}
                grade={d.grade}
                subject={d.subject}
                topic={d.topic}
                examDate={extractDatePortion(d.examDate)}
                examTime={extractTimePortion(d.examTime)}
                onClick={function (
                  e:
                    | React.MouseEvent<HTMLButtonElement, MouseEvent>
                    | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                  id: string
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))}
      </Grid>
    </Grid>
  );
};

export default ExamArea;
