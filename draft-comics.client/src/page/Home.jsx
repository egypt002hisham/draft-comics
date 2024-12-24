// Importing React and the motion component from framer-motion for animations
import React from 'react';
import { motion } from 'framer-motion';
// Importing the CSS file for styling the Home page
import './Home.css';
// Importing custom components for the department section and social media follow section
import DePartment from '../component/DePartment';
import FollowUs from '../component/FollowUs';
import ListItemTable from '../component/ListItemTable';

const Home = () => {
  // Defining animation variants for smooth transitions
  const variants = {
    initial: { opacity: 0, y: 20 }, // Initial state: faded out and slightly moved down
    animate: { opacity: 1, y: 0 }, // Animate to: fully visible and original position
    exit: { opacity: 0, y: -20 }, // Exit state: faded out and slightly moved up
  };

  return (
    <>
      {/* Background overlay */}
      <div className='back'></div>
      {/* Decorative wave element */}
      <div className='wave'></div>

      {/* Main section of the Home page */}
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={variants}
        className='home-container'
      >
        {/* Page title */}
        <div className='Title'>
          <h1>درافت كوميكس | مرحبًا بكم</h1>
        </div>
        {/* Brief description */}
        <p>وجهتكم المميزة لكل ما يتعلق بالكوميكس.</p>
        <p>
          استكشفوا مجموعتنا، اكتشفوا قصصًا جديدة، واستمتعوا بمغامرات الكوميكس
          المفضلة لديكم!
        </p>
      </motion.div>

      {/* Spacer between sections */}
      <div className='separator'></div>

      {/* Section for displaying different departments */}
      <div className='department-container'>
        <DePartment />
      </div>

      {/* Spacer between departments and follow section */}
      <div className='separatorDepart'></div>

      <ListItemTable filter='' />
      <div className='separatorDepart'></div>

      {/* Social media follow section */}
      <FollowUs />
    </>
  );
};

export default Home;
