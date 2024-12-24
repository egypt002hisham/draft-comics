import React from 'react';
import './Card.css';

const Card = ({ Title, img, Description }) => {
  return (
    <div className='card'>
      <div className='cardfront'>
        <img src={img} alt='card-image' />
      </div>
      <div className='cardback'>
        <h1 className='TitleCradBook'>{Title}</h1>
        <p className='DescriotionCradBook'>{Description}</p>
      </div>
    </div>
  );
};

export default Card;
