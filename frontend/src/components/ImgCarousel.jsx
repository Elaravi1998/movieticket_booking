import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, image: '/img1.jpg', caption: 'Latest Blockbuster Movies' },
    { id: 2, image: '/img2.jpg', caption: 'Exciting Live Events' },
    { id: 3, image: '/img3.jpg', caption: 'Popular Plays and Performances' },
    { id: 4, image: '/img4.jpg', caption: 'Thrilling Sports Events' },
    { id: 5, image: '/img5.jpg', caption: 'Fun Activities for All Ages' },
  ];

  return (
    <div className="carousel-container">
      <div className="marquee">
        <p>🎬 Discover the Latest Movies, Events, Plays, Sports, and Activities! Book Your Show Now! 🎭</p>
      </div>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={slide.caption} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
