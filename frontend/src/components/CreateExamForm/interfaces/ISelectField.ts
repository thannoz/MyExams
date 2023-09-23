import { IDisabled } from "./IDisable";

export interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
  items?: ISelectItems[];
}
