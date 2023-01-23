import axios from 'axios';
import React, { useRef } from 'react'
import { useEffect, useState, createContext } from 'react';
import { Link } from "react-router-dom";
import Loading from './Loading';
import ShowNotes from './ShowNotes'
import "./Style.css"

export const dataContext = createContext();

function MKNotes() {
    const [notes, setNotes] = useState([]);
    const keywordRef = useRef(),
        [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://notes-db-json.onrender.com/Notes")
            .then(res => {
                setNotes(res.data)
                setLoading(false)
            })
            .then(() => { })
            .catch(e => console.log(e));
    }, [])

    const searchHandler = () => {
        axios.get("https://notes-db-json.onrender.com/Notes?q=" + keywordRef.current.value)
            .then(res => setNotes(res.data))
            .catch(e => console.log(e));
    }

    return (
        <>
            {loading && <Loading />}
            {loading === false &&
                <div id='App'>
                    <div id='NavBar'>
                        <div id="Logo">
                            <h1><span>Mk</span>Notes</h1>
                        </div>
                        <div id="SearchSection">
                            <div id="input">
                                <input type="search" ref={keywordRef} />
                            </div>
                            <div id="serchIcon" onClick={searchHandler}>
                                <lord-icon src="https://cdn.lordicon.com/xfftupfv.json" trigger="loop" delay="1500" colors="primary:#ffffff"></lord-icon>
                            </div>
                        </div>
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
                    <dataContext.Provider value={{ notes: notes }}>
                        <ShowNotes />
                    </dataContext.Provider>
                    <Link to="/AddNote">
                        <div id="AddButton">
                            <lord-icon
                                src="https://cdn.lordicon.com/mecwbjnp.json"
                                trigger="loop"
                                delay="1500"
                                colors="primary:#ffffff,secondary:#ffffff">
                            </lord-icon>
                        </div>
                    </Link>
                </div>
            }
        </>

    )
}

export default MKNotes