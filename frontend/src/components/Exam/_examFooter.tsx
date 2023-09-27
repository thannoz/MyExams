import { Box, Button } from "@mui/material";
import { FC, ReactElement } from "react";

import { IExamFooter } from "./interfaces/IExamFooter";

export const ExamFooter: FC<IExamFooter> = (props): ReactElement => {
  const {
    id,
    onUpdateExamHandler = (e) => console.log(e),
    onDeleteExamHandler = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: "#000",
          // fontFamily: "Lato, sans-serif",
          fontWeight: "normal",
          "&:hover": { backgroundColor: "#adadad" },
          boxShadow: 3,
        }}
        onClick={(e) => onUpdateExamHandler(id)}
      >
        Bearbeiten
      </Button>
      <Button
        variant="outlined"
        // color="info"
        size="medium"
        sx={{
          color: "#000",
          // fontFamily: "Lato, sans-serif",
          fontWeight: "normal",
          "&:hover": { backgroundColor: "#adadad" },
          boxShadow: 3,
        }}
        onClick={(e) => onDeleteExamHandler(id)}
      >
        Geschrieben markieren
      </Button>
    </Box>
  );
};
