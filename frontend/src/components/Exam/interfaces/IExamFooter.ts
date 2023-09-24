import React from "react";

export interface IExamFooter {
  id: string;
  onClick: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}
