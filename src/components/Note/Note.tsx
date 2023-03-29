import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import INote from "../../types/note";
import { NotesContext, updateNotesAction } from "../../context/NotesContext";
import { Button, Input, TextArea } from "../../components";
import "./Note.scss";

const Note: React.FC = () => {
  const { id } = useParams();
  const { notes, dispatch } = useContext(NotesContext);
  const note: INote | null = notes.find((note) => note.id === id) || null;
  let noteTitle: string = note?.title || "Untitled";
  let noteContent: string = note?.content || "";
  const [title, setTitle] = useState(noteTitle);
  const [content, setContent] = useState(noteContent);

  useEffect(() => {
    setTitle(noteTitle);
  }, [noteTitle]);

  useEffect(() => {
    setContent(noteContent);
  }, [noteContent]);

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

  const handleChangeNoteContent = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContent(e.target.value);
  };

  const handleSaveNoteTitle = (): void => {
    if (note === null) return;
    let newNotesList: INote[] = [...notes];
    const noteIndex: number = notes.indexOf(note);
    newNotesList[noteIndex] = { ...note, title };
    dispatch?.(updateNotesAction(newNotesList));
  };

  const handleSaveNoteContent = (): void => {
    if (note === null) return;
    let newNotesList: INote[] = [...notes];
    const noteIndex: number = notes.indexOf(note);
    newNotesList[noteIndex] = { ...note, content };
    console.log(newNotesList);
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
        <div className="note__content">
          <TextArea
            value={content}
            onChange={handleChangeNoteContent}
            onBlur={handleSaveNoteContent}
            spellCheck={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
