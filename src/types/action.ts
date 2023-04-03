import INote from "./note";
import ITag from "./tag";

export interface IAction {
  type: Types;
  payload: {
    note: INote;
    title?: string;
    content?: string;
    tag?: ITag;
  };
}

export const enum Types {
  addNote = "ADD_NOTE",
  updateTitle = "UPDATE_TITLE",
  updateContent = "UPDATE_CONTENT",
  deleteNote = "DELETE_NOTE",
  addTag = "ADD_TAG",
}
