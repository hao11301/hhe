'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
   <div>
        <img src="hinh-nen-anime-bau-troi.jpg" alt="Hình ảnh 1" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div>
        <img src="hinh-nen-anime-bau-troi.jpg" alt="Hình ảnh 2" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src="hinh-nen-anime-bau-troi.jpg" alt="Hình ảnh 3" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src="hinh-nen-anime-bau-troi.jpg" alt="Hình ảnh 4" style={{ width: '100%', height: 'auto' }} />
      </div>


    </Slider>
  );
}