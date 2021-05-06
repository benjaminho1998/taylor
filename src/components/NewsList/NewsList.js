import React from 'react';
import './NewsList.sass';

import { useSelector, shallowEqual } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const NewsList = () => {

    const news = useSelector(state => state.newsList.news.articles, shallowEqual);
    let sliced = [];
    
    if(news !== undefined) {
        sliced = news.slice(12, 21);
    }

    const clickHandler = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="news-list-container">
            {sliced &&
                <div>
                    {sliced.map((item, i) =>
                        <div onClick={() => clickHandler(item.url)} className="news-item" key={i}>
                            <Row>
                                <Col xs={3}>
                                    <Image className="news-list-img" src={item.urlToImage} />
                                </Col>
                                <Col xs={9}>
                                    <Row>
                                        <span className="news-source">{item.source.name}</span>
                                    </Row>
                                    <Row>
                                        <h5 className="news-item-header">{item.title}</h5>
                                    </Row>
                                    <Row>
                                        <span>{item.description}</span>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    )}   
                </div>
            }           
        </div>
    );
}

export default NewsList;