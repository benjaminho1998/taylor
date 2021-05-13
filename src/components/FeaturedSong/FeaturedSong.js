import React from 'react';
import './FeaturedSong.sass';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if(newWindow) newWindow.opener = null;
}

const FeaturedSong = (props) => {

    const num = props.image;

    return (
        <div className="featured-bot-spacing">
            <Row>
                <Col lg={4}>
                    <Image src={process.env.PUBLIC_URL + '/images/featured/feature' + num + '.jpg'}/>
                </Col>
                <Col lg={8}>
                    <div className="featured-song-name">
                        {props.track}
                    </div>
                    <div className="featured-album-name">
                        {props.album}
                    </div>
                    <div className="featured-lyrics">
                        "{props.lyrics}"
                    </div>
                    <Button variant="outline-light" className="double-button-spacing" onClick={() => openInNewTab(props.songUrl)}>Listen</Button>
                    {props.musicVideoUrl !== null && <Button variant="outline-light" onClick={() => openInNewTab(props.musicVideoUrl)}>Music Video</Button>}
                </Col>
            </Row>
            {num !== '3' && <hr className="horizontal-line"></hr>}
        </div>
    );
}

export default FeaturedSong;