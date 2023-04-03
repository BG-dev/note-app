import React, { createContext, useEffect, useReducer } from "react";
import { readDataFromStorage, writeDataToStorage } from "../utils/utils";
import INote from "../types/note";
import { IAction, Types } from "../types/action";

interface IState {
  notes: INote[];
  dispatch?: React.Dispatch<IAction>;
}

interface IProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY: string = "notes";

const INITIAL_STATE: IState = {
  notes: readDataFromStorage<INote>(STORAGE_KEY) || [],
};

const NotesContext = createContext<IState>(INITIAL_STATE);

const notesReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case Types.updateTitle: {
      if (!action.payload.title) return state;
      let newNotesList: INote[] = [...state.notes];
      const noteIndex: number = state.notes.indexOf(action.payload.note);
      newNotesList[noteIndex] = {
        ...action.payload.note,
        title: action.payload.title,
      };
      return {
        notes: [...newNotesList],
      };
    }
    case Types.updateContent: {
      if (!action.payload.content) return state;
      let newNotesList: INote[] = [...state.notes];
      const noteIndex: number = state.notes.indexOf(action.payload.note);
      newNotesList[noteIndex] = {
        ...action.payload.note,
        content: action.payload.content,
      };
      return {
        notes: [...newNotesList],
      };
    }
    case Types.addTag: {
      if (!action.payload.tag) return state;
      let newNotesList: INote[] = [...state.notes];
      const noteIndex: number = state.notes.indexOf(action.payload.note);
      newNotesList[noteIndex] = {
        ...action.payload.note,
        tags: [...action.payload.note.tags, action.payload.tag],
      };
      return {
        notes: [...newNotesList],
      };
    }
    case Types.deleteNote: {
      let newNotesList: INote[] = [...state.notes];
      const noteIndex: number = state.notes.indexOf(action.payload.note);
      newNotesList.splice(noteIndex, 1);
      return {
        notes: [...newNotesList],
      };
    }
    case Types.addNote: {
      return {
        notes: [...state.notes, action.payload.note],
      };
    }
    default:
      return state;
  }
};

const NotesContextProvider: React.FC<IProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  useEffect(() => {
    writeDataToStorage(state.notes, STORAGE_KEY);
  }, [state.notes]);

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        dispatch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContextProvider, NotesContext };
