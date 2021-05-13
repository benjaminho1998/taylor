import React
 from 'react';
import './News.sass';
import SmallBanner from '../SmallBanner/SmallBanner';
import TCarousel from '../TCarousel/TCarousel';
import NewsList from '../NewsList/NewsList';

import Container from 'react-bootstrap/Container';

const News = () => {

    const title = 'News'

    return (
        <div className="news-container">
            <SmallBanner title={title} />
            <div className="small-banner-spacing">
                <Container>
                    <TCarousel low={6} high={12} />
                    <NewsList />
                </Container>
            </div>
        </div>
    );
}

export default News;