import { Box, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { IExamHeader } from "./interfaces/IExamHeader";

export const ExamHeader: FC<IExamHeader> = ({
  subject = "LF12",
  grade = "12ITA",
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h5">{subject}</Typography>
      </Box>
      <Box>
        <Typography variant="h5">{grade}</Typography>
      </Box>
    </Box>
  );
};
