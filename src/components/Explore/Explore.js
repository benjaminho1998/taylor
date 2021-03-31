import React from 'react';
import './Explore.sass';
import HeaderText from '../HeaderText/HeaderText';
import ExploreNews from '../ExploreNews/ExploreNews';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Explore = () => {
    return (
        <Container>
            <HeaderText title="Explore" subtitle="Everything Taylor Swift" />
            <Row>
                <ExploreNews />
            </Row>
        </Container>
    );
}

export default Explore;