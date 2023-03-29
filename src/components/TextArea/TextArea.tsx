import React, { ChangeEvent } from "react";
import "./TextArea.scss";

interface ITextArea {
  value: string;
  spellCheck?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}

const TextArea: React.FC<ITextArea> = (props) => {
  return <textarea className="text-area" {...props} />;
};

export default TextArea;
