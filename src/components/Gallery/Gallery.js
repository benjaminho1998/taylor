import React from 'react';
import './Gallery.sass';

import ImageTile from '../../components/ImageTile/ImageTile';
import HeaderText from '../../components/HeaderText/HeaderText';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Gallery = () => {
    return (
        <Container>
            <HeaderText title="Gallery" subtitle="Iconic moments through the years" />
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
            <Row>
                <div className="button-container">
                    <Button variant="dark">Load More</Button>
                </div>
            </Row>
        </Container>
    );
}

export default Gallery;