import { IDisabled } from "./IDisable";

export interface ITopicField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
