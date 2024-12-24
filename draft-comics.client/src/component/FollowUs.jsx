import React from 'react';
import './FollowUs.css';
import Social from '../static/Social/undraw_Social_life_re_x7t5.png'; // استيراد الـ SVG كـ React Component

const FollowUs = () => {
  return (
    <div className='follow-us-container'>
      <div className='follow-us-content'>
        {/* إدراج صورة SVG كعنصر React */}
        <img src={Social} className='social-image' />{' '}
        {/* إضافة الكلاس لتحكم في حجم الصورة */}
      </div>

      <div className='sociall-text-two'>
        <p>
          تابعنا عبر وسائل التواصل الاجتماعي:
          <br />
          احصل على آخر التحديثات !
        </p>
      </div>
    </div>
  );
};

export default FollowUs;
