import { Button } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> // remember to give it position:absolute
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >Disabled</Button>
        <Button onClick={() => next()} >Next</Button>
        <Button onClick={() => goToSlide(currentSlide + 1)} > Goto</Button>
      </div>
    );
  };

function CustomCarousel(props) {
    return (
        <div>
            <Carousel
                arrows={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={false} 
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                // customButtonGroup={<ButtonGroup />}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
            </Carousel>
        </div>
    )
}

export default CustomCarousel