import React, {
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import INote from "../../types/note";
import { NotesContext } from "../../context/NotesContext";
import {
  updateNoteTitleAction,
  updateNoteContentAction,
  deleteNoteAction,
} from "../../context/NotesActions";
import { Button, TextArea, TagsList } from "../../components";
import "./Note.scss";

const MIN_TITLE_LENGTH = 0;
const MAX_TITLE_LENGTH = 15;

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
    dispatch?.(deleteNoteAction(note));
  };

  const handleChangeNoteTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleChangeNoteContent = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContent(e.target.value);
  };

  const setNoteTitle = (titleText: string): void => {
    if (note === null) return;
    if (
      titleText.length > MIN_TITLE_LENGTH &&
      titleText.length <= MAX_TITLE_LENGTH
    ) {
      dispatch?.(updateNoteTitleAction(note, titleText));
    }
  };

  const handleSaveNoteContent = (): void => {
    if (note === null) return;
    dispatch?.(updateNoteContentAction(note, content));
  };

  const handleOnBlurInput = (
    e: FocusEvent<HTMLInputElement>,
    handler: (text: string) => void
  ): void => {
    const text = e.currentTarget.value;
    handler(text);
  };

  const handleOnPressEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    handler: (text: string) => void
  ): void => {
    if (e.key !== "Enter") return;
    const text = e.currentTarget.value;
    handler(text);
    e.currentTarget.blur();
  };

  return (
    <div className="note">
      <div className="note__container">
        <div className="note__header">
          <input
            type={"text"}
            className="note__header-title input"
            value={title}
            onChange={handleChangeNoteTitle}
            onBlur={(e) => handleOnBlurInput(e, setNoteTitle)}
            onKeyDown={(e) => handleOnPressEnter(e, setNoteTitle)}
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
          {note && <TagsList note={note} />}
        </div>
      </div>
    </div>
  );
};

export default Note;
