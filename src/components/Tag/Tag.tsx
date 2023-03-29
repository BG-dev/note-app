import React from "react";
import "./Tag.scss";

interface ITagProps {
  text: string;
  color: string;
}

const Tag: React.FC<ITagProps> = ({ text, color }) => {
  return (
    <div className="tag" style={{ backgroundColor: color }}>
      <span className="tag__text">{text}</span>
    </div>
  );
};

export default Tag;
