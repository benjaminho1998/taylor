import React, { useRef } from 'react';

import Button from 'react-bootstrap/Button';

import Typewriter from 'typewriter-effect';

const Banner = (props) => {

    const myRef = useRef(null)

    const executeScroll = () => {
        props.getRef(myRef);
        myRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div>
            <div className="tay1"></div>
            <div className="tay1-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("T-Swift")
                        .pauseFor(250)
                        .deleteAll()
                        .typeString("Miss Americana")
                        .pauseFor(250)
                        .deleteAll()
                        .typeString("Taylor Swift.")
                        .start();
                    }}
                />
                <Button className="explore-button" variant="light" onClick={executeScroll}>Explore</Button>
            </div>
        </div>
    );
}
 export default Banner;