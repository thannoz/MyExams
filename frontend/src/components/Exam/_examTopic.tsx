import { Box, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { IExamTopic } from "./interfaces/IExamTopic";
import PropTypes from "prop-types";

export const ExamTopic: FC<IExamTopic> = ({
  topic = "My default description. lorem ipsum dolor sit amet, consectetur adip e ea commodo",
}): ReactElement => {
  return (
    <Box>
      <Typography>{topic}</Typography>
    </Box>
  );
};
