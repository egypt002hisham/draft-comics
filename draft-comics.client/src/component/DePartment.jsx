import React from 'react';
import { Link } from 'react-router-dom';
import './DePartment.css';
import Comics_Logo from '../static/img/Sale__1_-removebg-preview.png';
import books_Logo from '../static/img/Sale__2_-removebg-preview.png';
import Furom_Logo from '../static/img/Sale__3_-removebg-preview.png';

const Department = () => {
  const Comics = ['Cartoonia', 'Translated Comics'];
  const Book = ['novels', 'translated'];
  const department = [
    { depart: Comics, Title: 'Comics', image: Comics_Logo },
    { depart: Book, Title: 'Books', image: books_Logo },
    { depart: null, Title: 'Forum', image: Furom_Logo },
  ];

  // Update the getLink function to scroll to specific sections
  const getLink = (part) => {
    switch (part) {
      case 'Cartoonia':
        return '/comics'; // Updated to anchor links
      case 'Translated Comics':
        return '/comics'; // Updated to anchor links
      case 'novels':
        return '/books'; // Updated to anchor links
      case 'translated':
        return '/books'; // Updated to anchor links
      default:
        return '#';
    }
  };

  return (
    <div className='Row'>
      {department.map((Depart, index) => (
        <div key={index} className='item'>
          <img src={Depart.image} alt={Depart.Title} />
          <p>
            <strong>Department:</strong>{' '}
            {Depart.depart ? (
              Depart.depart.map((part, idx) => (
                <span key={idx}>
                  <Link to={getLink(part)}>{part}</Link>
                  {idx < Depart.depart.length - 1 && ', '}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Department;
