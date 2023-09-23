import { Dayjs } from "dayjs";
import { IDisabled } from "./IDisable";

export interface ITimeField extends IDisabled {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}
