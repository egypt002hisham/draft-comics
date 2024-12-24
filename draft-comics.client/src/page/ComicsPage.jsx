// Importing necessary React components and assets
import React from 'react';
// Importing images for stories
import story1 from '../static/comics_img/3abe4c65bf0f5dd12c0e1f557e0edb4c.webp';
import story2 from '../static/comics_img/comics-releasing-to-mu-early-v0-uqea2eyxqcsd1.webp';
import story3 from '../static/comics_img/th-midcap.webp';
// Importing CSS for styling the Comics Page
import './ComicsPage.css';
// Importing the PopularStories component for displaying popular stories
import PopularStories from '../component/PopularStories';
// Importing framer-motion for animations
import { motion } from 'framer-motion';
// Importing additional sub-sections for department displays
import { Cartoonia, TranslatedComics } from '../component/SubSections';
import ListItemTable from '../component/ListItemTable';

const ComicsPage = () => {
  // Animation variants for smooth transitions
  const variants = {
    initial: { opacity: 0, y: 20 }, // Initial state: faded out and slightly moved down
    animate: { opacity: 1, y: 0 }, // Animate to: fully visible and original position
    exit: { opacity: 0, y: -20 }, // Exit state: faded out and slightly moved up
  };

  // Array of stories with images, titles, descriptions, and links
  const stories = [
    {
      imgSrc: story1,
      title: 'القصة الأولى',
      description: 'وصف موجز للقصة الأولى.',
      link: 'comic_page_1.html',
    },
    {
      imgSrc: story2,
      title: 'القصة الثانية',
      description: 'وصف موجز للقصة الثانية.',
      link: 'comic_page_2.html',
    },
    {
      imgSrc: story3,
      title: 'القصة الثالثة',
      description: 'وصف موجز للقصة الثالثة.',
      link: 'comic_page_3.html',
    },
    // Repeating stories for demonstration (replace or expand as needed)
    {
      imgSrc: story1,
      title: 'القصة الأولى',
      description: 'وصف موجز للقصة الأولى.',
      link: 'comic_page_1.html',
    },
    // Additional stories can be added here
  ];

  return (
    <>
      {/* Popular stories section */}
      <PopularStories />

      {/* Main content */}
      <main>
        <section className='comics'>
          {/* Animated section with a background */}
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='home-container comics_background'
          >
            {/* Comics title */}
            <div className='comics_title'>القصص المصورة</div>

            {/* Grid of comics */}
            <div className='comics_grid'>
              {stories.map((story, index) => (
                <a key={index} href={story.link} className='comic-link'>
                  {/* Story image */}
                  <img src={story.imgSrc} alt={story.title} />
                  {/* Story title */}
                  <div className='comic-info'>
                    <h3>{story.title}</h3>
                  </div>
                </a>
              ))}
            </div>

            {/* Comics department section */}
            <div className='DepartmentComics'>
              <h1 className='TitleDepartmentComics'>أقسام القصص المصورة</h1>
              <div className='DepartComcicsMain'>
                {/* Cartoonia subsection */}
                <div id='cartoonia' className='DepartComicsCartoonia'>
                  <Cartoonia />
                </div>
                {/* Translated Comics subsection */}
                <div
                  id='translatedComics'
                  className='DepartComicsTranslatedComics'
                >
                  <TranslatedComics />
                </div>
                <ListItemTable filter='Comics' />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default ComicsPage;
