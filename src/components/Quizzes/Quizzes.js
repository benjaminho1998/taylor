import React from 'react';
import './Quizzes.sass';
import SmallBanner from '../SmallBanner/SmallBanner';
import Quiz from '../Quiz/Quiz';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';

const Quizzes = () => {

    const { path, url } = useRouteMatch();

    return (
        <div className="tests-container">
            <Switch>
                <Route exact path={path}>
                    <SmallBanner title="Quizzes"/>
                    <div className="tests-subcontainer">
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    <div className="card-spacing">
                                        <Card className="cards">
                                            <Card.Body>
                                                <Card.Title>Biography Facts</Card.Title>
                                                <Card.Text>
                                                    Test your knowledge on Taylor Swift facts! Everything from her childhood, her early career, and now can be found here.
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-muted">Difficulty: Easy</small>
                                                </Card.Text>
                                                <Link to={`${url}/fact-test`}><Button className="quiz-button" variant="dark">Start</Button></Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="card-spacing">
                                        <Card className="cards">
                                            <Card.Body>
                                                <Card.Title>Which album are you?</Card.Title>
                                                <Card.Text>
                                                    Do you have more of the <i>Fearless</i> country-pop type of personality? Or do you lean more towards the euphoric, folk vibe of <i>Evermore</i>?
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-muted">Difficulty: Easy</small>
                                                </Card.Text>
                                                <Button className="quiz-button" variant="dark">Start</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="card-spacing">
                                        <Card className="cards">
                                            <Card.Body>
                                                <Card.Title>Lyrics</Card.Title>
                                                <Card.Text>
                                                    Do you know every lyric to every Taylor Swift song? Considering the number of songs she has, I'm not so sure. Let's find out here!
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-muted">Difficulty: Hard</small>
                                                </Card.Text>
                                                <Button className="quiz-button" variant="dark">Start</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Route>
                <Route path={`${path}/fact-test`}>
                    <Quiz />
                </Route>
            </Switch>
        </div>
    );
}

export default Quizzes;