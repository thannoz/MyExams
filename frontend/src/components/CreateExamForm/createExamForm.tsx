import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useContext,
} from "react";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { ICreateExam } from "./interfaces/ICreateExam";
import { sendApiRequest } from "./../../helpers/sendApiRequest";
import { Box, Button, Stack } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { Grades } from "./enums/grades";
import { Subjects } from "./enums/Subjects";
import ExamSelectField from "./_examSelectField";
import ExamTopicField from "./_examTopicField";
import ExamDateField from "./_examDateField";
import ExamTimeField from "./_examTimeField";

export const CreateExamForm: FC = (): ReactElement => {
  const [subject, setSubject] = useState<string>(Subjects.LF12);
  const [grade, setGrade] = useState<string>(Grades._12ITA);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>();
  const [topic, setTopic] = useState<string>("");

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const teacher = useUser();

  // Änderung der port wenn APIs gebaut werden
  const createExamMutation = useMutation((data: ICreateExam) =>
    sendApiRequest<ICreateExam>("http://localhost:3200/exams", "POST", data)
  );

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
    console.log("The created exam: ", exam);
  };

  useEffect(() => {
    if (createExamMutation.isSuccess) {
      setShowSuccess(true);
      //taskUpdatedContext.toggle();
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

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
            items={[
              { value: Subjects.Englisch, label: Subjects.Englisch },
              { value: Subjects.Deutsch, label: Subjects.Deutsch },
              { value: Subjects.Ethik, label: Subjects.Ethik },
              { value: Subjects.PoWi, label: Subjects.PoWi },
              { value: Subjects.LF1, label: Subjects.LF1 },
              { value: Subjects.LF2, label: Subjects.LF2 },
              { value: Subjects.LF3, label: Subjects.LF3 },
              { value: Subjects.LF4, label: Subjects.LF4 },
              { value: Subjects.LF5, label: Subjects.LF5 },
              { value: Subjects.LF6, label: Subjects.LF6 },
              { value: Subjects.LF7, label: Subjects.LF7 },
              { value: Subjects.LF8, label: Subjects.LF8 },
              { value: Subjects.LF9, label: Subjects.LF9 },
              { value: Subjects.LF10, label: Subjects.LF10 },
              { value: Subjects.LF11, label: Subjects.LF11 },
              { value: Subjects.LF12, label: Subjects.LF12 },
            ]}
          />
          <ExamSelectField
            disabled={createExamMutation.isLoading}
            label="Klasse"
            name="Klasse"
            value={grade}
            onChange={(e) => setGrade(e.target.value as string)}
            items={[
              { value: Grades._12ITA, label: Grades._12ITA },
              { value: Grades._11ITA, label: Grades._11ITA },
              { value: Grades._10ITA, label: Grades._10ITA },
              { value: Grades._12ITC, label: Grades._12ITC },
              { value: Grades._11ITC, label: Grades._11ITC },
              { value: Grades._10ITC, label: Grades._10ITC },
            ]}
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
