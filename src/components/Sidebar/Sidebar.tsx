import React, { useContext } from "react";
import INote from "../../types/note";
import uuid from "react-uuid";
import "./Sidebar.scss";

import { NoteCard, Button } from "../";
import { NotesContext, updateNotesAction } from "../../context/NotesContext";

const Sidebar: React.FC = () => {
  const { notes, dispatch } = useContext(NotesContext);

  const handleAddNote = (): void => {
    const newNote: INote = {
      id: uuid().toString(),
      title: "Untitled",
      content: "",
      date: Date.now().toString(),
      tags: [],
    };
    const newNotesList: INote[] = [...notes, newNote];
    dispatch?.(updateNotesAction(newNotesList));
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {notes && notes.map((note) => <NoteCard key={note.id} {...note} />)}
      </ul>
      <Button color={"blue"} handleClick={handleAddNote}>
        Add note
      </Button>
    </div>
  );
};

export default Sidebar;
