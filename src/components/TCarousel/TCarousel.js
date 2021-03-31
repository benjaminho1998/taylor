import React from 'react';
import './TCarousel.sass';
import CarouselItem from '../CarouselItem/CarouselItem';

import { useSelector, shallowEqual } from 'react-redux';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TCarousel = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
    };

    let top4 = [];
    const topNews = useSelector(state => state.newsList.news.articles, shallowEqual);
    if(topNews !== undefined) {
        top4 = topNews.slice(0, 6)
    }
    // const news0 = useSelector(state => state.newsList.news.articles[0]);
    // const news1 = useSelector(state => state.newsList.news.articles[1]);
    // const news2 = useSelector(state => state.newsList.news.articles[2]);
    // const news3 = useSelector(state => state.newsList.news.articles[3]);
    // const news4 = useSelector(state => state.newsList.news.articles[4]);
    // const topNews = [news0, news1, news2, news3, news4]

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={750}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
        >
            {top4 && top4.map((article, index) => 
                <CarouselItem 
                    key={index}
                    source={article.source.name}
                    title={article.title}
                    desc={article.description}
                    image={article.urlToImage}
                    url={article.url}
                />
            )}
        </Carousel>
    );
}

export default TCarousel;