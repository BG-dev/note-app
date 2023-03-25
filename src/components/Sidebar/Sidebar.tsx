import React, { useState,useEffect } from "react";
import notesData from "../../assets/notes.json"
import INote from "../../types/note";
import "./Sidebar.scss"

import NoteCard from "../NoteCard";

const Sidebar: React.FC = () => {

    const [notes, setNotes] = useState<INote[]>([])

    useEffect(() => {
        const getNotes = () => {
            setNotes(notesData);
        }
        getNotes()
    }, [])

    return(
        <div className="sidebar">
                <ul className="sidebar__list">
                    {
                        notes && notes.map(note => (<NoteCard key={note.id} {...note} />))
                    }
                </ul>
        </div>
    )
}

export default Sidebar