import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/kgstech/image/upload/v1736305532/full-shot-smiley-people-work-min_vae5yg.jpg",
      alt: "Slide 1",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149636268.jpg?t=st=1736733711~exp=1736737311~hmac=0e03654763f69e6d62a9aa6fa36b1fddd5da6d9ef8c79b314c761407e1dbd240&w=1380",
      alt: "Slide 2",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/medium-shot-happy-colleagues-talking_23-2149006918.jpg?t=st=1736733755~exp=1736737355~hmac=2f3542600483053d2c47d42fd8e8c3dc56ad5c8c440fabaa53054e95b31bbcaa&w=1380",
      alt: "Slide 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-screen object-cover"
            />
            <div className="absolute bottom-0 w-full h-20 bg-black bg-opacity-70"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
