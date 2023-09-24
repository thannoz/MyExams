import { IExamFooter } from "./IExamFooter";
import { IExamHeader } from "./IExamHeader";
import { IExamTimeDate } from "./IExamTimeDate";
import { IExamTopic } from "./IExamTopic";

export interface IExam
  extends IExamHeader,
    IExamTimeDate,
    IExamTopic,
    IExamFooter {}
