import React from 'react';
import './ExploreNews.sass';
import TCarousel from '../TCarousel/TCarousel';

import Row from 'react-bootstrap/Row';

const ExploreNews = () => {
    return (
        <div className="carousel-container">
            <div className="line-header">
                <div className="sub-section-header">
                    News
                    <hr className="news-line"></hr>
                </div>
            </div>
            <TCarousel />
        </div>
    );
}

export default ExploreNews;