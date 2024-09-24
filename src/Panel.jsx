import { useState } from 'react';

import './css/Panel.css';

function Panel({ name, picture, alt, text, reconmmendationScore }) {

    return (
        <div className={`panel ${name}`}>
            <img className="panel__image" src={picture
            } alt={alt}/>
            <div className="panel__text">
                {text}
            </div>
            <div className="panel__reconmmendation">
                Recommention Score: {reconmmendationScore}
            </div>
        </div>
    );
}
export default Panel;