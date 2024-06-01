import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  imgArr: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imgArr }) => {
  console.log(imgArr);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {imgArr.map((img, index) => (
          <div key={index} className="flex justify-center ">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
