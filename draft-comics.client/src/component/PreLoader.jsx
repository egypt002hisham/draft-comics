import React, { useEffect } from 'react';
import { preLoaderAnim } from '../Animation';
import './PreLoader.css';
import logo from '../Logo.png';

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    preLoaderAnim();
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish(); // التأكد من استدعاء onFinish
      }
    }, 3500); // تأكد من أن الوقت متطابق مع مدة الأنيميشن
    return () => clearTimeout(timer); // تنظيف المؤقت عند التفكيك
  }, [onFinish]);

  return (
    <div className='preloader'>
      <img src={logo} alt='Logo' />
      <div className='text-container'>
        <span>| Draft Comics</span>
      </div>
    </div>
  );
};

export default Preloader;
