import React, { FC, ReactElement } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IDateField } from "./interfaces/IDateField";

const ExamDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Klausurdatum"
          value={value}
          onChange={onChange}
          disabled={disabled}
          format="dd/MM/yyyy"
        />
      </LocalizationProvider>
    </>
  );
};

export default ExamDateField;
