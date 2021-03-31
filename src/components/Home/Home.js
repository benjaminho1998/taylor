import React, { useRef } from 'react';
import './Home.sass';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Explore from '../Explore/Explore';

import Button from 'react-bootstrap/Button';

import Typewriter from 'typewriter-effect';

const Home = () => {

    const myRef = useRef(null)

    const executeScroll = () => {
        myRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="sub-container">
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
            <div ref={myRef}>
                <Explore />
            </div>
            <Featured />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;