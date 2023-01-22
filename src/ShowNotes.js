import React, { useContext } from 'react'
import { dataContext } from './MKNotes'
import { Link } from "react-router-dom";


function ShowNotes() {
    const { notes } = useContext(dataContext);

    return (
        <>
            <div>
                {notes.length === 0 ? <p style={{ fontStyle: "italic" }}>La liste des note est vide</p> : <h1>Tous Les Notes</h1>}
            </div>
            <div id="NotesSection">
                {
                    notes.map(n =>
                        <Link to={`/NoteDetails/${n.id}`} key={n.id}>
                            <div className='Note' style={{ backgroundColor: n.Color }}>
                                <div>
                                    {n.Title}
                                </div>
                                <div>
                                    <p className='NoteDate'>{n.Date}</p>
                                </div>
                                <div>
                                    <p>{n.Text}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default ShowNotes