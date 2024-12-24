// Importing React and useState for managing state in the page
import React, { useState } from 'react';
// Importing the CSS file for styling the page
import './ForumPage.css';

// Defining the ForumPage component
const ForumPage = () => {
  // Using useState to manage the number of likes
  const [likes, setLikes] = useState(0);
  // Defining the forum's title
  const Title = 'منتدى الضحك';

  // Function to increase the like count when the like button is clicked
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Defining a list of forum items
  const ItemForum = [
    {
      Title: 'الموضوع الأول',
      Description: 'هذا وصف موجز للموضوع الأول الذي يتم مناقشته في المنتدى.',
      ImgSrc: 'https://via.placeholder.com/150',
    },
    {
      Title: 'الموضوع الثاني',
      Description: 'هذا وصف موجز للموضوع الثاني الذي يتم مناقشته في المنتدى.',
      ImgSrc: 'https://via.placeholder.com/150',
    },
    {
      Title: 'الموضوع الثالث',
      Description: 'هذا وصف موجز للموضوع الثالث الذي يتم مناقشته في المنتدى.',
      ImgSrc: 'https://via.placeholder.com/150',
    },
    {
      Title: 'الموضوع الرابع',
      Description: 'هذا وصف موجز للموضوع الرابع الذي يتم مناقشته في المنتدى.',
      ImgSrc: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <>
      {/* Section for the forum header */}
      <div className='StartSectionForum'>
        <h1 className='TitleSectionForum'>{Title}</h1>
        <p className='ParacrifSectionForum'>
          مرحبًا بكم في منتدانا! استمتعوا بالميمات المضحكة.
        </p>
      </div>

      {/* Section for displaying the list of forum items */}
      <div className='ItemListForum'>
        {ItemForum.map((item, index) => (
          <div className='ItemForum' key={index}>
            <div className='BodyItemForum'>
              {/* Displaying the forum item title */}
              <h2 className='TitleItemForum'>{item.Title}</h2>
              {/* Displaying the forum item description */}
              <p className='DescriptionItemForum'>{item.Description}</p>
              {/* Displaying the forum item image */}
              <img
                className='IMGFORUMPEPAZ'
                src={item.ImgSrc}
                alt={item.Title}
              />
            </div>
            {/* Section for user interactions */}
            <div className='ActionWithUsers'>
              {/* Like button */}
              <button className='LikeForumAction' onClick={handleLike}>
                👍 إعجاب
              </button>
              {/* Displaying the total number of likes */}
              <p className='NumberLikesFromUsers'>
                {likes} {likes === 1 ? 'إعجاب' : 'إعجابات'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForumPage;
