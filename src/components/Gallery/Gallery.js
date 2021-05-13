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
                        <ImageTile num="2" desc="Taylor rocks out during her Reputation tour in 2018." />
                        <ImageTile num="6" desc="A moment of reflection during Taylor's Miss Americana documentary." />
                        <ImageTile num="5" desc="Peeking into her glowing piano during an ethereal moment of her Cardigan music video." />
                    </div>
                    <div className="image-col">
                        <ImageTile num="3" desc="Smiling with satisfaction during the release of her recent album, Evermore." />
                        <ImageTile num="4" desc="Taylor strumming a green guitar at a Reputation concert." />
                    </div>
                    <div className="image-col">
                        <ImageTile num="8" desc="A glimpse of the quiet, rustic feeling Taylor captures in her album, Evermore, while wearing her iconic coat." />
                        <ImageTile num="9" desc="Standing in glory during her Fearless tour." />
                        <ImageTile num="7" desc="The cover art for Taylor's most recent work: Fearless (Taylor's Version)." />
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