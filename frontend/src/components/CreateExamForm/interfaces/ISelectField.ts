import { IDisabled } from "./IDisable";
import { ILoadSubjects } from "./ILoadSubjetc";

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
  items?: ILoadSubjects[];
}
