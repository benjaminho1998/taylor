import React, { useState } from 'react';
import './ImageTile.sass';

import ReactCardFlip from 'react-card-flip';

const ImageTile = (props) => {

    const num = props.num;
    const alt = "Taylor's picture " + num;
    const desc = props.desc;

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (bool) => {
        setIsFlipped(bool);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <div className="image-parent" onClick={() => handleClick(true)}>
                <img src={process.env.PUBLIC_URL + '/images/homeImg/tay' + num + '.jpg'} alt={alt} />
            </div>
            <div className="image-parent" onClick={() => handleClick(false)}>
                <img src={process.env.PUBLIC_URL + '/images/homeImg/tay' + num + '.jpg'} alt={alt} className="dark-overlay" />
                <div className="image-text">
                    {desc}
                </div>
            </div>
        </ReactCardFlip>
    );
}

export default ImageTile;