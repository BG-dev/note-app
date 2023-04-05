import React, {
  useContext,
  useState,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useEffect,
} from "react";
import ITag from "../../types/tag";
import "./AddTagButton.scss";
import INote from "../../types/note";
import { NotesContext } from "../../context/NotesContext";
import { addNoteTagAction } from "../../context/NotesActions";
import { colors } from "../../types/colors";

interface IAddTagButton {
  note: INote;
}

const MIN_TEXT_LENGTH = 0;
const MAX_TEXT_LENGTH = 15;

const AddTagButton: React.FC<IAddTagButton> = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const [isEditable, setIsEditable] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [tagColor, setTagColor] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditable) ref.current?.focus();
  }, [isEditable]);

  useEffect(() => {
    setNewTagColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.tags]);

  const getRandomColor = (): string => {
    let number = Math.floor(Math.random() * colors.length);

    if (note.tags.length !== 0) {
      const lastTagColor = note.tags[note.tags.length - 1].color;
      while (colors[number] === lastTagColor) {
        number = Math.floor(Math.random() * colors.length);
      }
    }

    return colors[number];
  };

  const setNewTagColor = () => {
    const color = getRandomColor();
    setTagColor(color);
  };

  const addTag = (text: string): void => {
    if (text === "") return;

    const tag: ITag = { text, color: tagColor };
    if (text.length > MIN_TEXT_LENGTH && text.length <= MAX_TEXT_LENGTH) {
      dispatch?.(addNoteTagAction(note, tag));
    }
  };

  const handleClickButton = (): void => {
    setIsEditable(true);
  };

  const stopEditing = (): void => {
    setIsEditable(false);
    setTagValue("");
  };

  const handleChangeTag = (e: ChangeEvent<HTMLInputElement>): void => {
    setTagValue(e.target.value);
  };

  const handleClickInput = (e: MouseEvent<HTMLInputElement>): void => {
    e.stopPropagation();
  };

  const handleSaveInput = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== "Enter") return;
    const text = e.currentTarget.value;
    stopEditing();
    addTag(text);
  };

  return (
    <li
      className={"add-tag"}
      style={{ backgroundColor: `#${tagColor}` }}
      onClick={handleClickButton}
    >
      {isEditable ? (
        <input
          type="text"
          ref={ref}
          className={"add-tag__input input"}
          onClick={(e) => handleClickInput(e)}
          value={tagValue}
          onChange={handleChangeTag}
          onBlur={stopEditing}
          onKeyDown={handleSaveInput}
        />
      ) : (
        <span className="tag__text">{"+"}</span>
      )}
    </li>
  );
};

export default AddTagButton;
