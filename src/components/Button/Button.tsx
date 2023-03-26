import "./Button.scss";

interface IButton {
  text: string;
  color: "red" | "blue";
  handleClick: () => void;
}

const Button: React.FC<IButton> = ({ text, color, handleClick }) => {
  return (
    <button className={`btn btn-${color}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
