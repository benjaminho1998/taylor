import React from 'react';
import './ExploreNews.sass';
import TCarousel from '../TCarousel/TCarousel';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ExploreNews = () => {
    return (
        <div className="carousel-container">
            <div className="line-header">
                <div className="sub-section-header">
                    Top News
                    <hr className="news-line"></hr>
                </div>
            </div>
            <TCarousel low={0} high={6} />
            <div className="button-container">
                <Link to="/news">
                    <Button variant="outline-dark">More News</Button>
                </Link>
            </div>
        </div>
    );
}

export default ExploreNews;