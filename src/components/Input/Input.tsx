import React, { ChangeEvent } from "react";
import "./Input.scss";

interface IInput {
  type: string;
  value: string;
  placeholder?: string;
  spellCheck?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const Input: React.FC<IInput> = (props) => {
  return <input className="input" {...props} />;
};

export default Input;
