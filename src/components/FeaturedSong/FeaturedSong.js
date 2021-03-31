import React from 'react';
import './FeaturedSong.sass';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import feature1 from '../../images/featured/feature1.jpg';
import feature2 from '../../images/featured/feature2.jpg';
import feature3 from '../../images/featured/feature3.jpg';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if(newWindow) newWindow.opener = null
}

const FeaturedSong = (props) => {
    return (
        <div className="featured-bot-spacing">
            <Row>
                <Col lg={4}>
                    {props.image === '1' && <Image src={feature1}/>}
                    {props.image === '2' && <Image src={feature2}/>}
                    {props.image === '3' && <Image src={feature3}/>}
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
            {props.image !== '3' && <hr className="horizontal-line"></hr>}
        </div>
    );
}

export default FeaturedSong;