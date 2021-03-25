import React, { useRef } from 'react';
import './HomeBody.sass';
import ImageTile from '../ImageTIle/ImageTIle';
import Featured from '../Featured/Featured';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Typewriter from 'typewriter-effect';

import tay2 from '../../images/homeImg/tay2.jpg';
import tay3 from '../../images/homeImg/tay3.jpg';
import tay4 from '../../images/homeImg/tay4.jpg';
import tay5 from '../../images/homeImg/tay5.jpg';
import tay6 from '../../images/homeImg/tay6.jpg';
import tay7 from '../../images/homeImg/tay7.jpg';
import tay8 from '../../images/homeImg/tay8.jpg';
import tay9 from '../../images/homeImg/tay9.jpg';

const HomeBody = () => {
    const myRef = useRef(null)

    const executeScroll = () => {
        myRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="home-container">
            <div className="tay1"></div>
            <div className="tay1-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Miss Americana')
                        .pauseFor(250)
                        .deleteAll()
                        .typeString("T-Swift")
                        .pauseFor(250)
                        .deleteAll()
                        .typeString("Taylor Swift.")
                        .start();
                    }}
                />
                <Button className="explore-button" variant="light" onClick={executeScroll}>Explore</Button>
            </div>
            <Container>
                <Row>
                    <h1 ref={myRef} className="header">Explore</h1>
                </Row>
                {/* <Row>
                    <div className="bio-summary-text">
                        Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her narrative songwriting, which often takes inspiration from her personal life, has received widespread critical praise and media coverage.
                    </div>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>9</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
                <Row>
                    <div className="image-row">
                        <div className="image-col">
                            <ImageTile link="Taylorswift.com" name="News" num="2" />
                            <ImageTile link="Taylorswift.com" name="Bio" num="6" />
                            <ImageTile link="Taylorswift.com" name="Albums" num="5" />
                        </div>
                        <div className="image-col">
                            <ImageTile link="Taylorswift.com" name="Lyric test" num="3" />
                            <ImageTile link="Taylorswift.com" name="Analysis" num="4" />
                        </div>
                        <div className="image-col">
                            <ImageTile link="Taylorswift.com" name="Songs" num="8" />
                            <ImageTile link="Taylorswift.com" name="Enchanted" num="9" />
                            <ImageTile link="Taylorswift.com" name="Personal" num="7" />
                        </div>
                    </div>
                </Row>
                {/* <Row>
                    <div className="options">
                        asdf
                    </div>
                </Row> */}
                <Row>
                    <Featured />
                </Row>
            </Container>
            {/* <div className="summary">
                <div className="summary-text">
                    - 32 AMA awards
                </div>
            </div> */}
        </div>
    );
}

export default HomeBody;