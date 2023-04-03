import { IAction, Types } from "../types/action";
import INote from "../types/note";
import ITag from "../types/tag";

export const updateNoteTitleAction = (note: INote, title: string): IAction => {
  return {
    type: Types.updateTitle,
    payload: {
      note,
      title,
    },
  };
};

export const updateNoteContentAction = (
  note: INote,
  content: string
): IAction => {
  return {
    type: Types.updateContent,
    payload: {
      note,
      content,
    },
  };
};

export const addNoteTagAction = (note: INote, tag: ITag): IAction => {
  return {
    type: Types.addTag,
    payload: {
      note,
      tag,
    },
  };
};

export const addNoteAction = (note: INote): IAction => {
  return {
    type: Types.addNote,
    payload: {
      note,
    },
  };
};

export const deleteNoteAction = (note: INote): IAction => {
  return {
    type: Types.deleteNote,
    payload: {
      note,
    },
  };
};
