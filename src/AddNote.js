import axios from 'axios';
import React from 'react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function AddNote() {
    const titleRef = useRef();
    const textRef = useRef();
    const [color, setColor] = useState("");

    const AddNote = () => {
        const dateNow = new Date();
        titleRef.current.value === "" || textRef.current.value === "" || color === "" ? alert("Veuillez Remplire les informations du note.") : axios.post("https://notes-db-json.onrender.com/Notes", {
            Title: titleRef.current.value, Text: textRef.current.value, Date: dateNow.toLocaleString('en-US', { hour12: false }).split(",").join(" "), Color: color
        }).then(res => res.status === 201 && alert("Note Ajoute avec succes")).catch(err => console.log(err));
    }
    return (
        <div id='App'>
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
                    src="https://cdn.lordicon.com/wloilxuq.json"
                    trigger="loop"
                    delay="1500"
                    colors="primary:#ffffff,secondary:#5797e7">
                </lord-icon></div>
                <div><hr /></div>
            </div>
            <div>
                <h1>Ajouter une Note</h1>
            </div>
            <div id='Form'>
                <div id="TitleInput">
                    <input ref={titleRef} type="text" placeholder='Entrer le titre du note..' />
                </div>
                <div id="TextArea">
                    <textarea ref={textRef} placeholder='Entrer le text du note..'></textarea>
                </div>
                <div id="Colors">
                    <div id='AllColors'>
                        <div style={{ backgroundColor: "var(--Third-Color)" }} onClick={() => setColor("var(--Third-Color)")}></div>
                        <div style={{ backgroundColor: "var(--Forth-Color)" }} onClick={() => setColor("var(--Forth-Color)")}></div>
                        <div style={{ backgroundColor: "var(--Fifth-Color)" }} onClick={() => setColor("var(--Fifth-Color)")}></div>
                        <div style={{ backgroundColor: "var(--Sixth-Color)" }} onClick={() => setColor("var(--Sixth-Color)")}></div>
                        <div style={{ backgroundColor: "var(--Seventh-Color)" }} onClick={() => setColor("var(--Seventh-Color)")}></div>
                        <div style={{ backgroundColor: "var(--Eighth-Color)" }} onClick={() => setColor("var(--Eighth-Color)")}></div>
                    </div>
                </div>
            </div>
            <div id="AddButton" onClick={AddNote}>
                <lord-icon
                    src="https://cdn.lordicon.com/mecwbjnp.json"
                    trigger="loop"
                    delay="1500"
                    colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
            </div>
        </div >
    )
}

export default AddNote