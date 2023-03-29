import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import INote from "../../types/note";
import { NotesContext, updateNotesAction } from "../../context/NotesContext";
import { Button, Input } from "../../components";
import "./Note.scss";

const Note: React.FC = () => {
  const { id } = useParams();
  const { notes, dispatch } = useContext(NotesContext);
  const note: INote | null = notes.find((note) => note.id === id) || null;
  let noteTitle: string = note?.title || "Untitled";
  const [title, setTitle] = useState(noteTitle);

  useEffect(() => {
    setTitle(noteTitle);
  }, [noteTitle]);

  const handleDeleteNote = (): void => {
    if (note === null) return;
    let newNotesList: INote[] = [...notes];
    const noteIndex: number = notes.indexOf(note);
    newNotesList.splice(noteIndex, 1);
    dispatch?.(updateNotesAction(newNotesList));
  };

  const handleChangeNoteTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSaveNoteTitle = (): void => {
    if (note === null) return;
    let newNotesList: INote[] = [...notes];
    const noteIndex: number = notes.indexOf(note);
    newNotesList[noteIndex] = { ...note, title };
    dispatch?.(updateNotesAction(newNotesList));
  };
  return (
    <div className="note">
      <div className="note__container">
        <div className="note__header">
          <Input
            type={"text"}
            value={title}
            onChange={handleChangeNoteTitle}
            onBlur={handleSaveNoteTitle}
            placeholder={note?.title || "Untitled"}
            spellCheck={false}
          />
          <Button color={"red"} handleClick={handleDeleteNote}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Note;
