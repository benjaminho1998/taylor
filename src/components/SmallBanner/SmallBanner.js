import React from 'react';
import './SmallBanner.sass';

const SmallBanner = (props) => {
    return (
        <div className="sb-container">
            <div className="sb-title">
                {props.title}
            </div>
        </div>
    );
}

export default SmallBanner;