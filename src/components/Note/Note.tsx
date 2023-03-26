import React from "react";
import "./Note.scss";

const Note: React.FC = () => {
  return (
    <div className="note">
      <h1 className="note__title">{}</h1>
    </div>
  );
};

export default Note;
