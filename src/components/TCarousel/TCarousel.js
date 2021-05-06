import React from 'react';
import './TCarousel.sass';
import CarouselItem from '../CarouselItem/CarouselItem';

import { useSelector, shallowEqual } from 'react-redux';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TCarousel = (props) => {

    const low = props.low;
    const high = props.high;

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

    let sliced = [];
    const topNews = useSelector(state => state.newsList.news.articles, shallowEqual);
    
    if(topNews !== undefined) {
        sliced = topNews.slice(low, high);
    }

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7500}
            keyBoardControl={true}
            transitionDuration={750}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
        >
            {sliced && sliced.map((article, index) => 
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