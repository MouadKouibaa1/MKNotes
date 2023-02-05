import axios from 'axios';
import React, { useRef } from 'react'
import { useEffect, useState, createContext } from 'react';
import { Link } from "react-router-dom";
import Loading from './Loading';
import ShowNotes from './ShowNotes'
// import "./Style.css"

export const dataContext = createContext();

function MKNotes() {
    const Themes = [
        {
            color1: "#201e26",
            color2: "#424258",
            color3: "#7fbc62",
            color4: "#F7AD19",
            color5: "#F27F0C"
        },
        {
            color1: "#cdb4db",
            color2: "#ffc8dd",
            color3: "#ffafcc",
            color4: "#bde0fe",
            color5: "#a2d2ff"
        },
        {
            color1: "#0d1b2a",
            color2: "#1b263b",
            color3: "#415a77",
            color4: "#778da9",
            color5: "#e0e1dd"
        },
        {
            color1: "#3d5a80",
            color2: "#98c1d9",
            color3: "#e0fbfc",
            color4: "#ee6c4d",
            color5: "#293241"
        },
        {
            color1: "#94492a",
            color2: "#d4cdc2",
            color3: "#e3c49a",
            color4: "#a4b3a4",
            color5: "#423e3d"
        },

    ]
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

    const themeChanger = (i) => {
        document.styleSheets[2].cssRules[2].style.setProperty("--Forth-Color", `${Themes[i].color1}`);
        document.styleSheets[2].cssRules[2].style.setProperty("--Fifth-Color", `${Themes[i].color2}`);
        document.styleSheets[2].cssRules[2].style.setProperty("--Sixth-Color", `${Themes[i].color3}`);
        document.styleSheets[2].cssRules[2].style.setProperty("--Seventh-Color", `${Themes[i].color4}`);
        document.styleSheets[2].cssRules[2].style.setProperty("--Eighth-Colo", `${Themes[i].color5}`);
    }
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
                    <div id="Themes">
                        {
                            Themes.map((t, i) => <div className="Theme" onClick={() => themeChanger(i)} key={i + 1}>
                                <div className="color" style={{ backgroundColor: t.color1 }}></div>
                                <div className="color" style={{ backgroundColor: t.color2 }}></div>
                                <div className="color" style={{ backgroundColor: t.color3 }}></div>
                                <div className="color" style={{ backgroundColor: t.color4 }}></div>
                                <div className="color" style={{ backgroundColor: t.color5 }}></div>
                            </div>)
                        }

                    </div>
                </div>
            }
        </>

    )
}

export default MKNotes