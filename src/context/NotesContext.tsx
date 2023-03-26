import React, { createContext, useEffect, useReducer } from "react";
import { readDataFromStorage, writeDataToStorage } from "../utils/utils";
import INote from "../types/note";

interface IAction {
  type: string;
  payload: INote[];
}

interface IState {
  notes: INote[];
  dispatch?: React.Dispatch<IAction>;
}

interface IProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY: string = "notes";

const INITIAL_STATE: IState = {
  notes: readDataFromStorage<INote>(STORAGE_KEY),
};

const NotesContext = createContext<IState>(INITIAL_STATE);

const notesReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "UPDATE_NOTES":
      return {
        notes: [...action.payload],
      };
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
