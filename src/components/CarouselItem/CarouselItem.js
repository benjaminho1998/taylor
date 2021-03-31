import React from 'react';
import './CarouselItem.sass';

import Card from 'react-bootstrap/Card';

const CarouselItem = (props) => {
    return (
        <a className="news-card-link" href={props.url} target="_blank" rel="noopener noreferrer">
            <Card className="c-card">
                <Card.Img className="news-img-carousel" variant="top" src={props.image} />
                <Card.Body>
                    <Card.Text><i>{props.source}</i></Card.Text>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CarouselItem;