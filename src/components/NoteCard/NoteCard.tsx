import INote from "../../types/note";
import { Link } from "react-router-dom";
import "./NoteCard.scss";

interface INoteCardProps extends INote {
  selected: boolean;
}

const NoteCard: React.FC<INoteCardProps> = ({ title, id, selected }) => {
  return (
    <Link className={`note-card ${selected ? "selected" : ""}`} to={`/${id}`}>
      <li>
        <h3 className="note-card__title">{title}</h3>
      </li>
    </Link>
  );
};

export default NoteCard;
