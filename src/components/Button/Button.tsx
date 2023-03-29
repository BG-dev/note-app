import "./Button.scss";

interface IButton {
  children: string;
  color: "red" | "blue";
  handleClick: () => void;
}

const Button: React.FC<IButton> = ({ children, color, handleClick }) => {
  return (
    <button className={`btn btn-${color}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
