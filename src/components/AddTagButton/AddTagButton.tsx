import React, { useContext } from "react";
import ITag from "../../types/tag";
import Tag from "../Tag";
import "./AddTagButton.scss";
import INote from "../../types/note";
import { NotesContext } from "../../context/NotesContext";
import { addNoteTagAction } from "../../context/NotesActions";
import { colors } from "../../types/colors";

interface IAddTagButton {
  note: INote;
}

const AddTagButton: React.FC<IAddTagButton> = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

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

  const handleAddTag = (): void => {
    if (colors.length === 0) return;

    const color = getRandomColor();
    const tag: ITag = { text: "#money", color };
    dispatch?.(addNoteTagAction(note, tag));
  };

  return (
    <div className="add-tag-button" onClick={() => handleAddTag()}>
      <Tag text={"+"} color={"red"} />
    </div>
  );
};

export default AddTagButton;
