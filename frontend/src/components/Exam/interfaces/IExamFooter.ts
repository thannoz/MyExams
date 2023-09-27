import React from "react";

export interface IExamFooter {
  id: string;
  onUpdateExamHandler: (id: string) => void;
  onDeleteExamHandler: (id: string) => void;
}
