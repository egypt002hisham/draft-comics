import React from 'react';
import Slider from 'react-slick';
import SampleImage1 from '../static/comics_img/3abe4c65bf0f5dd12c0e1f557e0edb4c.webp';
import SampleImage2 from '../static/comics_img/3abe4c65bf0f5dd12c0e1f557e0edb4c.webp';
import SampleImage3 from '../static/comics_img/3abe4c65bf0f5dd12c0e1f557e0edb4c.webp';
import SampleImage4 from '../static/comics_img/comics-releasing-to-mu-early-v0-uqea2eyxqcsd1.webp';
import SampleImage5 from '../static/comics_img/comics-releasing-to-mu-early-v0-uqea2eyxqcsd1.webp';
import SampleImage6 from '../static/comics_img/comics-releasing-to-mu-early-v0-uqea2eyxqcsd1.webp';
import SampleImage7 from '../static/comics_img/th-midcap.webp';
import SampleImage8 from '../static/comics_img/th-midcap.webp';
import SampleImage9 from '../static/comics_img/th-midcap.webp';

import './SubSections.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sampleImages = {
  Cartoonia: [
    SampleImage1,
    SampleImage2,
    SampleImage3,
    SampleImage2,
    SampleImage2,
    SampleImage2,
  ],
  TranslatedComics: [SampleImage4, SampleImage5, SampleImage6],
  NoVels: [SampleImage7, SampleImage8, SampleImage9],
  BookTranslated: [SampleImage1, SampleImage2, SampleImage3],
};

const SubSections = ({ title, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <div className='carousel-title-container'>
        <h1 className='carousel-title'>{title}</h1>
        <div className='carousel-title-frame'></div>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className='carousel-item'>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='carousel-img'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Cartoonia = ({ StylePublic }) => (
  <div className='DepartSytle'>
    <SubSections
      title='كرتونيا'
      images={sampleImages.Cartoonia}
      StylePublic={StylePublic}
    />
  </div>
);

const TranslatedComics = ({ StylePublic }) => (
  <div className='DepartSytle'>
    <SubSections
      title='كوميكس مترجمة'
      images={sampleImages.TranslatedComics}
      StylePublic={StylePublic}
    />
  </div>
);

const NoVels = ({ StylePublic }) => (
  <div className='DepartSytle'>
    <SubSections
      title='روايات'
      images={sampleImages.NoVels}
      StylePublic={StylePublic}
    />
  </div>
);

const BookTranslated = ({ StylePublic }) => (
  <div className='DepartSytle'>
    <SubSections
      title='كتب مترجمة'
      images={sampleImages.BookTranslated}
      StylePublic={StylePublic}
    />
  </div>
);

export { Cartoonia, TranslatedComics, NoVels, BookTranslated };
