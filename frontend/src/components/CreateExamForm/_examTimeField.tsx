import React, { FC, ReactElement } from "react";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { ITimeField } from "./interfaces/ITimeField";

dayjs.extend(utc);
dayjs.extend(timezone);

const ExamTimeField: FC<ITimeField> = (props): ReactElement => {
  const {
    value = dayjs.tz("2022-04-17T15:30", "Europe/Paris"),
    disabled = false,
    onChange = (curTime) => console.log(curTime),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileTimePicker"]}>
          <MobileTimePicker
            label="Uhrzeit"
            value={value}
            onChange={onChange}
            disabled={disabled}
            format="HH:mm"
            sx={{ width: "100%" }}
            timezone="Europe/Paris"
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default ExamTimeField;
