import React from 'react';
import './Link.css';
import caret from "../../assets/sort-down.png";

const Link = ({ name, textColor, isVisible }) => {
    return (
        <div className='Link-container'>
            <a style={{
                color: textColor,
                padding: isVisible ? '5px' : null,
                margin: isVisible ? 0 : null
            }}>{name}</a>
            {
                (isVisible) ? <img src={caret} className="caret" /> : null
            }
        </div>
    )
}

export default Link