import React, { useEffect, useState } from 'react'

function Loading() {
    const colors = ["#F27F0C", "#F7AD19", "#7fbc62", "#5797e7", "#845ce6", "#ffffff"],
        [color, setColor] = useState("");

    const changeColor = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }
    useEffect(() => {
        setInterval(changeColor, 1000)
    }, [color])
    return (
        <div>
            <lord-icon
                src="https://cdn.lordicon.com/ulhdumaq.json"
                trigger="loop"
                colors={"primary:" + color}
                style={{ width: "100px", height: "100px" }}
            >
            </lord-icon>
        </div >
    )
}

export default Loading