import React from "react";
import ITag from "../../types/tag";
import "./Tag.scss";

const Tag: React.FC<ITag> = ({ text, color }) => {
  const bgColor = `#${color}`;

  return (
    <li className={`tag`} style={{ backgroundColor: bgColor }}>
      <span className="tag__text">{`#${text}`}</span>
    </li>
  );
};

export default Tag;
