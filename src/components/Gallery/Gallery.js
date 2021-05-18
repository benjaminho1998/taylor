import React, { useState } from 'react';
import './Gallery.sass';

import ImageTile from '../ImageTile/ImageTile';
import HeaderText from '../HeaderText/HeaderText';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Gallery = () => {

    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    }

    return (
        <Container>
            <HeaderText title="Gallery" subtitle="Iconic moments through the years" />
            <Row>
                <div className="image-row">
                    <div className="image-col">
                        <ImageTile num="2" desc="Taylor rocks out during her Reputation tour in 2018." />
                        <ImageTile num="6" desc="A moment of reflection during Taylor's Miss Americana documentary." />
                        <ImageTile num="5" desc="Peeking into her glowing piano during an ethereal moment of her Cardigan music video." />
                        {showMore &&
                            <div>
                                <ImageTile num="14" desc="Peeking into her glowing piano during an ethereal moment of her Cardigan music video." />
                            </div>
                        }
                    </div>
                    <div className="image-col">
                        <ImageTile num="3" desc="Smiling with satisfaction during the release of her recent album, Evermore." />
                        <ImageTile num="4" desc="Taylor strumming a green guitar at a Reputation concert." />
                        {showMore &&
                            <div>
                                <ImageTile num="12" desc="Peeking into her glowing piano during an ethereal moment of her Cardigan music video." />
                            </div>
                        }
                    </div>
                    <div className="image-col">
                        <ImageTile num="8" desc="A glimpse of the quiet, rustic feeling Taylor captures in her album, Evermore, while wearing her iconic coat." />
                        <ImageTile num="9" desc="Standing in glory during her Fearless tour." />
                        <ImageTile num="7" desc="The cover art for Taylor's most recent work: Fearless (Taylor's Version)." />
                        {showMore &&
                            <div>
                                <ImageTile num="13" desc="Peeking into her glowing piano during an ethereal moment of her Cardigan music video." />
                            </div>
                        }
                    </div>
                </div>
            </Row>
            <Row>
                <div className="button-container">
                    {showMore ? 
                        <Button variant="dark" onClick={handleClick}>Show Less</Button>:
                        <Button variant="dark" onClick={handleClick}>Show More</Button>
                    }
                </div>
            </Row>
        </Container>
    );
}

export default Gallery;