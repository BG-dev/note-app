import React from "react";
import ITag from "../../types/tag";
import "./Tag.scss";

const Tag: React.FC<ITag> = ({ text, color }) => {
  return (
    <li className={`tag tag-${color}`}>
      <span className="tag__text">{text}</span>
    </li>
  );
};

export default Tag;
