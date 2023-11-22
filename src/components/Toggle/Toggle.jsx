import { useState } from "react";
import "./Toggle.css"
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = (props) => {
    // const [lightMode, setLightMode] = useState(true)

    // const handleOnClick = () => {
    //     setLightMode(!lightMode)
    // }
    const [clicked, setClicked] = useState(true)
    const handleClick = () => {
        setClicked(!clicked)
        props.handleOnClick(clicked)
    }
    return (
        <div className="toggle" onClick={handleClick}>
            <FaMoon />
            <FaSun />
            <div className="t-btn"
                style={clicked ? { left: '2px' } : { right: '2px' }}
            ></div>
        </div>
    )
}

export default Toggle