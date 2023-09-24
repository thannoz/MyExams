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
// import { ITaskApi } from "./interfaces/ITaskApi";
// import { Status } from "../createTaskForm/enums/Status";
// import { IUpdateTask } from "../task/interfaces/IUpdateTask";
// import { countTasks } from "./helpers/countTasks";
// import { TaskCounterStatus } from "../taskCounter/interfaces/ITaskCounter";
// import { StatusChangeContext } from "../../context";

const ExamArea: FC = (): ReactElement => {
  //   const taskUpdatedContext = useContext(StatusChangeContext);
  const { error, isLoading, data, refetch } = useQuery(["exams"], async () => {
    console.log("Data from api:", data);
    return await sendApiRequest<IExamAPI[]>(
      "http://localhost:3200/exams",
      "GET"
    );
  });

  // update task mutation
  //   const updateTaskMutation = useMutation((data: IUpdateTask) =>
  //     sendApiRequest<IUpdateTask>("http://localhost:3200/tasks", "PUT", data)
  //   );

  useEffect(() => {
    refetch();
    console.log("refected data from DB");
  }, []);
  //   }, [taskUpdatedContext.updated]);

  /*This usseEffect update if a task changes i.e. marked as 'completed'
    or set to 'inProgress'
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
              Error occured while fetching your tasks.
            </Alert>
          )}
        </>
        {/* Exam component belongs here */}
        {isLoading ? (
          <LinearProgress />
        ) : (
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((d, idx) => (
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
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default ExamArea;
