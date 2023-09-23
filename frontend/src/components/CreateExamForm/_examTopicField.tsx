import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";

import { ITopicField } from "./interfaces/ITopicField";

const ExamTopicField: FC<ITopicField> = (props): ReactElement => {
  const { disabled = false, onChange = (e) => console.log(e) } = props;
  return (
    <TextField
      id="topic"
      label="Bemerkung"
      placeholder="Bermerkung"
      variant="outlined"
      size="small"
      name="bemerkung"
      multiline
      rows={5}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default ExamTopicField;
