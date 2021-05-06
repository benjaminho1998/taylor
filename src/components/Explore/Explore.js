import React from 'react';
import './Explore.sass';
import HeaderText from '../HeaderText/HeaderText';
import ExploreNews from '../ExploreNews/ExploreNews';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import explore1 from '../../images/explore/explore1.jpg';
import explore2 from '../../images/explore/explore2.jpg';
import explore3 from '../../images/explore/explore3.jpg';

const Explore = () => {
    return (
        <Container>
            <HeaderText title="Explore" subtitle="Everything Taylor Swift" />
            <Row>
                <ExploreNews />
            </Row>
            <div className="explore-other-container">
                <Link to="/tests" style={{ textDecoration: 'none' }}>
                    <div className="explore-card content-1">
                        <div className="explore-card-category">Quiz</div>
                        <div className="explore-other-content">
                            <h4 className="quiz-title">Quiz your Taylor trivia and lyric knowledge here!</h4>
                            <p className="card-desc">Where was she born? What's her favorite color? "She's cheer captain and I'm on the ________" what goes in the blank? If you can get all these right you have a certified big brain.</p>
                            <Image className="explore-img" src={explore1}/>
                        </div>
                    </div>
                </Link>
                <Link to="/bio" style={{ textDecoration: 'none' }}>
                    <div className="explore-card content-1">
                        <div className="explore-card-category">Bio</div>
                        <div className="explore-other-content">
                            <h4 className="quiz-title">Learn everything there is to know about Taylor's life and music.</h4>
                            <p className="card-desc">Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her narrative songwriting, which often takes inspiration from her personal...</p>
                            <Image className="explore-img" src={explore2}/>
                        </div>
                    </div>
                </Link>
                <Link to="/recommendation" style={{ textDecoration: 'none' }}>
                    <div className="explore-card content-1 right-card">
                        <div className="explore-card-category">Recommendation</div>
                        <div className="explore-other-content">
                            <h4 className="quiz-title">Get an album or track recommendation for any vibe!</h4>
                            <p className="card-desc">Feeling good and ready to take on the world? Bummed out because you just got broken up with? Don't worry, I'll get you a song that will fit the mood.</p>
                            <Image className="explore-img" src={explore3}/>
                        </div>
                    </div>
                </Link>
            </div>
        </Container>
    );
}

export default Explore;