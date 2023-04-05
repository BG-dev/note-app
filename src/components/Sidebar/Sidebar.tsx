import React, { useContext } from "react";
import INote from "../../types/note";
import uuid from "react-uuid";
import "./Sidebar.scss";

import { NoteCard, Button } from "../";
import { NotesContext } from "../../context/NotesContext";
import { addNoteAction } from "../../context/NotesActions";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { notes, dispatch } = useContext(NotesContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAddNote = (): void => {
    const newNote: INote = {
      id: uuid().toString(),
      title: "Untitled",
      content: "",
      date: Date.now().toString(),
      tags: [],
    };
    dispatch?.(addNoteAction(newNote));
    navigate(`/${newNote.id}`);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2>All Notes</h2>
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__list">
          {notes &&
            notes.map((note) => (
              <NoteCard key={note.id} selected={note.id === id} {...note} />
            ))}
        </ul>
        <Button color={"blue"} handleClick={handleAddNote}>
          Add note
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
