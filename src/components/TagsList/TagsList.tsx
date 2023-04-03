import React from "react";
import "./TagsList.scss";
import { AddTagButton, Tag } from "../";
import INote from "../../types/note";

interface ITagsList {
  note: INote;
}

const TagsList: React.FC<ITagsList> = ({ note }) => {
  return (
    <ul className="tags-list">
      {note.tags.map((tag, index) => (
        <Tag key={tag.text + index} {...tag} />
      ))}
      <AddTagButton note={note} />
    </ul>
  );
};

export default TagsList;
