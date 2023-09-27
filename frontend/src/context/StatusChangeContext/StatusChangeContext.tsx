import { Dayjs } from "dayjs";
import React, {
  ReactElement,
  createContext,
  FC,
  PropsWithChildren,
  useState,
} from "react";

export const StatusChangeContext = createContext({
  subject: "",
  grade: "",
  selectedDate: "",
  selectedTime: "",
  topic: "",
  updated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export const StatusChangeContextProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true);
  };

  return (
    <StatusChangeContext.Provider
      value={{
        subject: subject,
        grade: grade,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        topic: topic,
        updated: updated,
        toggle: toggleHandler,
      }}
    >
      {children}
    </StatusChangeContext.Provider>
  );
};
