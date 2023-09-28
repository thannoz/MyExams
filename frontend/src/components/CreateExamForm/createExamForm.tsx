import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useContext,
} from "react";
import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateExam } from "./interfaces/ICreateExam";
import { sendApiRequest } from "./../../helpers/sendApiRequest";
import { Box, Button, Stack } from "@mui/material";
import { Dayjs } from "dayjs";

import ExamSelectField from "./_examSelectField";
import ExamTopicField from "./_examTopicField";
import ExamDateField from "./_examDateField";
import ExamTimeField from "./_examTimeField";
import { StatusChangeContext } from "../../context";
import { IUpdateAPI } from "components/Exam/interfaces/IUpdateExam";
import { ILoadSubjects } from "./interfaces/ILoadSubjetc";

export const CreateExamForm: FC = (): ReactElement => {
  const [subject, setSubject] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [topic, setTopic] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const examUpdatedContext = useContext(StatusChangeContext);
  const teacher = useUser();

  // load subjects mutation (this function loads subjects from the api)
  const { data: subjectData } = useQuery(["subjects"], async () => {
    // console.log("Data from api:", data);
    return await sendApiRequest<ILoadSubjects[]>(
      "http://localhost:3200/exams/subjects",
      "GET"
    );
  });

  // load grades mutation (this function loads grades from the api)
  const { data: gradesData } = useQuery(["grades"], async () => {
    // console.log("Data from api:", data);
    return await sendApiRequest<ILoadSubjects[]>(
      "http://localhost:3200/exams/grades",
      "GET"
    );
  });

  // create exam mutation mutation
  const createExamMutation = useMutation((data: ICreateExam) =>
    sendApiRequest<ICreateExam>("http://localhost:3200/exams", "POST", data)
  );

  //update exam mutation
  const updateExamMutation = useMutation((updateData: IUpdateAPI) =>
    sendApiRequest(
      `http://localhost:3200/exams/${updateData.id}`,
      "PUT",
      updateData
    )
  );

  // create a new exam handler
  const createExamHandler = () => {
    if (!subject || !grade || !selectedDate || !selectedTime) {
      return;
    }

    const exam: ICreateExam = {
      clerkUserID: teacher.user?.id!,
      subject,
      grade,
      examDate: selectedDate.toString(),
      examTime: selectedTime.toDate().toString(),
      topic,
      createdAt: new Date().toString(),
    };

    createExamMutation.mutate(exam);
    // console.log("The created exam: ", exam);
    setSubject("");
    setGrade("");
    setSelectedDate(null);
    setSelectedTime(null);
    setTopic("");
  };

  // update exam had issues...
  const updateExamHandler = () => {
    const exam: ICreateExam = {
      clerkUserID: teacher.user?.id!,
      subject,
      grade,
      examDate: String(selectedDate),
      examTime: String(selectedTime),
      topic,
      createdAt: new Date().toString(),
    };
    // console.log("obj to update: ", exam);
    updateExamMutation.mutate({
      ...exam,
      id: "",
    });
  };

  useEffect(() => {
    if (createExamMutation.isSuccess) {
      setShowSuccess(true);
      examUpdatedContext.toggle();
    }

    // This time out is for the alert message to be shown
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    // After 5 seconds we delete the alert message
    return () => {
      clearTimeout(successTimeout);
    };
  }, [createExamMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      height="100%"
      px={4}
      my={6}
    >
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <ExamSelectField
            disabled={createExamMutation.isLoading}
            label="Fach"
            name="Fach"
            value={subject}
            onChange={(e) => setSubject(e.target.value as string)}
            items={subjectData}
          />
          <ExamSelectField
            disabled={createExamMutation.isLoading}
            label="Klasse"
            name="Klasse"
            value={grade}
            onChange={(e) => setGrade(e.target.value as string)}
            items={gradesData}
          />
        </Stack>
        {/* Time and Date field belong here */}
        <ExamDateField
          value={selectedDate}
          disabled={createExamMutation.isLoading}
          onChange={(date) => setSelectedDate(date)}
        />
        <ExamTimeField
          disabled={createExamMutation.isLoading}
          value={selectedTime}
          onChange={(curTime) => setSelectedTime(curTime)}
        />
        <ExamTopicField
          disabled={createExamMutation.isLoading}
          onChange={(e) => setTopic(e.target.value)}
        />

        <Button
          disabled={!selectedTime || !selectedDate || !subject || !grade}
          onClick={createExamHandler}
          variant="contained"
          size="large"
          fullWidth
          sx={{ backgroundColor: "black" }}
        >
          Create Exam
        </Button>
      </Stack>
    </Box>
  );
};
