import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
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
import {
  orderExams,
  updateExamRequest,
} from "components/CreateExamForm/helpers/orderExams";
import { IUpdateExam } from "components/Exam/interfaces/IUpdateExam";
import { IDeleteExam } from "components/Exam/interfaces/IDeleteExam";
import { ICreateExam } from "components/CreateExamForm/interfaces/ICreateExam";
import dayjs, { Dayjs } from "dayjs";

interface SearchProps {
  searchValue: string;
}

const ExamArea: FC<SearchProps> = ({ searchValue }): ReactElement => {
  const [editingExam, setEditingExam] = useState<ICreateExam | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [topic, setTopic] = useState<string>("");

  const examUpdatedContext = useContext(StatusChangeContext);
  const { error, isLoading, data, refetch } = useQuery(["exams"], async () => {
    // console.log("Data from api:", data);
    return await sendApiRequest<IExamAPI[]>(
      "http://localhost:3200/exams",
      "GET"
    );
  });

  //update exam mutation
  const updateExamMutation = useMutation((data: IUpdateExam) =>
    sendApiRequest(`http://localhost:3200/exams/${data.id}`, "PUT", data)
  );

  //delete exam mutation
  const deleteExamMutation = useMutation((data: IDeleteExam) =>
    sendApiRequest<IDeleteExam>(
      `http://localhost:3200/exams/${data.id}`,
      "DELETE",
      data
    )
  );

  const orderedExams = data?.sort(orderExams);
  const filteredExams = orderedExams?.filter((exam) =>
    exam.subject.toLowerCase().includes(searchValue.toLowerCase())
  );

  const updateExamHandler = async (id: string) => {
    if (!editingExam) return;
    const updatedExam: ICreateExam = {
      ...editingExam,
      subject,
      grade,
      examDate: String(selectedDate),
      examTime: selectedTime?.toDate().toString() || "",
      topic,
    };
    // setEditingExam(updatedExam);

    const myUpdatedExam = await updateExamRequest(id, updatedExam);
    console.log("exam:", myUpdatedExam);
  };

  const deleteExamHandler = (id: string) => {
    deleteExamMutation.mutate({ id });
  };

  useEffect(() => {
    refetch();
    console.log("refected data from DB");
  }, [examUpdatedContext.updated]);

  /*This usseEffect updates if an exam has been created, delete or edited.'
    When this happens, the useEffect above fires to refetch 
    the current state from the DB.
   */
  useEffect(() => {
    if (updateExamMutation.isSuccess || deleteExamMutation.isSuccess) {
      examUpdatedContext.toggle();
    }
  }, [updateExamMutation.isSuccess, deleteExamMutation.isSuccess]);

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
                onUpdateExamHandler={updateExamHandler}
                onDeleteExamHandler={deleteExamHandler}
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
                onUpdateExamHandler={updateExamHandler}
                onDeleteExamHandler={deleteExamHandler}
              />
            ))}
      </Grid>
    </Grid>
  );
};

export default ExamArea;
