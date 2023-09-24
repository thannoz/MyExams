import { Box, Chip } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { IExamTimeDate } from "./interfaces/IExamTimeDate";

export const ExamTimeDate: FC<IExamTimeDate> = ({
  examDate = "date",
  examTime = "Default Title",
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "30px", marginRight: "10px" }}>Uhrzeit: </span>
        <Chip
          sx={{
            fontSize: "30px",
          }}
          variant="filled"
          label={examTime}
        />
      </Box>
      <Box fontSize={"40px"}>
        <span style={{ fontSize: "30px", marginRight: "10px" }}>Datum: </span>
        <Chip sx={{ fontSize: "30px" }} variant="filled" label={examDate} />
      </Box>
    </Box>
  );
};
