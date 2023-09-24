import { Box, Button } from "@mui/material";
import React, { FC, ReactElement } from "react";

import { IExamFooter } from "./interfaces/IExamFooter";

export const ExamFooter: FC<IExamFooter> = (props): ReactElement => {
  const { id, onClick = (e) => console.log(e) } = props;

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" mt={4}>
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e, id)}
      >
        Geschrieben markieren
      </Button>
    </Box>
  );
};
