import React, { useContext } from "react";
import ITag from "../../types/tag";
import Tag from "../Tag";
import "./AddTagButton.scss";
import INote from "../../types/note";
import { NotesContext } from "../../context/NotesContext";
import { addNoteTagAction } from "../../context/NotesActions";

interface IAddTagButton {
  note: INote;
}

const AddTagButton: React.FC<IAddTagButton> = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const handleAddTag = (tag: ITag) => {
    dispatch?.(addNoteTagAction(note, tag));
  };

  return (
    <div
      className="add-tag-button"
      onClick={() => handleAddTag({ text: "#money", color: "purple" })}
    >
      <Tag text={"+"} color={"red"} />
    </div>
  );
};

export default AddTagButton;
