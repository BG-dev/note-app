import INote from "../../types/note"
import "./NoteCard.scss"

interface INoteCardProps extends INote {
}

const NoteCard:React.FC<INoteCardProps> = ({title}) => {

    return(
        <li className="note-card">
            <h3 className="note-card__title">{title}</h3>
        </li>
    )
}

export default NoteCard