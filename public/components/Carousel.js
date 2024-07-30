import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english')
      .then(response => response.json())
      .then(data => setCarouselData(data.carousel));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} className={styles.carouselImage} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
