import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import story1 from '../static/comics_img/3abe4c65bf0f5dd12c0e1f557e0edb4c.webp';
import story2 from '../static/comics_img/comics-releasing-to-mu-early-v0-uqea2eyxqcsd1.webp';
import story3 from '../static/comics_img/th-midcap.webp';
import './PopularStories.css';

function PopularStories() {
  const images = [story1, story2, story3]; // قائمة الصور
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
  };

  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#188677'
          fillOpacity='0.94'
          d='M0,288L13.3,245.3C26.7,203,53,117,80,90.7C106.7,64,133,96,160,101.3C186.7,107,213,85,240,85.3C266.7,85,293,107,320,133.3C346.7,160,373,192,400,186.7C426.7,181,453,139,480,106.7C506.7,75,533,53,560,85.3C586.7,117,613,203,640,245.3C666.7,288,693,288,720,266.7C746.7,245,773,203,800,192C826.7,181,853,203,880,197.3C906.7,192,933,160,960,176C986.7,192,1013,256,1040,277.3C1066.7,299,1093,277,1120,250.7C1146.7,224,1173,192,1200,181.3C1226.7,171,1253,181,1280,170.7C1306.7,160,1333,128,1360,117.3C1386.7,107,1413,117,1427,122.7L1440,128L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z'
        />
      </svg>

      <div className='slider-container w-full h-screen flex justify-center items-center bg-gray-100 relative overflow-hidden'>
        <h1 className='PopularStories z-10'>PopularStories</h1>{' '}
        {/* التأكد من أن العنوان يظهر فوق الخلفية */}
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className='slick-slide flex justify-center items-center h-full'
            >
              <img
                src={image}
                alt={`Story ${index + 1}`}
                className='shadow-lg rounded-lg' // إضافة ظل وحواف ناعمة للصورة
                style={{
                  maxHeight: '80vh',
                  width: 'auto',
                  objectFit: 'contain',
                  margin: '0 auto',
                  zIndex: 1,
                }} // تحسين الهامش
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default PopularStories;
