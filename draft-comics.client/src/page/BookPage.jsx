// Importing necessary React components and assets
import React from 'react';
// Importing the Card component for displaying individual book cards
import Card from '../component/Card';
// Importing CSS for styling the Book Page
import './BookPage.css';
// Importing book image and book icon
import bookImage from '../static/book_img/MV5BYjQ1MGI2M2YtNzliMy00ZTQ1LWFjMjMtZmM0NDJhYjBmMGQ5XkEyXkFqcGc@.webp';
import BookIco from '../static/img/f1bb2115bcd93930f57aaf82c773747e-removebg-preview.png';
import { NoVels, BookTranslated } from '../component/SubSections';
import ListItemTable from '../component/ListItemTable';

// Main functional component for the Book Page
const BookPage = () => {
  // Array of book data with titles, descriptions, and images
  const bookImgs = [
    {
      title: 'عنوان الكتاب 1',
      describe: 'وصف مختصر للكتاب 1.',
      img: bookImage,
    },
    {
      title: 'عنوان الكتاب 2',
      describe: 'وصف مختصر للكتاب 2.',
      img: bookImage,
    },
    {
      title: 'عنوان الكتاب 3',
      describe: 'وصف مختصر للكتاب 3.',
      img: bookImage,
    },
    {
      title: 'عنوان الكتاب 4',
      describe: 'وصف مختصر للكتاب 4.',
      img: bookImage,
    },
    {
      title: 'عنوان الكتاب 5',
      describe: 'وصف مختصر للكتاب 5.',
      img: bookImage,
    },
    {
      title: 'عنوان الكتاب 6',
      describe: 'وصف مختصر للكتاب 6.',
      img: bookImage,
    },
  ];

  return (
    <>
      {/* Welcome section for the books page */}
      <div className='Welcomebooks'>
        {/* Main title */}
        <h1>كتب للقراءة</h1>

        {/* Wave SVG for decorative design */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#188677'
            fillOpacity='1'
            d='M0,64L26.7,74.7C53.3,85,107,107,160,106.7C213.3,107,267,85,320,96C373.3,107,427,149,480,181.3C533.3,213,587,235,640,218.7C693.3,203,747,149,800,154.7C853.3,160,907,224,960,240C1013.3,256,1067,224,1120,224C1173.3,224,1227,256,1280,240C1333.3,224,1387,160,1413,128L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
          ></path>
        </svg>

        {/* Book icon */}
        <img src={BookIco} className='bookico' alt='Book Icon'></img>

        {/* List of books displayed using the Card component */}
        <div className='bookList'>
          {bookImgs.map((item, index) => (
            <div key={index} className='bookItem'>
              {/* Card component for individual books */}
              <Card
                Title={item.title}
                img={item.img}
                Description={item.describe}
              />
            </div>
          ))}
        </div>

        <div className='DepartmentBooksAllSHOW'>
          <NoVels />
          <BookTranslated />
        </div>

        <ListItemTable filter='Books' />
      </div>
    </>
  );
};

export default BookPage;
