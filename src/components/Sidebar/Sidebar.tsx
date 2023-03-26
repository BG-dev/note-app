import React, { useState, useEffect } from "react";
import INote from "../../types/note";
import uuid from "react-uuid";
import "./Sidebar.scss";

import { NoteCard, Button } from "../";

const Sidebar: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    // const getNotes = () => {
    //   const notesData = readDataFromStorage<INote>();
    //   if (notesData != null) setNotes(notesData);
    // };
    // getNotes();
  }, []);

  const handleAddNote = () => {
    const newNote: INote = {
      id: uuid().toString(),
      title: "Untitled",
      content: "",
      date: Date.now().toString(),
      tags: [],
    };
    const newNotesList = [...notes, newNote];
    setNotes(newNotesList);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {notes && notes.map((note) => <NoteCard key={note.id} {...note} />)}
      </ul>
      <Button text={"Add note"} color={"blue"} handleClick={handleAddNote} />
    </div>
  );
};

export default Sidebar;
