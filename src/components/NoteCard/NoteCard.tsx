import INote from "../../types/note";
import { Link } from "react-router-dom";
import "./NoteCard.scss";

interface INoteCardProps extends INote {}

const NoteCard: React.FC<INoteCardProps> = ({ title, id }) => {
  return (
    <Link to={`/${id}`}>
      <li className="note-card">
        <h3 className="note-card__title">{title}</h3>
      </li>
    </Link>
  );
};

export default NoteCard;
