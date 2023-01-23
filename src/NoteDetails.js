import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'

function NoteDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState();

    useEffect(() => {
        axios.get(`https://notes-db-json.onrender.com/Notes?id=${id}`).then(res => setNote(res.data)).catch(err => console.log(err));
    }, [id])
    const deleteNote = () => {
        window.confirm("Voulez-vous vraiment supprimer cette note ?") && axios.delete(`https://notes-db-json.onrender.com/Notes/${id}`).then(() => navigate("/")).catch(err => console.log(err));
    }
    return (
        <>
            {
                note && <div id='App'>
                    <div id='NavBar'>
                        <Link to="/">
                            <div id="Logo">
                                <h1><span>Mk</span>Notes</h1>
                            </div>
                        </Link>
                    </div>
                    <div id='Icons'>
                        <div><hr /></div>
                        <div><lord-icon
                            src="https://cdn.lordicon.com/wxnxiano.json"
                            trigger="loop"
                            delay="1500"
                            colors="primary:#ffffff,secondary:#5797e7">
                        </lord-icon></div>
                        <div><hr /></div>
                    </div>
                    <div>
                        <h1>Note</h1>
                    </div>
                    <div id='NoteDetails' style={{ backgroundColor: note[0].Color }}>
                        <div id='NoteDetailTitle'>
                            <h1>{note[0].Title}</h1>
                        </div>
                        <div>
                            <p id='NoteDetailDate'>{note[0].Date}</p>
                        </div>
                        <div id='NoteDetailText'>
                            <p>{note[0].Text}</p>
                        </div>
                    </div>
                    <div id="DeleteButton" onClick={() => deleteNote()}>
                        <lord-icon
                            src="https://cdn.lordicon.com/gsqxdxog.json"
                            trigger="loop"
                            delay="1500"
                            colors="primary:#ffffff,secondary:#ffffff">
                        </lord-icon>
                    </div>
                </div >
            }
        </>

    )
}

export default NoteDetails